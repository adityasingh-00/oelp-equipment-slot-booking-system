import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import studentContext from "../../context/student/studentContext";

function StudentDetails1() {
  const { email, jobId } = useParams();
  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

  const context = useContext(studentContext);
  const {
    getStudents,
    students,
    getPopSlots,
    popSlots,
    updatePopSlot,
    addRejnMessage,
    addNotification,
  } = context;
  const [studentInfo, setStudentInfo] = useState(null); // Changed to null as an initial value
  const [reason, setReason] = useState({ supervisor: "" });

  console.log(typeof jobId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getStudents();
      } catch (error) {
        console.error("Error fetching student details", error);
      }
    };

    fetchData();
  }, []); // Added getStudents as a dependency for useEffect

  useEffect(() => {
    const fetchPop = async () => {
      try {
        await getPopSlots();
      } catch (error) {
        console.error("Error fetching pop details", error);
      }
    };

    fetchPop();
  }, []);

  useEffect(() => {
    if (students && jobId) {
      const jobIdNumber = parseInt(jobId);
      const foundStudent = students.find(
        (student) => student.job_no === jobIdNumber
      );

      if (foundStudent) {
        setStudentInfo(foundStudent);
      }
    }
  }, [students, jobId]);
  const onChange = (e) => {
    setReason({ ...reason, [e.target.name]: e.target.value });
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
        {studentInfo && (
          <form
            class="row g-3 mt-4 mx-auto"
            style={{ width: "68%", border: "black solid 1px" }}
            //onSubmit={handleSubmit}
          >
            <p className="mb-3" style={{ textAlign: "center" }}>
              JOB REQUISITION FORM_ Internal Users _XRD Analysis
            </p>
            <h1 className="mt-2" style={{ textAlign: "center" }}>
              Student Details for Job ID: {jobId}
            </h1>
            <h2>
              <strong>
                {popSlots.length > 0 &&
                jobId &&
                popSlots.find((slot) => slot.jobno === parseInt(jobId))
                  ?.accepted
                  ? "Accepted"
                  : ""}
              </strong>
              <strong>
                {popSlots.length > 0 &&
                jobId &&
                popSlots.find((slot) => slot.jobno === parseInt(jobId))
                  ?.rejected
                  ? "Rejected"
                  : ""}
              </strong>
            </h2>
            <div class="col-6 mb-0">
              <p>
                <strong>Job no: </strong>
                {jobId}
              </p>
            </div>
            <div class="col-md-6 my-0">
              <p>
                <strong>username : </strong> {studentInfo.username}
              </p>
            </div>
            <hr style={{ border: "1px black solid" }}></hr>
            <div class="col-md-6 my-0">
              <p>
                <strong>institute_Id : </strong> {studentInfo.institute_Id}
              </p>
            </div>
            <div class="col-6 my-0">
              <p>
                <strong>payment_funded_from : </strong>{" "}
                {studentInfo.payment_funded_from}
              </p>
            </div>
            <hr style={{ border: "1px black solid" }}></hr>
            <div class="col-6 my-0">
              <p>
                <strong>sponsoredReserch: </strong>{" "}
                {studentInfo.sponsoredReserch ? "true" : "false"}
              </p>
            </div>
            <div class="col-6 my-0">
              <p>
                <strong>industrialConsultancy:</strong>{" "}
                {studentInfo.industrialConsultancy ? "true" : "false"}
              </p>
            </div>
            <hr style={{ border: "1px black solid" }}></hr>
            <div class="col-6 my-0">
              <p>
                <strong>projectCode: </strong>
                {studentInfo.projectCode}
              </p>
            </div>
            <div class="col-md-6 my-0">
              <p>
                <strong>budgetHead: </strong>
                {studentInfo.budgetHead}
              </p>
            </div>
            <hr style={{ border: "1px black solid" }}></hr>
            <div class="col-3 my-0">
              <p>
                <strong>consumables: </strong>
                {studentInfo.consumables ? "true" : "false"}
              </p>
            </div>
            <div class="col-3 my-0">
              <p>
                <strong>contingencies: </strong>
                {studentInfo.contingencies ? "true" : "false"}
              </p>
            </div>
            <div class="col-3 my-0">
              <p>
                <strong>analytical_charges:</strong>{" "}
                {studentInfo.analytical_charges ? "true" : "false"}
              </p>
            </div>
            <div class="col-3 my-0">
              <p>
                <strong>others: </strong>
                {studentInfo.others ? "true" : "false"}
              </p>
            </div>
            <hr style={{ border: "1px black solid" }}></hr>
            <div class="col-6 my-0">
              <p>
                <strong>End of the projects: </strong>
                {studentInfo.end_data_of_project}
              </p>
            </div>
            <div class="col-md-6 my-0">
              <p>
                <strong>department:</strong> {studentInfo.department}
              </p>
            </div>
            <hr style={{ border: "1px black solid" }}></hr>
            <div class="col-md-6 my-0">
              <p>
                <strong>supervisor:</strong> {studentInfo.supervisor}
              </p>
            </div>
            <div class="col-md-6 my-0">
              <p>
                <strong>Mobile No:</strong> {studentInfo.mobile_no}
              </p>
            </div>
            <hr style={{ border: "1px black solid" }}></hr>
            <div class="col-md-6 my-0">
              <p>
                <strong>institute_emailId: </strong>
                {studentInfo.institute_emailId}
              </p>
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
            {/*<div class="col-md-6">
            <label for="" class="form-label">
              Sample compositions and Type:
              <hr></hr>
              <span>Scanning angle (2*theta):</span>
            </label>
           
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
                      value=""
                      id="Checkme1"
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
                      value=""
                      id="Checkme1"
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
                      value=""
                      id="Checkme1"
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
                      value=""
                      id="Checkme1"
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
                      value=""
                      id="Checkme1"
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
                      value=""
                      id="Checkme1"
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
            ></textarea>
          </div>
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
            <div class="col-md-4 my-0">
              <p>
                <strong>date: </strong>
                {studentInfo.date}
              </p>
            </div>
            <hr style={{ border: "1px black solid" }}></hr>
            <div class="col-md-4 my-0">
              <p>
                <strong>Experiment: </strong>
                {studentInfo.experiment}
              </p>
            </div>
            ---
            {studentInfo.experiment === "exp1" ? (
              <>
                {" "}
                <p className="mb-3" style={{ textAlign: "center" }}>
                  Sample Details (Max. 3Nos.) Samples ready to load will only be
                  accepted.
                </p>
                <hr style={{ border: "1px black solid" }}></hr>
                <div class="col-md-4 my-0">
                  <p>
                    <strong>scanning Angle :</strong>{" "}
                    {studentInfo.scanning_angle}
                  </p>
                </div>
                <div class="col-md-4 my-0">
                  <p>
                    <strong>powder :</strong>{" "}
                    {studentInfo.powder ? "true" : "false"}
                  </p>

                  <p>
                    <strong>thin FIlm :</strong>{" "}
                    {studentInfo.thin_film ? "true" : "false"}
                  </p>
                  <p>
                    <strong>Variable temp XRD :</strong>{" "}
                    {studentInfo.variable_temp_xrd ? "true" : "false"}
                  </p>
                  <p>
                    <strong>XRR :</strong> {studentInfo.xrr ? "true" : "false"}
                  </p>
                  <p>
                    <strong>Saxs :</strong>{" "}
                    {studentInfo.saxs ? "true" : "false"}
                  </p>
                  <p>
                    <strong>Pole FIgure/RSM :</strong>{" "}
                    {studentInfo.pole_figure ? "true" : "false"}
                  </p>
                </div>
                <div class="col-md-4 my-0">
                  <p>
                    <strong>Additional Remarks :</strong>{" "}
                    {studentInfo.additional_remarks}
                  </p>
                </div>
              </>
            ) : (
              <>
                {" "}
                <p className="mb-3" style={{ textAlign: "center" }}>
                  Sample Details (Max. 3Nos.) Samples ready to load will only be
                  accepted.
                </p>
                <hr style={{ border: "1px black solid" }}></hr>
                <div class="col-md-4 my-0">
                  <p>
                    <strong>Sample components :</strong>
                    <br></br>
                    {studentInfo.sample_comp_exp2}
                  </p>
                </div>
                <div class="col-md-4 my-0">
                  <p>
                    <strong>Rockwell :</strong>{" "}
                    {studentInfo.rockwell ? "true" : "false"}
                  </p>

                  <p>
                    <strong> Brinell :</strong>{" "}
                    {studentInfo.brinell ? "true" : "false"}
                  </p>
                  <p>
                    <strong> Vickers :</strong>{" "}
                    {studentInfo.vickers ? "true" : "false"}
                  </p>
                  <p>
                    <strong>Knoop :</strong>{" "}
                    {studentInfo.knoop ? "true" : "false"}
                  </p>
                </div>
                <div class="col-md-4 my-0">
                  <p>
                    <strong>Additional Remarks :</strong>{" "}
                    {studentInfo.additional_remarks}
                  </p>
                </div>
              </>
            )}
          </form>
        )}
      </div>
      <div class="d-flex justify-content-center my-5 ">
        {popSlots.length > 0 &&
        jobId &&
        popSlots.find((slot) => slot.jobno === parseInt(jobId))?.isVerified ? (
          ""
        ) : (
          <button
            class="btn btn-primary mx-1"
            type="submit"
            onClick={() => {
              updatePopSlot(jobId, "accepted");
              addNotification(
                studentInfo.institute_emailId,
                studentInfo.job_no,
                true,
                false,
                "Request has been acccepted by supervisor",
                false,
                false,
                ""
              );
              addRejnMessage(jobId, "", "");
              navigate(`/combineds/${email}`);
            }}
          >
            Accept
          </button>
        )}
        {popSlots.length > 0 &&
        jobId &&
        popSlots.find((slot) => slot.jobno === parseInt(jobId))?.isVerified ? (
          ""
        ) : (
          <button
            className="btn btn-primary mx-1"
            type="button"
            onClick={() => setShowModal(true)} // Open modal on button click
          >
            Reject
          </button>
        )}
        <div
          className={`modal ${showModal ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Suggestion</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="supervisor"
                onChange={onChange}
              ></textarea>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                {/* Add action to reject here */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    // Perform action to reject

                    addRejnMessage(jobId, reason.supervisor, "");
                    updatePopSlot(jobId, "rejected");
                    setShowModal(false);
                    navigate(`/combineds/${email}`);
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetails1;
