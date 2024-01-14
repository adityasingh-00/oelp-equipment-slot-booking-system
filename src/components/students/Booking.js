// BookingApp.js
import React, { useState } from "react";
import TimeSlot from "./TimeSlot";
import DatePicker from "./DatePicker";
import { useEffect, useContext } from "react";
import studentContext from "../../context/student/studentContext";
import { useNavigate } from "react-router-dom";

const BookingApp = () => {
  const context = useContext(studentContext);
  const { addBookedSlot, getBookedSlots, bookedSlots } = context;
  const [selectedDate, setSelectedDate] = useState("");
  const [bookedSlot, setBookedSlot] = useState([]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleSlotClick = (time) => {
    setBookedSlot([...bookedSlot, { date: selectedDate, time }]);
  };

  const isSlotBooked = (time) => {
    return bookedSlot.some(
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
      {/*  <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} /> */}
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
            time={time}
            isBooked={isSlotBooked(time)}
            onSlotClick={() => handleSlotClick(time)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingApp;
