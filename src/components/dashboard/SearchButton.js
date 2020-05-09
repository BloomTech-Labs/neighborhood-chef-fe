import React, { useState } from "react";
import { Icon } from "@iconify/react";
import roundSearch from "@iconify/icons-ic/round-search";
import { textBoxStyles } from "../../styles";

const SearchButton = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState("");
  const classes = textBoxStyles();
  return (
    <>
      {isSearching ? (
        <form
          className={classes.background}
          onSubmit={(e) => {
            e.preventDefault();
            //perform search
            setIsSearching(false);
          }}
        >
          <input
            className={classes.textBox}
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={classes.button}>
            <Icon width="1.5em" icon={roundSearch} />
          </button>
        </form>
      ) : (
        <span
          onClick={() => setIsSearching(true)}
          style={{ cursor: "pointer" }}
        >
          <Icon width="2em" icon={roundSearch} />
        </span>
      )}
    </>
  );
};

export default SearchButton;
