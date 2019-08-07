
import React from 'react'
import styles from './profile.module.scss'
import { useAuth0 } from '../../react-auth0-wrapper'

const Profile = () => {
  const { loading, user } = useAuth0()

  if (loading || !user) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className={styles.profileCard}>
      <img src={user.picture} alt='Profile' />
      <h2 className={styles.Name}>{user.name}</h2>
      <p className={styles.Email}>{user.email}</p>
      <code className={styles.codeSnippet} >{JSON.stringify(user, null, 2)}</code>
    </div>
  )
}

export default Profile