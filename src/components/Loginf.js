import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import "../style/style1.css";

import { useNavigate } from "react-router-dom";

const Loginf = () => {
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
            console.log(decoded.email);

            // navigate("/combineds");
            //navigate(`/combinedf/${decoded.email}`);
            if (
              decoded.email === "132101003@smail.iitpkd.ac.in" ||
              decoded.email === "apsinghxz@gmail.com"
            ) {
              navigate(`/combinedf/${decoded.email}`);
            } else {
              navigate("/");
              alert("Please login with valid Id");
            }
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

export default Loginf;
