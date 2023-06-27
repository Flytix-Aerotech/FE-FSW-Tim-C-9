import React, { useState } from "react";
import "./seats.css"; // Import your custom CSS styles

const SeatPicker = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderSeats = () => {
    const rows = ["A", "B", "C", " ", "D", "E", "F"];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const selected = ["B1", "A4", "A5", "F5", "E3", "D2", "C3", "B10"];

    return rows.map((row) => (
      <div key={row} className="seat-row">
        {columns.map((column) => {
          const seat = `${row}${column}`;
          const isPreSelected = selected.includes(seat);

          return (
            <div
              key={seat}
              className={`seat ${isPreSelected ? "pre-selected" : ""} ${selectedSeats.includes(seat) ? "selected" : ""} ${
                row === " " ? "blank" : ""
              }`}
              onClick={isPreSelected ? null : () => handleSeatSelection(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="seat-picker-container">
      <h2>Pilih Kursi</h2>
      <div className="seat-header">Economy - 64 Seats Available</div>
      <div className="seat-number">
        <small>A</small>
        <small>B</small>
        <small>C</small>
        <small> </small>
        <small>D</small>
        <small>E</small>
        <small>F</small>
      </div>
      <div className="seat-grid">{renderSeats()}</div>
      {selectedSeats.length > 0 && <p>You have selected seats: {selectedSeats.join(", ")}</p>}
    </div>
  );
};

export default SeatPicker;
