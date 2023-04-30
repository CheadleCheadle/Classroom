import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignupFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
      const errors = {};
    const valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(valid) || !email.includes(".")) {
      errors.email="Invalid email address!";
    }
    if (username.length > 50) {
      errors.username = "Username must be less than 50 characters long";
    }
    if (first_name.length > 50) {
      errors.firstname = "Firstname must be less than 50 characters long";
    }
    if (last_name.length > 50) {
      errors.lastname = "Lastname must be less than 50 characters long";
    }
    if (password.length < 6) {
      errors.password = "Password must be 6 characters or more";
    }
    if (password !== confirmPassword)
      errors.confirmation = "Passwords do not match";
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setDisabled(false);
      console.log("ERRORS", errors);
    } else {
      setDisabled(true);
    }

  }, [email, username, first_name, last_name, password, confirmPassword]);


  if (sessionUser) return <Redirect to="/classes" />;

  const handleSubmit = async (e) => {
    setSubmitted(true)
    e.preventDefault();
    if (password === confirmPassword && !Object.values(errors).length) {
        setErrors([]);
        const data = await dispatch(signUp(username, email, password, first_name, last_name));
        if (!data) {
          history.push('/classes');
        }
        if (data) {
          console.log( 'The data',data);
          const tempError = {};
          tempError.email = "Email address is already in use."
          setErrors(tempError);
        }
    } else {
        // setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };
  // const validateBody = () => {
  //   let tempErrors = [];
  //   const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (!email.match(valid)) {
  //     tempErrors.push("Invalid email address!");
  //   }
  //   if (username.length > 50) {
  //     tempErrors.push("Username must be 50 characters or less");
  //   }
  //   if (first_name.length > 50) {
  //     tempErrors.push("Firstname must be 50 characters or less");
  //   }
  //   if (last_name.length > 50) {
  //     tempErrors.push("Lastname must be 50 characters or less");
  //   }
  //   if (password.length < 6) {
  //     tempErrors.push("Password must be 6 characters or more");
  //   }
  //   setErrors(tempErrors);
  // }
  console.log("THE ERRORS", errors, submitted);

  return (
    <div className="signup-form-cont">
      <div className="form-image-cont">
      <div className="signup-form">
      <img id="goog-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"></img>
      <h1>Create your Account</h1>
      <form onSubmit={handleSubmit}>


          <input
            type="text"
            value={email}
            maxLength={30}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            />
            { submitted && errors.email ? <p id="login-error">{errors.email}</p>: null}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            maxLength={25}
            placeholder="Username"
            />
            {submitted && errors.username ? <p id="login-error">{errors.username}</p> : null}
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
            maxLength="25"
            placeholder="Firstname"
            />
            {submitted && errors.firstname ? <p id="login-error">{errors.firstname}</p> : null}
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
            maxLength={35}
            placeholder="Lastname"
            />
            {submitted && errors.lastname ? <p id="login-error">{errors.lastname}</p> : null}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={100}
            placeholder="Password"
            />
            {submitted && errors.password ? <p id="login-error">{errors.password}</p> : null}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            maxLength={100}
            placeholder="Confirm Password"
            />
            {submitted && errors.confirmation ? <p id="login-error">{errors.confirmation}</p> : null}
        <div className="signup-buttons">
        <button id="login-instead" onClick={() => history.push('/login')}>Sign in instead</button>
        <button id="signup"type="submit">Sign Up</button>
        </div>
      </form>
      </div>
      <img id="signup-img"src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"></img>
      </div>
    </div>
  );
}

export default SignupFormPage;
