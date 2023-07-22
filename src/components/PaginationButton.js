import { React, useState, useEffect } from "react";
import "../assets/styles/Pagination.css";
import { useStateValue } from "../services/StateProvider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { actionTypes } from "../services/reducer";

function PaginationButton() {
  const [, dispatch] = useStateValue();

  const [startIndexValue, setStartIndexValue] = useState(1);

  const IndexValueHandler = (num) => {
    let newValue = startIndexValue + num;

    if (newValue >= 0 && newValue <= 100 && newValue % 10 === 1) {
      setStartIndexValue(newValue);
    }
  };

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_INDEX_VALUE,
      indexValue: startIndexValue,
    });
  }, [startIndexValue, dispatch]);

  return (
    <div className="paginationButtons">
      <IconButton
        onClick={() => {
          IndexValueHandler(-10);
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          IndexValueHandler(10);
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
}

export default PaginationButton;
