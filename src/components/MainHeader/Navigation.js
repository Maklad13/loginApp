import React, { useContext } from 'react';
import AuthContext from '../../Context/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
 const actx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {actx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {actx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {actx.isLoggedIn && (
          <li>
            <button onClick={actx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
