import React, { useState, useEffect, useContext } from "react";
import studentContext from "../../context/student/studentContext";
import "./Facultyinch.css";

//import DataProvider from "../superviser/Datas";
import { useNavigate } from "react-router-dom";

//{ Data }
function OurPage({ Data, email }) {
  // const Data = DataProvider();
  let navigate = useNavigate();
  console.log("email in supervisor", email);
  console.log("Data in facultyinch", Data);
  const context = useContext(studentContext);
  const [data, setData] = useState([]);
  // const [popdata, setPopData] = useState([]);
  const { bookedSlots, getStudents, students, getBookedSlots } = context;
  const exp = ["exp2", "exp3"];
  //console.log(Data);
  {
    /*}
  useEffect(() => {
    getBookedSlots();
    // getStudents();
    // console.log("hello");
    //console.log(bookedSlots);
  }, []);
  const Data = [];
  const emailList = bookedSlots.map((slot) => slot.emailId);
  console.log(emailList);

  for (let i = 0; i < bookedSlots.length; i++) {
    const newObj = {
      name: "Aditya",
      instrument: "exp1",
      v: true,
      time: bookedSlots[i].time,
      rollNumber: "132101003",
    };
    Data.push(newObj);
  }

  /*for (let i = 0; i < emailList.length; i++) {
    getStudents(emailList[i]);
    console.log(students);
    for (let j = 0; j < students.length; j++) {
      //console.log(students[j].name);
      const newObj = {
        name: students[j].username,
        instrument: "Exp 1",
        v: true,
        time: bookedSlots[i].time,
        rollNumber: "132101003",
      };
      Data.push(newObj);
    }
  } */
  }

  const [notification, setNotification] = useState("");
  const [newMember, setNewMember] = useState({
    // jobno: "1001",
    name: "",
    instrument: "",
    time: "",
    rollNumber: "",
  });

  useEffect(() => {
    if (Data) {
      setData(
        Data.map((item) => ({ ...item, isVerifiedFin: item.isVerifiedFin }))
      );
    }
  }, [Data]);
  function handleInputChange(event) {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  }

  function clickHandler(index, jobId) {
    setData((prevData) => {
      const updatedData = prevData.map((item, i) =>
        i === index ? { ...item, isVerifiedFin: !item.isVerifiedFin } : item
      );
      setNotification(
        `Person ${updatedData[index].name} has been ${
          updatedData[index].isVerifiedFin ? "verified" : "unverified"
        }!`
      );
      setTimeout(() => setNotification(""), 3000); // Notification disappears after 3 seconds
      navigate(`/studentDetailf/${email}/${jobId}`);

      return updatedData;
    });
  }
  // function onClickJobHandler(jobId) {
  //  navigate(`/studentDetails/${jobId}`);
  // }

  function removeHandler(index) {
    setData((prevData) => {
      const removedPersonName = prevData[index].name;
      const updatedData = prevData.filter((_, i) => i !== index);
      setNotification(`Person ${removedPersonName} has been removed!`);
      setTimeout(() => setNotification(""), 3000); // Notification disappears after 3 seconds
      return updatedData;
    });
  }
  if (data) {
    console.log("data", data);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // Add the new member to the data array
    setData((prevData) => {
      const updatedData = [...prevData, { ...newMember, isVerifiedFin: false }];
      setNotification(`New member ${newMember.name} has been added!`);
      setTimeout(() => setNotification(""), 3000); // Notification disappears after 3 seconds
      return updatedData;
    });
  }

  return (
    <div className="wrapper1">
      <div className="box1">
        <div className="L11">
          <h1 className="h21">Job No</h1>
          <h1 className="h21">Name</h1>
          <h2 className="h21">Status</h2>
          <h2 className="h21">Intrument</h2>
          <h2 className="h21">Time</h2>
          <h2 className="h21">Roll Number</h2>
        </div>

        {data.map((item, index) => (
          <div className="L21" key={index}>
            <div>{item.jobno}</div>
            <div>{item.username}</div>
            <button
              onClick={() => clickHandler(index, item.jobno)}
              // onClickJob={() => onClickJobHandler(item.jobno)}
              className={
                item.isVerifiedFin ? "verified-button" : "non-verified-button"
              }
            >
              {item.isVerifiedFin ? <p>Verified</p> : <p>NonVerified</p>}
            </button>
            <div>{item.instrument}</div>
            <div>{item.time}</div>
            <div>{item.rollNumber}</div>
            {/*} <button onClick={() => removeHandler(index)}>Remove</button>*/}
          </div>
        ))}
      </div>
      {/*} <form className="form1" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={newMember.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
          className="input1"
        />
        <input
          type="text"
          name="instrument"
          value={newMember.instrument}
          onChange={handleInputChange}
          placeholder="Instrument"
          required
          className="input1"
        />
        <input
          type="text"
          name="time"
          value={newMember.time}
          onChange={handleInputChange}
          placeholder="Time"
          required
          className="input1"
        />
        <input
          type="text"
          name="rollNumber"
          value={newMember.rollNumber}
          onChange={handleInputChange}
          placeholder="Roll Number"
          required
          className="input1"
        />
        <button type="submit" className="button1">
          Add Member
        </button>
        </form>*/}
      {notification && <div className="notification1">{notification}</div>}
    </div>
  );
}

export default OurPage;
