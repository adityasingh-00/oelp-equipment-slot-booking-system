import React from "react";
import TimeSlot from "./TimeSlot";

import { useState, useEffect, useContext } from "react";
import studentContext from "../../context/student/studentContext";
import { useNavigate, useParams } from "react-router-dom";
import StudentNav from "../students/studentPage2";
import Experiment1 from "./Experiments/Experiment1";

const Booking2 = () => {
  const { email, exp } = useParams();
  console.log("exp--", exp);
  console.log("email in booking2", email);
  const context = useContext(studentContext);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const {
    addBookedSlot,
    getBookedSlots,
    counter,
    bookedSlots,
    addReqSlot,
    getCounter,
    addPrevData,
    getPrevData,
    prevData,
  } = context;
  console.log("bookedSlots in booking2");
  console.log(bookedSlots);
  console.log(typeof bookedSlots);
  const exp1 = "exp1";
  const exp2 = "exp2";
  let navigate = useNavigate();
  const host = "http://localhost:5000";
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [bookedEmail, setBookedEmail] = useState("");
  const [bookedSlot, setBookedSlot] = useState({ date: "", time: "" });
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
    const fetchBookedSLots = async () => {
      await getBookedSlots();
      await getCounter();
    };
    fetchBookedSLots();
    // console.log("hello");
    //console.log(bookedSlots);
  }, []);
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const handleEmailChange = (e) => {
    setBookedEmail(e.target.value);
  };
  const handleSlotClick = (time) => {
    // Update the backend and set the booked slots
    // addBookedSlot(selectedDate, time);
    const newBookedSlot = {
      date: selectedDate,
      //emailId: bookedEmail,
      emailId: email,
      time: time,
    };

    setSelectedSlots([...selectedSlots, newBookedSlot]);
  };

  //setBookedSlot({ ...bookedSlots, );

  // navigate("/exp1");

  //-----------
  {
    /* const targetDate = new Date("2023-10-23T00:00:00.000+00:00");
  const targetTime = "10:30 AM";

*/
  }

  //----------------

  const bookSlots = () => {
    const tm = [];
    const d = selectedSlots[0].date;
    const em = selectedSlots[0].emailId;
    // sb.push(selectedSlots[0].date)
    for (let i = 0; i < selectedSlots.length; i++) {
      //const d = selectedSlots[i].date;
      // const em = selectedSlots[i].emailId;
      //  const tm = selectedSlots[i].time;
      tm.push(selectedSlots[i].time);
      // reqSlots.push(selectedSlots[i].time);

      //addBookedSlot(d, em, tm);
      //  addReqSlot(selectedSlots[i].time);
    }
    addBookedSlot(d, em, tm, exp);
    let jobno = counter;

    console.log("experiment check", exp);

    addPrevData(jobno, d, tm, exp);

    // addReqSlot(selectedSlots);
    //console.log("new");
    //console.log(selectedSlots);

    setSelectedSlots([]);
    // navigate(`/${exp}/${bookedEmail}`);
    navigate(`/${exp}/${email}`);
  };
  const emailCheck = () => {
    if (email) {
      return email;
    }
  };

  const isSlotBooked = (time) => {
    for (let i = 0; i < bookedSlots.length; i++) {
      //const ran = new Date(bookedSlots[i].date).toISOString().substring(0, 10);
      const ran = bookedSlots[i].date;
      console.log("selected Date", selectedDate);
      console.log(typeof selectedDate);
      console.log(bookedSlots[i].date);
      console.log("selected date", selectedDate);

      //  const t = bookedSlots[i].time;

      //  if (ran === selectedDate && bookedSlots[i].time.includes(time)) {
      //   return true;
      // }

      if (ran) {
        const arr = bookedSlots[i].time;
        if (ran === selectedDate && bookedSlots[i].equipment === exp) {
          // if (bookedSlots[i].time.includes(time)) {
          // return true;
          //}
          if (arr) {
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] === time) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  };

  const timeSlots = [
    "09:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
  ];
  return (
    <div>
      {/*<StudentNav></StudentNav>*/}
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

      <h1 style={{ textAlign: "center" }}>Equipment slot Booking</h1>
      <input
        className="mb-3 mx-5"
        type="date"
        name="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      {/*} <div class="col-md-6 mb-3 mx-5">
        <label for="" class="form-label">
          Email Id:
        </label>
        <input
          type="text"
          class="form-control"
          id="emailId"
          name="emailId"
          onChange={handleEmailChange}
        />
  </div>*/}
      <div className="time-slots mx-5">
        {timeSlots.map((time) => (
          <TimeSlot
            key={time}
            name="time"
            time={time}
            isBooked={isSlotBooked(time)}
            //isBooked={onclick}
            onSlotClick={() => handleSlotClick(time)}
          />
        ))}
      </div>

      <div>
        <button
          className="my-3"
          style={{ display: "block", margin: "0 auto" }}
          onClick={bookSlots}
        >
          Book Selected Slots
        </button>
      </div>
    </div>
  );
};

export default Booking2;
