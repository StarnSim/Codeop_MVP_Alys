import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

import Home from "./pages/Home";
import AllHobbies from "./pages/AllHobbies";
import EventList from "./pages/EventList";
import SearchForm from "./pages/SearchForm";
import NewEvent from "./pages/NewEvent";
import UserReg from "./pages/UserReg";
import Login from './assets/components/Login'
import Profile from './pages/Profile';
import NavBar from './assets/components/NavBar';
import AuthContext from './assets/context/AuthContext';
import RequireAuth from './assets/components/RequireAuth';


//Simone please ignore AllHobbies and EventList - they don't do anything but I haven't deleted them because it compplained at me when I did and I might use them later etc
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function signIn() {
    setIsLoggedIn(true);
  }

  function signOut() {
    setIsLoggedIn(false);
  }

  const authObject = {
    isLoggedIn,
    signIn,
    signOut,
  };
  
  return (
      <AuthContext.Provider value={authObject}>
        <div>
      <div className="container text-center">
        <NavBar />
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={
          <RequireAuth>
            <Profile/>
            </RequireAuth>}/>

          <Route path="/event-search" element={<SearchForm />} />
          <Route path="/event-list" element={<EventList />} />
          <Route path="/new-event" element={<NewEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userreg" element={<UserReg />} />
          <Route path="/all-hobbies" element={
          <RequireAuth>
            <AllHobbies />
            </RequireAuth>}/>
         
        </Routes>
        
      </div>
      </div>
      </AuthContext.Provider>
   
  );
}


// return (
    
//   <div className = "App">
    
//     <AuthContext.Provider value={authObject}>
//     <NavBar />
//     <nav className="nav-bar">
//         <Link to="/"> Home </Link>
//         {/* <Link to="/all-hobbies"> Hobby List </Link> */}
//         {/* <Link to="/event-list"> All Events </Link> */}
//         <Link to="/event-search"> All Hobbies </Link>
//         <Link to="/new-event"> Create New Event </Link>
//         <Link to="/userreg"> User Registration </Link>
//         <Link to="/login"> Login </Link>
//         <Link to="/profile"> Profile </Link>
//         <RequireAuth>
//           <Dashboard />
//         </RequireAuth>
//     </nav>
    

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/all-hobbies" element={<AllHobbies />} />
//       <Route path="/event-list" element={<EventList />} />
//       <Route path="/event-search" element={<SearchForm />} />
//       <Route path="/new-event" element={<NewEvent />} />
//       <Route path="/userreg" element={<UserReg />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/dashboard" element={<Dashboard />} />
     
      
//     </Routes>
//     </AuthContext.Provider>
//   </div>
 
// );
// }


