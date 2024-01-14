import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let nevigate = useNavigate();
  const onClick = () => {
    nevigate("/");
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
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                  onCLick={onClick}
                >
                  Home
                </Link>
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
                  Authentication
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/student">
                      Students
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/logins">
                      Faculty
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/loginf">
                      Faculty incharge
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      staff incharge
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      admin staff
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      admin faculty
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
