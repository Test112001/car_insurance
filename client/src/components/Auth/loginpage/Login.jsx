import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import { useHistory, Link } from "react-router-dom";

const Login = ({ setUserState }) => {
  const history = useHistory();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);

    try {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        const response = await fetch("http://localhost:5000/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        alert(data.message);
        setUserState(data.user);
        history.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <Link to="/register">Not yet registered? Register Now</Link>
    </div>
  );
};

export default Login;
