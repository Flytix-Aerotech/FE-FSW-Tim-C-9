import React from "react";
import DatePicker from "react-datepicker";

const DatePickerInput = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
};

export default DatePickerInput;
