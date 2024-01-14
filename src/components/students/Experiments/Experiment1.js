import React from "react";
import { useState, useContext, useEffect } from "react";
import CifForm from "../cifForm";
import { useNavigate } from "react-router-dom";
import Booking2 from "../Booking2";
import axios from "axios";
import studentContext from "../../../context/student/studentContext";
import { useParams } from "react-router-dom";

const Experiment1 = () => {
  let navigate = useNavigate();
  const { exp, bookedEmail } = useParams();

  const context = useContext(studentContext);
  const { getBookedSlots, bookedSlots, counter, addCounter, getCounter } =
    context;

  //const { reqSlots } = context;
  //console.log("exp req slot");
  //console.log(reqSlots);

  const [credentials, setCredentials] = useState({
    job_no: "",
    username: "",
    institute_Id: "",
    payment_funded_from: "",
    sponsoredReserch: false,
    industrialConsultancy: false,
    projectCode: "",
    budgetHead: "",
    consumables: false,
    contingencies: false,
    analytical_charges: false,
    others: false,
    end_data_of_project: "",
    department: "",
    supervisor: "",
    mobile_no: "",
    institute_emailId: "",
    date: "",
    experiment: "",
    time: [],
    scanning_angle: "",
    powder: false,
    thin_film: false,
    variable_temp_xrd: false,
    xrr: false,
    saxs: false,
    pole_figure: false,
    additional_remarks: "",
    sample_comp_exp2: "",
    rockwell: false,
    brinell: false,
    vickers: false,
    knoop: false,
    additional_parameter_exp2: "",
  });

  useEffect(() => {
    const fetchCounter = async () => {
      await getCounter();
      // console.log("exp counter", counter);
    };
    fetchCounter();
  }, []);
  console.log("exp counter", counter);

  {
    /*} useEffect(() => {
    if (counter !== null) {
      setCredentials({
        ...credentials,
        job_no: counter.toString(),
      });
      // addCounter(counter);
    }
  }, []);*/
  }
  const requiredFields = ["username", "institute_Id", "supervisor", "date"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      job_no,
      username,
      institute_Id,
      payment_funded_from,
      sponsoredReserch,
      industrialConsultancy,
      projectCode,
      budgetHead,
      consumables,
      contingencies,
      analytical_charges,
      others,
      end_data_of_project,
      department,
      supervisor,
      mobile_no,
      institute_emailId,
      date,
      experiment,
      time,
      scanning_angle,
      powder,
      thin_film,
      variable_temp_xrd,
      xrr,
      saxs,
      pole_figure,
      additional_remarks,
      sample_comp_exp2,
      rockwell,
      brinell,
      vickers,
      knoop,
      additional_parameter_exp2,
    } = credentials;

    //
    for (const key of requiredFields) {
      if (!credentials[key]) {
        alert("Please fill in all the required fields.");
        //navigate(`/booking2/${bookedEmail}/${exp}`);
        navigate(`/${exp}/${bookedEmail}`);

        return; // Prevent further execution if any required field is empty
      }
    }

    //

    const response = await fetch(
      "http://localhost:5000/api/students/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job_no: counter,
          username,
          institute_Id,
          payment_funded_from,
          sponsoredReserch,
          industrialConsultancy,
          projectCode,
          budgetHead,
          consumables,
          contingencies,
          analytical_charges,
          others,
          end_data_of_project,
          department,
          supervisor,
          mobile_no,
          institute_emailId: bookedEmail,
          date,
          experiment: exp,
          scanning_angle,
          powder,
          thin_film,
          variable_temp_xrd,
          xrr,
          saxs,
          pole_figure,
          additional_remarks,
          sample_comp_exp2,
          rockwell,
          brinell,
          vickers,
          knoop,
          additional_parameter_exp2,
          //time: ,
        }),
      }
    );
    const json = await response.json();
    console.log("details for exp 2", json);
    if (counter) {
      addCounter(counter);
    }

    // setCredentials({ ...credentials, [credentials.time]: "1:00" });

    // addCounter(counter);

    navigate(`/booking2/${bookedEmail}/${exp}`);
    //if (json.success) {
    //save the authtoken and redirect
    //localStorage.setItem('token',json.authtoken);
    //props.showAlert("Logged in successfully", "success");
    //  navigate('/');
    // } else {
    // props.showAlert("Invalid Credentials", "danger");
    //}
  };

  // const [selectedDate, setSelectedDate] = useState('');
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-5">
        <hr style={{ border: "3px black solid" }}></hr>
        <p>
          <strong>Indian Institute of Technology Palakkad</strong>
        </p>
        <p>
          <strong>
            {" "}
            Under Ministry of Human Resource Development, Govt. of India{" "}
          </strong>
        </p>
        <p>
          <strong> Central Instrumentation Facility </strong>
        </p>
        <hr style={{ border: "3px black solid" }}></hr>
        <form
          class="row g-3 mt-4 mx-auto"
          style={{ width: "68%", border: "black solid 1px" }}
          onSubmit={handleSubmit}
        >
          <p className="mb-3" style={{ textAlign: "center" }}>
            JOB REQUISITION FORM_ Internal Users _XRD Analysis
          </p>
          <div class="col-md-12">
            <label for="" class="form-label">
              Job No(For office Use):
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              name="job_no"
              value={counter}
              // readOnly
              onChange={onChange}
            />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              User Name:
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              name="username"
              onChange={onChange}
            />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              Institute ID card No:
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              name="institute_Id"
              onChange={onChange}
            />
          </div>
          <div class="col-6">
            <label for="" class="form-label">
              Payment for Analysis to be funded from:
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder=" "
              name="payment_funded_from"
              onChange={onChange}
            />
          </div>
          <div class="col-3">
            <div class="form-check mt-5">
              <label class="form-check-label" for="">
                Sponsored Research
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                id=""
                name="sponsoredReserch"
                onChange={onChange}
                value={true}
              />
            </div>
          </div>
          <div class="col-3">
            <div class="form-check mt-5">
              <label class="form-check-label" for="">
                Industrial Consultancy
              </label>
              <input
                class="form-check-input"
                type="checkbox"
                id=""
                name="industrialConsultancy"
                onChange={onChange}
                value={true}
              />
            </div>
          </div>
          <div class="col-12">
            <label for="" class="form-label">
              Project code
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder=""
              name="projectCode"
              onChange={onChange}
            />
          </div>
          <div class="col-md-4">
            <label for="" class="form-label">
              Budget Head:
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              name="budgetHead"
              onChange={onChange}
            />
          </div>
          <div class="col-2">
            <div class="form-check mt-5">
              <input
                class="form-check-input"
                type="checkbox"
                id=""
                name="consumables"
                onChange={onChange}
                value={true}
              />
              <label class="form-check-label" for="">
                Consumables
              </label>
            </div>
          </div>
          <div class="col-2">
            <div class="form-check mt-5">
              <input
                class="form-check-input"
                type="checkbox"
                id=""
                name="contingencies"
                onChange={onChange}
                value={true}
              />
              <label class="form-check-label" for="">
                Contingencies
              </label>
            </div>
          </div>
          <div class="col-2">
            <div class="form-check mt-5">
              <input
                class="form-check-input"
                type="checkbox"
                id=""
                name="analytical_charges"
                onChange={onChange}
                value={true}
              />
              <label class="form-check-label" for="">
                Analytical Charges
              </label>
            </div>
          </div>
          <div class="col-2">
            <div class="form-check mt-5">
              <input
                class="form-check-input"
                type="checkbox"
                id=""
                name="others"
                onchange={onChange}
                value={true}
              />
              <label class="form-check-label" for="">
                Others
              </label>
            </div>
          </div>
          <div class="col-12">
            <label for="" class="form-label">
              End of the Project:
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              placeholder=""
              name="end_data_of_project"
              onChange={onChange}
            />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              Department:
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              name="department"
              onChange={onChange}
            />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              Name of the Supervisor:
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              name="supervisor"
              onChange={onChange}
            />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              Mobile No:
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              name="mobile_no"
              onChange={onChange}
            />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              Institute Email Id:
            </label>
            <input
              type="text"
              class="form-control"
              id="to"
              name="institute_emailId"
              value={bookedEmail}
              onChange={onChange}
            />
          </div>
          {/*} <div class="col-md-4">
            <label for="" class="form-label">
              Slot Start Time:
            </label>
            <input type="time" class="form-control" id="" name="job_no" />
          </div>
          <div class="col-md-4">
            <label for="" class="form-label">
              Slot End Time:
            </label>
            <input type="time" class="form-control" id="" name="job_no" />
  </div> */}
          {exp && exp === "exp1" ? (
            <>
              <p className="mb-3" style={{ textAlign: "center" }}>
                Sample Details (Max. 3Nos.) Samples ready to load will only be
                accepted.
              </p>
              <div class="col-md-6">
                <label for="" class="form-label">
                  Sample compositions and Type:
                  <hr></hr>
                  <span>Scanning angle (2*theta):</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id=""
                  name="scanning_angle"
                  onChange={onChange}
                />
              </div>
              <div class="dropdown col-md-3" style={{ marginTop: "105px" }}>
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Requirement (Y/N)
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="powder"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Powder
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="thin_film"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Thin Film
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="variable_temp_xrd"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Variable Temp XRD
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="xrr"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          XRR
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="saxs"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Saxs
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="pole_figure"
                          id="Checkme1"
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Pole Figure/RSM
                        </label>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-3 col-md-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Additional Remarks/Parameters
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="additional_remarks"
                  onChange={onChange}
                ></textarea>
              </div>
            </>
          ) : (
            <>
              <p className="mb-3" style={{ textAlign: "center" }}>
                Sample Details (Max. 3Nos.) Size – 3”×3” or Less, Surface –
                Highly polished, Shape – Flat only
              </p>
              <div class="col-md-6">
                <label for="" class="form-label">
                  <span>Sample compositions and Type:</span>
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="sample_comp_exp2"
                  onChange={onChange}
                ></textarea>
              </div>
              <div class="dropdown col-md-3" style={{ marginTop: "105px" }}>
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Requirement (Y/N)
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="rockwell"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Rockwell
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="brinell"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Brinell
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="vickers"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Vickers
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="knoop"
                          id=""
                          onChange={onChange}
                          value={true}
                        />
                        <label class="form-check-label" for="Checkme1">
                          Knoop
                        </label>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-3 col-md-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Additional Remarks/Parameters
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="additional_parameter_exp2"
                  onChange={onChange}
                ></textarea>
              </div>
            </>
          )}
          {/*<div class=" mt-4 mb-5">
            <button
              type="submit"
              class="btn btn-primary "
              style={{ width: "200px" }}
              // onClick={handleClick}
            >
              check availibility
            </button>
</div>*/}
          <div class="col-md-4">
            <label for="" class="form-label">
              date:
            </label>
            <input
              type="date"
              class="form-control"
              id=""
              name="date"
              onChange={onChange}
            />
          </div>
          <div class="col-md-4">
            <label for="" class="form-label">
              Experiment :
            </label>
            <input
              type="text"
              class="form-control"
              id=""
              name="experiment"
              value={exp}
              onChange={onChange}
            />
          </div>
          <div class="col-12 mb-3">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Experiment1;
