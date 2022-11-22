import React, { useState } from "react";
import "../styles/connection.scss";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";

function Connection() {
  const [email, setEmail] = useState(""); //decomposition
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [createUser] = UserAuth();

  const onSubmit = (e) => {
    e.preventDefault();

    createUser(email, password);

    console.log(email);
    console.log(password);
  };

  return (
    <>
      <section id="hero">
        <div className="hero-image">
          <div className="container">
            <h1 className="hero-title text-uppercase text-white"></h1>
          </div>
        </div>
      </section>
      <div className="container formulaire">
        <div className="head text-center">
          <h2>connection</h2>
          <p>
            si vous n'avez pas un compte?
            <Link to="/inscription">inscrivez-vous ici!</Link>
          </p>
        </div>
        <div className="form-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              valider
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Connection;
