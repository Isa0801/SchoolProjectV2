import React, { useState, useRef, useEffect } from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";

const Register = props => {
  const [user, setUser] = useState({ username: "", password: "", role:"" });
  const [message, setMessage] = useState(null); // useState NULL => signify NOT to render message modal
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    }
  },[]);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser( { username: "", password: "", role: "" });
  }

  const onSubmit = e => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push('/login');
        }, 2000);
      }
    });
  };

  const tempStyle = {
    textAlign: "center",
    width: "99vw",
    height: "100vh",
    paddingTop: "5%",
    backgroundColor: "rgb(27, 28, 34)"
  };

  return (
    <div style={tempStyle}>
    <div style={{maxWidth: "25%", margin: "auto", color: "white", minWidth: "20%"}}>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <h3>Please Register</h3>
        <label htmlFor="username" className="sr-only">Username: </label>
        <input style={{margin: "10px 0"}} type="text"
          name="username"
          value={user.username}
          onChange={onChange}
          className="form-control"
          placeholder="Enter Username" />
        <label htmlFor="password" className="sr-only">Password: </label>
        <input style={{margin: "10px 0"}} type="password"
          name="password"
          value={user.password}
          onChange={onChange}
          className="form-control"
          placeholder="Enter Password" />
        <label htmlFor="role" className="sr-only">Role: </label>
        <input style={{margin: "10px 0"}} type="text"
          name="role"
          value={user.role}
          onChange={onChange}
          className="form-control"
          placeholder="Enter role (admin/user)" />
        <button style={{marginTop: "25px"}} className="btn btn-lg btn-primary btn-block"
          type="submit">Register</button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
    </div>
  );
};

export default Register;

/*
<form onSubmit={onSubmit}>
        <h3>Please Register</h3>
        <label htmlFor="username" className="sr-only">
          Username:
          <input
            type="text"
            name="username"
            onChange={onChange}
            className="form-control"
            placeholder="Enter Username"
          />
        </label>
        <label htmlFor="password" className="sr-only">
          Password:
          <input
            type="password"
            name="password"
            onChange={onChange}
            className="form-control"
            placeholder="Enter Password"
          />
        </label>
        <label htmlFor="role" className="sr-only">
          Role:
          <select
            type="text"
            name="role"
            onChange={onChange}
            className="form-control"
            placeholder="Your Role: "
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
*/