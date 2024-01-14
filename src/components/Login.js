import React, { useState, useEffect, useContext } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import "../style/style1.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import studentContext from "../context/student/studentContext";

const Login = () => {
  const context = useContext(studentContext);
  const { getLoggedinEmail, logggedinEmail } = context;
  const clientId =
    "816480332116-j9eeltlm9q5pu1n0t223o2crt204s003.apps.googleusercontent.com";

  let navigate = useNavigate();

  return (
    <div className=" container centergooglesignin">
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
            // getLoggedinEmail(decoded.email);
            console.log("decoded email", decoded.email);

            if (decoded.email.includes("smail.iitpkd.ac.in")) {
              navigate(`/studentMain/${decoded.email}`);
            } else {
              navigate("/student");
              alert("Please login with institute email Id");
            }

            //navigate(`/studentMain/${decoded.email}`);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        ;
      </GoogleOAuthProvider>
      ;
    </div>
  );
};

export default Login;
