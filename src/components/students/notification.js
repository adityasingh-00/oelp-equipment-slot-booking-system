import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import studentContext from "../../context/student/studentContext";
import StudentNav from "../students/studentPage2";

const Notification = () => {
  const context = useContext(studentContext);
  let navigate = useNavigate();
  const {
    students,
    getStudents,
    getRejnMessage,
    rejnmessage,
    getBookedSlots,
    bookedSlots,
    popSlots,
    getPopSlots,
    getPrevData,
    prevData,
  } = context;
  const jobseq = [];
  const notice = [];
  const check = [];
  const date = [];
  const time = [];
  const time1 = [];
  const inst1 = [];
  const inst = [];
  const prevnotice = [];
  let isEqual = false;
  const exp1 = "exp1";
  const exp2 = "exp2";
  // const { getLoggedinEmail, logggedinEmail } = context;
  // console.log("loggedemail", logggedinEmail);
  const { email } = useParams();
  console.log("loggedinEMail", email);
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
  useEffect(() => {
    const fetchDetails = async () => {
      await getStudents();
      await getBookedSlots();
      await getPrevData();

      await getRejnMessage();
      await getPopSlots();
    };
    fetchDetails();
  }, []);
  console.log("students", students);
  console.log("rejn messg", rejnmessage);
  console.log("popslots in notice", popSlots);
  console.log("prevData", prevData);
  {
    /*} if (bookedSlots) {
    for (let i = 0; i < bookedSlots.length; i++) {
      if (bookedSlots[i].emailId === email) {
        time.push(bookedSlots[i].time);
        inst.push(bookedSlots[i].equipment);
      }
    }
    console.log("time", time);
  }*/
  }

  if (students) {
    for (let i = 0; i < students.length; i++) {
      if (students[i].institute_emailId === email) {
        jobseq.push(students[i].job_no);
        inst.push(students[i].experiment);
        // date.push(students[i].date);
      }
    }
    console.log(jobseq);
  }

  {
    /*if (jobseq.length > time.length) {
    isEqual = true;
    if (jobseq && popSlots) {
      for (let i = 0; i < jobseq.length; i++) {
        for (let j = 0; j < popSlots.length; j++) {
          if (jobseq[i] === popSlots[j].jobno) {
            time1.push(popSlots[j].time);
            inst1.push(popSlots[j].instrument);
          }
        }
      }
    }
  }
  console.log("time", time);
console.log("time1", time1);*/
  }

  if (jobseq) {
    for (let i = 0; i < jobseq.length; i++) {
      const checkUpdate = {};
      for (let j = 0; j < popSlots.length; j++) {
        if (jobseq[i] === popSlots[j].jobno) {
          checkUpdate.isVerified = popSlots[j].isVerified;
          checkUpdate.isVerifiedFin = popSlots[j].isVerifiedFin;

          //checkUpdate.instrument = popSlots[j].instrument;
        }
      }
      // checkUpdate.date = date[i];
      for (let k = 0; k < prevData.length; k++) {
        if (jobseq[i] === prevData[k].jobno) {
          checkUpdate.date = prevData[k].date;
          checkUpdate.instrument = prevData[k].instrument;
          checkUpdate.time = prevData[k].time;
        }
      }
      checkUpdate.instrument = inst[i];

      {
        /*} if (isEqual) {
        checkUpdate.instrument = inst1[i];
      } else {
        checkUpdate.instrument = inst[i];
      }*/
      }

      {
        /*} if (isEqual) {
        checkUpdate.time = time1[i];
      } else {
        checkUpdate.time = time[i];
      }*/
      }

      check.push(checkUpdate);
    }
  }

  if (rejnmessage && jobseq && check) {
    for (let i = 0; i < jobseq.length; i++) {
      const updateField = {};
      for (let j = 0; j < rejnmessage.length; j++) {
        if (jobseq[i] === rejnmessage[j].jobno) {
          if (rejnmessage[j].supervisor) {
            updateField.supervisor = rejnmessage[j].supervisor;
          }
          if (rejnmessage[j].facultyIncharge) {
            updateField.facultyIncharge = rejnmessage[j].facultyIncharge;
          }
        }
      }
      updateField.jobno = jobseq[i];
      updateField.isVerified = check[i].isVerified;
      updateField.isVerifiedFin = check[i].isVerifiedFin;
      updateField.time = check[i].time;
      updateField.date = check[i].date;
      updateField.instrument = check[i].instrument;
      notice.push(updateField);
      console.log("notice", notice);
    }
  }

  return (
    <>
      {/*} <StudentNav></StudentNav>*/}
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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8 mx-auto">
            <div class="my-4">
              <h5 class="mb-0 mt-5">Notifications system</h5>
              <p></p>
              <hr class="my-4" />
              {notice &&
                notice.map((item, index) => (
                  <div key={index}>
                    <strong class="mb-0">JOB ID : {item.jobno}</strong>
                    <p>time : {item.time}</p>
                    <p>
                      You requested for the slot booking of Experiment{" "}
                      {item.instrument} on {item.date}.
                    </p>
                    <div class="list-group mb-5 shadow">
                      <div class="list-group-item">
                        <div class="row align-items-center">
                          <div class="col">
                            {item.supervisor ? (
                              <p class="text-muted mb-0">
                                <strong class="mb-0 text-dark">
                                  Supervisor Notice :
                                </strong>
                                <br></br>
                                <strong>status : Rejected</strong>
                                <br></br>
                                <p class="text-muted mb-0">{item.supervisor}</p>
                              </p>
                            ) : (
                              ""
                            )}
                            {!item.supervisor && item.isVerified ? (
                              <p class="text-muted mb-0">
                                <strong class="mb-0 text-dark">
                                  Supervisor Notice :
                                </strong>
                                <br></br>
                                <strong>status : Accepted</strong>
                                <br></br>
                                <p class="text-muted mb-0">
                                  Request has been approved by supervisor
                                </p>
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div class="col">
                          {/*} <strong class="mb-0">
                            Faculty Incharge Notice :
                            </strong>*/}
                          {item.facultyIncharge ? (
                            <p class="text-muted mb-0">
                              <strong class="mb-0 text-dark">
                                Faculty Incharge Notice :
                              </strong>
                              <br></br>
                              <strong>status : Rejected</strong>

                              <br></br>
                              <p class="text-muted mb-0">
                                {item.facultyIncharge}
                              </p>
                              <br></br>
                              <strong>* Your slot has been rejected.</strong>
                            </p>
                          ) : (
                            ""
                          )}
                          {!item.facultyIncharge && item.isVerifiedFin ? (
                            <p class="text-muted mb-0">
                              <strong class="mb-0 text-dark">
                                Faculty Incharge Notice :
                              </strong>
                              <br></br>
                              <strong>status : Approved</strong>
                              <br></br>
                              requested slots has been approved by faculty
                              Incharge
                              <br></br>
                              <strong>* Your slot has been booked !</strong>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
