import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../../react-auth0-wrapper'
import styles from './navigation.module.scss'

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
return (
    <nav className={styles.nav}>
      <Link className={styles.navButton} to='/'>HOME</Link>
      <Link className={styles.navButton} to='/products'>PRODUCTS</Link>

      {isAuthenticated && <Link className={styles.navButton} to='/profile'>PROFILE</Link>}
        
      {!isAuthenticated && (
          <Link className={styles.navButton}
            onClick={() =>
              loginWithRedirect({})
            }
          >
            LOG IN
          </Link>
        )}

        {isAuthenticated && <Link className={styles.navButton} onClick={() => logout()}>LOG OUT</Link>}
    </nav>
    )
}

export default Navigation