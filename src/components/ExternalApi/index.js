// src/components/ExternalApi.js

import React, { useState } from 'react'
import { useAuth0 } from '../../react-auth0-wrapper'

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false)
  const [apiMessage, setApiMessage] = useState('')
  const { getTokenSilently } = useAuth0()


// Promise Chain way to Exchange Token
    // fetch('http://localhost:4000/api/external', {
    //     headers: {
    //         Authorization:`Bearer ${token}`
    //         }
    //     })
    //     .then(responce => responce.json())
    //     .then(responceData => {
    //         setShowResult(true)
    //         setApiMessage(responceData)
    //     })
    //     .catch(error => console.error(error))

    //   setShowResult(true)
    //   setApiMessage(responseData)
    //     }) 
    //     .catch(error => console.error(error)


//   ASYNC Way to Exchange Token


  const callApi = async () => {
    try {
      const token = await getTokenSilently()

      const response = await fetch('http://localhost:4000/api/external', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const responseData = await response.json()

      setShowResult(true)
      setApiMessage(responseData)
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <div>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </div>
  )
}

export default ExternalApi