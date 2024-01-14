// TimeSlot.js
import React from "react";
import { useState } from "react";

const TimeSlot = ({ time, isBooked, onSlotClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!isBooked) {
      setClicked(true);
      onSlotClick(time);
    }
  };
  const slotStyle = {
    // backgroundColor: isBooked ? "red" : "green", // Change "red" to your desired color
    backgroundColor: isBooked ? "red" : clicked ? "yellow" : "green",
    cursor: isBooked ? "not-allowed" : "pointer",
  };

  return (
    <div
      // className={`time-slot ${isBooked ? "booked" : ""}`}
      //onClick={handleClick}
      className="time-slot"
      style={slotStyle}
      //onClick={() => onSlotClick(time)}
      onClick={handleClick}
    >
      {time}
    </div>
  );
};

export default TimeSlot;
