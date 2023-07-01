import React, { useState } from "react";
import "./seats.css"; // Import your custom CSS styles
import { useDispatch, useSelector } from "react-redux";
import { checklist } from "../../assets/images";
import { useParams } from "react-router-dom";
import { getByIdTicketAction } from "../../config/Redux/action/ticketAction";

const SeatPicker = ({ setSeat, classType, typePrice, disabled }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();

  const [tickets, setTickets] = React.useState([]);

  const { ticket } = useSelector((state) => state.ticketReducer);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  React.useEffect(() => {
    dispatch(getByIdTicketAction(params.id));
  }, [dispatch, params.id]);

  React.useEffect(() => {
    if (ticket) {
      setTickets(ticket);
    }
  }, [ticket]);

  React.useEffect(() => {
    setSeat(selectedSeats);
  }, [selectedSeats, setSeat]);

  const { isSuccess } = useSelector((state) => state.bookReducer);

  const select = tickets?.seats?.map((item) => {
    return item.seat_number;
  });

  const renderSeats = () => {
    const rows = ["A", "B", "C", " ", "D", "E", "F"];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return rows.map((row) => (
      <div key={row} className="seat-row">
        {columns.map((column) => {
          const seat = `${row}${column}`;
          const isPreSelected = select?.includes(seat);

          return (
            <div
              key={seat}
              className={`seat ${isPreSelected ? "pre-selected" : ""} ${selectedSeats.includes(seat) ? "selected" : ""} ${
                row === " " ? "blank" : ""
              }`}
              onClick={isPreSelected || disabled === true ? null : () => handleSeatSelection(seat)}
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
      <div className={classType}>
        {typePrice} {isSuccess ? <img src={checklist} alt="" width={"20"} /> : ""}
      </div>
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
      {selectedSeats.length > 0 && <p className="show-picker">You have selected seats: {selectedSeats.join(", ")}</p>}
    </div>
  );
};

export default SeatPicker;
