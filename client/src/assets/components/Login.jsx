import React from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import {useState} from 'react';


function Login() {
  const { isLoggedIn, signIn } = useAuth();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });


  const [data, setData] = useState(null);
  const [events, setEvents] = useState([]);
  
  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };


const login = async () => {
  try {
    const { data } = await axios.post("/api/auth/login", credentials);

    //store it locally
    localStorage.setItem("token", data.token);
    // console.log(data.message, data.token);
    signIn();
  } catch (error) {
    console.log(error);
  }
};

const requestData = async () => {
  try {
    const { data } = await axios("/api/auth/profile", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    setData(data.message);
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};

return (
  <div>
    <h1> Login</h1>
    <div>
      <input
        value={username}
        onChange={handleChange}
        name="username"
        type="text"
        className="form-control mb-2"
        placeholder='username'
      />
      <input
        value={password}
        onChange={handleChange}
        name="password"
        type="password"
        className="form-control mb-2"
        placeholder='password'
      />
      <div className="d-flex gap-2 justify-content-center">
        <button className="btn btn-primary" onClick={login}>
          Submit
        </button>
      </div>
    </div>
  

    {data && (
      <div className="text-center p-4">
        <div className="alert">{data}</div>
      </div>
    )}

    {isLoggedIn ? (
      <div className="text-center p-4">
        <div className="alert">Hello</div>
      </div>
    ) : (
      <div className="text-center p-4">
        <div className="alert">Please login</div>
      </div>
    )}
  </div>
);
    }


export default Login;




// const [data, setData] = useState(null);
// const [events, setEvents] = useState([]);

// const { username, password } = credentials;

// useEffect(() => {
//   getEvents();
// }, []);

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setCredentials({ ...credentials, [name]: value });
// };

// const login = async () => {
//   try {
//     const { data } = await axios("/api/auth/login", {
//       method: "POST",
//       data: credentials,
//     });

//     //store it locally
//     localStorage.setItem("token", data.token);
//     console.log(data.message, data.token);
//     setData(data.message);
//   } catch (error) {
//     console.log(error);
//     setData(error.message);
//   }
// };

// const logout = () => {
//   localStorage.removeItem("token");
// };

// const requestData = async () => {
//   try {
//     const { data } = await axios("/api/auth/profile", {
//       headers: {
//         authorization: "Bearer " + localStorage.getItem("token"),
//       },
//     });
//     setData(data.message);
//     console.log(data.message);
//   } catch (error) {
//     console.log(error);
//     setData(error.message);
//   }
// };

// const getEvents = async () => {
//   try {
//     const { data } = await axios("/api/events");
//     setEvents(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

