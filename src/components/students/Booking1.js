import React, { useState, useEffect, useContext } from "react";
import TimeSlot from "./TimeSlot";
import studentContext from "../../context/student/studentContext";
import { useNavigate } from "react-router-dom";

const Booking2 = () => {
  const context = useContext(studentContext);
  const { addBookedSlot, getBookedSlots, bookedSlots } = context;
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [bookedSlotsArray, setBookedSlotsArray] = useState([]);

  useEffect(() => {
    getBookedSlots();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSlotClick = (time) => {
    const newBookedSlot = { date: selectedDate, time: time };
    setBookedSlotsArray([...bookedSlotsArray, newBookedSlot]);
  };

  const cancelSlot = (time) => {
    const updatedBookedSlots = bookedSlotsArray.filter(
      (slot) => !(slot.date === selectedDate && slot.time === time)
    );
    setBookedSlotsArray(updatedBookedSlots);
  };

  const isSlotBooked = (time) => {
    return bookedSlotsArray.some(
      (slot) => slot.date === selectedDate && slot.time === time
    );
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
      <h1>Equipment Slot Booking</h1>
      <input
        type="date"
        name="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <div className="time-slots">
        {timeSlots.map((time) => (
          <TimeSlot
            key={time}
            name="time"
            time={time}
            isBooked={isSlotBooked(time)}
            onSlotClick={() => handleSlotClick(time)}
            onCancelClick={() => cancelSlot(time)}
          />
        ))}
      </div>
      <button onClick={() => navigate("/exp1")}>Next</button>
    </div>
  );
};

export default Booking2;
