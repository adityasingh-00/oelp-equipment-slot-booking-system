// backend.js
import { useState } from "react";

const initialSlots = [];
const [bookedSlots, setBookedSlots] = useState(initialSlots);

//function addBookedSlot(date, time) {
//  bookedSlots.push({ date, time });
//}
//function getBookedSlots() {
  //return bookedSlots;
//}
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

module.exports = { addBookedSlot, getBookedSlots };
