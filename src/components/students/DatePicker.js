// DatePicker.js
import React from "react";
import { useState } from "react";

const DatePicker = ({ selectedDate, onDateChange }) => {
  const [credentials, setCredentials] = useState({
    date: "20/10/2023",
  });
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    onDateChange(newDate);
  };

  return (
    <input
      type="date"
      name="date"
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default DatePicker;
