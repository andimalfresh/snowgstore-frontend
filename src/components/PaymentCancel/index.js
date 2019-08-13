import React from 'react'
import { Link } from 'react-router-dom'
import styles from './payment-cancel.module.scss'
 
const PaymentCancel = () => {
return (
    <div className={styles.canceledDiv}>
        <h2> Thanks for Shopping with Snow G Streetwear</h2>
        <h3> Your payment has successfully been Canceled.</h3>
        <Link className={styles.backButton} to='/'>Back to Home</Link>
    </div>
    
 )
}

export default PaymentCancel