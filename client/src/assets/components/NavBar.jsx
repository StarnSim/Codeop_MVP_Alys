import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';


export default function NavBar() {
  const { isLoggedIn, signIn, signOut } = useAuth();

  const logout = () => {
    localStorage.removeItem("token");
    signOut();
  };

  return (
    <div className="fixed-top">
       <div>
        {isLoggedIn ? (
          <div className="">You are logged in</div>
        ) : (
          <div className="">You are logged out</div>
        )}
        </div>
    
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
    <div className="container-fluid">
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <Link to="/"> Home </Link>
            </li>

            {!isLoggedIn && (
              <li class="nav-item">
               <Link to="/login"> Login </Link>
              </li>
            )}

            {!isLoggedIn && (
              <li class="nav-item">
               <Link to="/userreg"> Register </Link>
              </li>
            )}

                 {isLoggedIn && (
              <li class="nav-item">
                <Link to="/profile"> Profile </Link>
              </li>
            )}
               {isLoggedIn && (
              <li class="nav-item">
               <Link to="/event-search"> All Hobbies </Link>
              </li>
            )}
               {isLoggedIn && (
              <li class="nav-item">
                <Link to="/new-event"> Create New Event </Link>
              </li>
            )}

            {isLoggedIn && (
              <button className="btn btn-outline-dark ml-2" onClick={logout}>
                Log out
              </button>
            )}
          </ul>
        </div>
       
      </div>
    </nav>
    </div>
  );
}

