import React, { useEffect, useState } from "react";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";

import { useHistory, Link } from "react-router-dom";
const Register = () => {
  const history = useHistory();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      error.name = "Name is required";
    }

    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
    }

    if (!values.address) {
      error.address = "address is required";
    }
    if (!values.state) {
      error.state = "State is required";
    }
    if (!values.city) {
      error.city = "City is required";
    }

    if (!values.pincode) {
      error.pincode = "Pincode is required";
    }

    if (!values.phone) {
      error.phone = "phone is required";
    }

    return error;
  };

  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(user);

          const response = await fetch(
            "http://localhost:5000/api/user/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          alert(data.message);
          history.push("/login");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [formErrors, isSubmit, history, user]);

  return (
    <>
      <div className={registerstyle.register}>
        <form>
          <h1>Create your account</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={changeHandler}
            value={user.name}
          />
          <p className={basestyle.error}>{formErrors.name}</p>

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
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.cpassword}
          />
          <p className={basestyle.error}>{formErrors.cpassword}</p>

          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            onChange={changeHandler}
            value={user.address}
          />
          <p className={basestyle.error}>{formErrors.address}</p>

          <input
            type="text"
            name="state"
            id="state"
            placeholder="State"
            onChange={changeHandler}
            value={user.state}
          />
          <p className={basestyle.error}>{formErrors.state}</p>

          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            onChange={changeHandler}
            value={user.city}
          />
          <p className={basestyle.error}>{formErrors.city}</p>

          <input
            type="text"
            name="pincode"
            id="pincode"
            placeholder="Pincode"
            onChange={changeHandler}
            value={user.pincode}
          />
          <p className={basestyle.error}>{formErrors.pincode}</p>

          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={changeHandler}
            value={user.phone}
            pattern="[0-9]*"
          />
          <p className={basestyle.error}>{formErrors.phone}</p>

          <button className={basestyle.button_common} onClick={signupHandler}>
            Register
          </button>
        </form>
        <Link to="/login">Already registered? Login</Link>
      </div>
    </>
  );
};
export default Register;
