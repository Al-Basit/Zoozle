import React, { useState } from "react";
import "../assets/styles/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../services/StateProvider";
import { actionTypes } from "../services/reducer";

function Search({ hideButtons = false, defaultVal }) {
  const [, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    if (!input) return;

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate(`/search?q=${input}`);
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type={"text"}
          defaultValue={defaultVal}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
