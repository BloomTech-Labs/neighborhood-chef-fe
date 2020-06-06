import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMonth } from "../../../utilities/actions";
import { parseTime } from "../../../utilities/functions";
import Typography from "@material-ui/core/Typography";

const MonthPicker = () => {
  const selectedMonth = useSelector((state) => state.selectedMonth);
  const formattedMonth = parseTime(selectedMonth.valueOf()).monthYear;
  const dispatch = useDispatch();
  return (
    <div className="month-picker-container">
      <div
        onClick={() => dispatch(setMonth("previous"))}
        style={{ cursor: "pointer" }}
      >
        {"<"}
      </div>
      <Typography variant="h6">{formattedMonth}</Typography>
      <div
        onClick={() => dispatch(setMonth("next"))}
        style={{ cursor: "pointer" }}
      >
        {">"}
      </div>
    </div>
  );
};

export default MonthPicker;
