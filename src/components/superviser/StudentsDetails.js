import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import studentContext from "../../context/student/studentContext";

function StudentDetails() {
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
      <div
        className="container row g-3 mt-4 mx-auto my-5"
        style={{ width: "68%", border: "black solid 1px" }}
      >
        <h1 className="mt-2" style={{ textAlign: "center" }}>
          Student Details for Job ID: {jobId}
        </h1>
        <h2>
          <strong>
            {popSlots.length > 0 &&
            jobId &&
            popSlots.find((slot) => slot.jobno === parseInt(jobId))?.accepted
              ? "Accepted"
              : ""}
          </strong>
          <strong>
            {popSlots.length > 0 &&
            jobId &&
            popSlots.find((slot) => slot.jobno === parseInt(jobId))?.rejected
              ? "Rejected"
              : ""}
          </strong>
        </h2>

        {studentInfo && (
          <>
            <p>
              <strong>username: </strong>
              {studentInfo.username}
            </p>
            <p>
              <strong>institute_Id: </strong>
              {studentInfo.institute_Id}
            </p>
            <p>
              <strong>payment_funded_from : </strong>
              {studentInfo.payment_funded_from}
            </p>
            <p>
              <strong>sponsoredReserch: </strong>
              {studentInfo.sponsoredReserch ? "true" : "false"}
            </p>
            <p>
              <strong>industrialConsultancy:</strong>{" "}
              {studentInfo.industrialConsultancy ? "true" : "false"}
            </p>
            <p>
              <strong>projectCode: </strong>
              {studentInfo.projectCode}
            </p>
            <p>
              <strong>budgetHead: </strong>
              {studentInfo.budgetHead}
            </p>
            <p>
              <strong>consumables: </strong>
              {studentInfo.consumables ? "true" : "false"}
            </p>
            <p>
              <strong>contingencies: </strong>
              {studentInfo.contingencies ? "true" : "false"}
            </p>
            <p>
              <strong>analytical_charges:</strong>{" "}
              {studentInfo.analytical_charges ? "true" : "false"}
            </p>
            <p>
              <strong>others: </strong>
              {studentInfo.others ? "true" : "false"}
            </p>
            <p>
              <strong>department:</strong> {studentInfo.department}
            </p>
            <p>
              <strong>supervisor:</strong> {studentInfo.supervisor}
            </p>
            <p>
              <strong>supervisor:</strong> {studentInfo.mobile_no}
            </p>
            <p>
              <strong>institute_emailId: </strong>
              {studentInfo.institute_emailId}
            </p>
            <p>
              <strong>date: </strong>
              {studentInfo.date}
            </p>

            {/* Display other student details here */}
          </>
        )}
      </div>
      <div class="d-flex justify-content-center mb-5">
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

export default StudentDetails;
