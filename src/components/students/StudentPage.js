import React from "react";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import oelp1 from "./imageStudent/oelp1.jpg";

const StudentPage = () => {
  const handleClick = () => {
    navigate("/login");
  };
  let navigate = useNavigate();
  return (
    <div>
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
                  <a class="nav-link active" aria-current="page" href="#">
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
                      <a class="dropdown-item" href="/student">
                        Experiment 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/student/exp2">
                        Experiment 2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <button
                class="btn btn-outline-success"
                type="submit"
                onClick={handleClick}
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/*<h3 style={{ textAlign: "center", marginTop: "200px" }}>
        {" "}
        This is Student slot booking page
  </h3>*/}
      <div className="container my-5">
        <h3 className="my-5">
          <strong>X- Ray Diffractometer</strong>
        </h3>
        <img src={oelp1} alt="Paris" class="center" />
        <h3>
          <strong>Equipment Measurements & Capabilities:</strong>
        </h3>
        <br></br>
        <p>1 9kW system</p>
        <br></br>
        <p>
          2 Characterization of the material crystal structure as well as the
          effect of impurities, strain, meso-structural ordering, particle size.
        </p>
        <br></br>
        <p>
          3 The system allows characterization of thin films, powders at large
          and low incident angles and has attachment for characterization at
          high temperatures (1500 C).
        </p>
        <br></br>
        <p>4 Residual Stress and Pole figure analysis.</p>
        <span>
          <strong>Status of the Instrument :</strong> Active
          <br></br>
          <strong>Location of the Instrument : </strong>Nila Campus , CIF , IIT
          Palakkad
        </span>
      </div>
    </div>
  );
};

export default StudentPage;
