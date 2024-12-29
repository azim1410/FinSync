import React, { useState } from "react";
import "./payerSplitButtons.css";

const PayerSplitButtons: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("2024-12-29");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="human_summary">
      {/* Main Content */}
      <p className="paid-by-summary">
        Paid by <a href="#" className="payer">Azim D.</a> and split <a href="#" className="split">equally</a>.
      </p>
      <div className="details">($0.00/person)</div>

      {/* Action Buttons */}
      <div className="button-container">
        <div className="button-wrapper">
          <input
            type="date"
            className="date-picker"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <a className="notes-button" href="#">
          Add image/notes
        </a>
      </div>
    </div>
  );
};

export default PayerSplitButtons;
