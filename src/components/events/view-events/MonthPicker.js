import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMonth } from "../../../utilities/actions";
import { parseTime } from "../../../utilities/functions";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const MonthPicker = () => {
  const selectedMonth = useSelector((state) => state.selectedMonth);
  const formattedMonth = parseTime(selectedMonth.valueOf()).monthYear;
  const dispatch = useDispatch();
  return (
    <div className="month-picker-container">
      <div
        onClick={() => dispatch(setMonth("previous"))}
        style={{ cursor: "pointer", width: "50px" }}
      >
        <ChevronLeftIcon style={{ fontSize: 25 }} />
      </div>
      <Typography variant="h6">{formattedMonth}</Typography>
      <div
        onClick={() => dispatch(setMonth("next"))}
        style={{ cursor: "pointer", width: "50px" }}
      >
        <ChevronRightIcon style={{ fontSize: 25 }} />
      </div>
    </div>
  );
};

export default MonthPicker;
