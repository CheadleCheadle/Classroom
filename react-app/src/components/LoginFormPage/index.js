import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    console.log("THIS IS THE DATA", data);
    if (!data) {
      history.replace("/classes");
    }
    if (data) {
      setErrors(["Invalid Credentials"]);
    }
  };

  const handleDemo = () => {
    dispatch(login("demo@aa.io", "password"))
    .then(() => history.push('/classes'))
  }

  return (
    <div className="login-form-cont">
      <div className="login-form">
        <img id="goog-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"></img>
      <h2 id="signin">Sign in</h2>
      <p id="lnding-msg">Use your Google Account (not really 😄)</p>
      <div className="form-login">
        <ul id="login-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        <button id="login" type="submit">Log In</button>
      </form>
      </div>
      <div id="create-account-cont">
      <div id="create-account" onClick={() => history.push('/signup')}>Create account</div>
      <div id="create-account" onClick={handleDemo}>Demo User</div>
      </div>
      </div>
      </div>
  );
}

export default LoginFormPage;
