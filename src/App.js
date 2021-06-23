import React, { useState } from "react";
import "./styles.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";

export default function App() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const range = {
    "Hari ini": [moment(), moment()],
    Kemarin: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "7 Hari terakhir": [moment().subtract(6, "days"), moment()],
    "30 Hari terakhir": [moment().subtract(29, "days"), moment()],
    "Bulan Ini": [moment().startOf("month"), moment().endOf("month")]
  };

  const handleEvent = (event, picker) => {
    console.log("start: ", picker.startDate._d);
    console.log("end: ", picker.endDate._d);
    setFromDate(picker.startDate._d.toISOString());
    setToDate(picker.endDate._d.toISOString());
  };

  return (
    <div className="App">
      <DateRangePicker
        ranges={range}
        alwaysShowCalendars={true}
        onEvent={handleEvent}
      >
        <button>
          {moment(fromDate).format("LL")} to {moment(toDate).format("LL")}
        </button>
      </DateRangePicker>
    </div>
  );
}
