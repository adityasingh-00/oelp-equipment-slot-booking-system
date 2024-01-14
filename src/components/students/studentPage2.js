import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import oelp2 from "./imageStudent/oelp2.jpg";

const StudentMain = () => {
  const { email } = useParams();
  const exp1 = "exp1";
  const exp2 = "exp2";
  console.log("student Main email", email);

  let navigate = useNavigate();
  const onClick1 = () => {
    navigate(`/booking2/${email}/${exp1}`);
  };
  const onClick2 = () => {
    navigate(`/booking2/${email}/${exp2}`);
  };
  const studentNotification = () => {
    console.log("email check", email);
    navigate(`/notificationstudent/${email}`);
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            CIF
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Experiment
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" onClick={onClick1}>
                      Experiment 1
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" onClick={onClick2}>
                      Experiment 2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  onClick={studentNotification}
                >
                  Notification
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-5">
        <h3 className="my-5">
          <strong>Universal Hardness Tester</strong>
        </h3>
        <img
          style={{ height: "400px" }}
          src={oelp2}
          alt="Paris"
          class="center"
        />
        <h3>
          <strong>Equipment Measurements & Capabilities:</strong>
        </h3>
        <h3>Capable of measuring hardness of the materials using with</h3>
        <br></br>
        <p>1 Rockwell</p>
        <br></br>
        <p>2 Superficial Rockwell</p>
        <br></br>
        <p>3 Brinell, Vickers</p>
        <br></br>
        <p>4 Knoop techniques</p>
        <br></br>
        <p>5 Highest load capacity of 250 kgf</p>
        <span>
          Status of the Instrument :<strong> Active</strong>
          <br></br>
          Location of the Instrument :{" "}
          <strong>Nila Campus , CIF , IIT Palakkad</strong>
        </span>
      </div>
    </div>
  );
};

export default StudentMain;
