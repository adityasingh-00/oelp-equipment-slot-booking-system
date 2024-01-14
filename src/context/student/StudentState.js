import React from "react";
import { useState } from "react";
import StudentContext from "./studentContext";

const StudentState = (props) => {
  const host = "http://localhost:5000";
  const slotInitial = [];
  const [bookedSlots, setBookedSlots] = useState(slotInitial);
  const [prevData, setPrevData] = useState(slotInitial);
  const [logggedinEmail, setLoggedinEmail] = useState("");
  const [notification, setNotification] = useState([]);
  const [popSlots, setPopSlots] = useState([]);
  const [reqData, setReqData] = useState([]);
  const [students, setStudents] = useState([]);
  const [counter, setCounter] = useState([]);
  const [rejnmessage, setRejnmessage] = useState([]);
  const [email, setEmail] = useState("");
  const [acceptance, setAcceptance] = useState();
  const [rejection, setRejection] = useState();
  const getBookedSlots = async () => {
    const response = await fetch(`${host}/api/students/gettimeslot`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    setBookedSlots(json);
  };
  const getRejnMessage = async () => {
    const response = await fetch(`${host}/api/students/getrejnmessage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    setRejnmessage(json);
  };
  const getLoggedinEmail = async (email) => {
    setLoggedinEmail(email);
  };

  const getStudents = async () => {
    const response = await fetch(`${host}/api/students/getstudents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // console.log(json);
    setStudents(json);
  };
  const getPrevData = async () => {
    const response = await fetch(`${host}/api/students/getprevdata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // console.log(json);
    setPrevData(json);
  };
  const getPopSlots = async () => {
    const response = await fetch(`${host}/api/students/getpopslots`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("popslots", json);
    // console.log(json);
    setPopSlots(json);
  };
  const getAcceptance = async (jobId) => {
    if (popSlots) {
      for (let i = 0; i < popSlots.length; i++) {
        if (popSlots[i].jobno === parseInt(jobId)) {
          if (popSlots[i].isVerified === true) {
            if (popSlots[i].accepted === true) {
              // console.log("found acceptance");
              setAcceptance(true);
            } else {
              if (popSlots[i].rejected === true) {
                setRejection(true);
              }
            }
          }
        }
      }
    }
  };

  const getCounter = async () => {
    const response = await fetch(`${host}/api/students/counter`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setCounter(json);
  };
  const addCounter = async (jobno) => {
    const response = await fetch(`${host}/api/students/addcounter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ jobno }),
    });
    const job = await response.json();
    //setCounter(counter.concat(job));
    if (Array.isArray(counter)) {
      setCounter(counter.concat(job));
    }
  };
  const addBookedSlot = async (date, emailId, time, equipment) => {
    const response = await fetch(`${host}/api/students/timeslot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ date, emailId, time, equipment }),
    });
    const slot = await response.json();
    setBookedSlots(bookedSlots.concat(slot));
    // setBookedSlots(bookedSlots.push({ date, time }));
    //bookedSlots.push({ date, time });
    // setBookedSlots([...bookedSlots, { date: date, time }]);
  };
  const addPrevData = async (jobno, date, time, equipment) => {
    const response = await fetch(`${host}/api/students/prevdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ jobno, date, time, equipment }),
    });
    const slot = await response.json();
    setPrevData(prevData.concat(slot));
    // setBookedSlots(bookedSlots.push({ date, time }));
    //bookedSlots.push({ date, time });
    // setBookedSlots([...bookedSlots, { date: date, time }]);
  };

  const addNotification = async (
    email,
    job_no,

    supervisor_accept,
    supervisor_reject,
    supervisor_note,
    faculty_inch_accept,
    faculty_inch_reject,
    faculty_inch_note
  ) => {
    const response = await fetch(`${host}/api/students/notify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        job_no,
        supervisor_accept,
        supervisor_reject,

        supervisor_note,
        faculty_inch_accept,
        faculty_inch_reject,
        faculty_inch_note,
      }),
    });
    const note = await response.json();
    setNotification(notification.concat(note));
    // setBookedSlots(bookedSlots.push({ date, time }));
    //bookedSlots.push({ date, time });
    // setBookedSlots([...bookedSlots, { date: date, time }]);
  };
  const addRejnMessage = async (jobno, supervisor, facultyIncharge) => {
    const response = await fetch(`${host}/api/students/rejnmessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ jobno, supervisor, facultyIncharge }),
    });
    const rejection_sugg = await response.json();
    setRejnmessage(rejnmessage.concat(rejection_sugg));
    // setBookedSlots(bookedSlots.push({ date, time }));
    //bookedSlots.push({ date, time });
    // setBookedSlots([...bookedSlots, { date: date, time }]);
  };
  const deleteSlots = async (id) => {
    // API call
    const response = await fetch(`${host}/api/students/deleteslots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = response.json();
    console.log(json);

    //console.log("Deleting the note with id " + id);
    //props.showAlert=("Deleted successfully","success");
    const newBookedSlot = bookedSlots.filter((slots) => {
      return slots._id !== id;
    });
    setBookedSlots(newBookedSlot);
  };
  const addPopSlots = async (
    jobno,
    username,
    instrument,
    v,
    // isVerified,
    time,
    rollNumber,

    supervisor
  ) => {
    const response = await fetch(`${host}/api/students/popslots`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        jobno,
        username,
        instrument,
        v,
        // isVerified,
        time,
        rollNumber,

        supervisor,
      }),
    });
    const populatedslots = await response.json();
    setPopSlots(popSlots.concat(populatedslots));
  };
  const updatePopSlot = async (id, inp) => {
    //API call
    const response = await fetch(
      `${host}/api/students//updatepopslots/${id}/${inp}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        // body: JSON.stringify({ title, description, tag }),
      }
    );
    const json = await response.json();
    console.log(json);

    {
      /*} let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
  setNotes(newNotes);*/
    }
  };

  return (
    <StudentContext.Provider
      value={{
        addBookedSlot,
        getBookedSlots,
        bookedSlots,
        getStudents,
        students,
        counter,
        addCounter,
        getCounter,
        addPopSlots,
        popSlots,
        getPopSlots,
        updatePopSlot,
        addRejnMessage,
        getRejnMessage,
        rejnmessage,
        getAcceptance,
        rejection,
        acceptance,
        addNotification,
        logggedinEmail,
        getLoggedinEmail,
        deleteSlots,
        getPrevData,
        addPrevData,
        prevData,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
