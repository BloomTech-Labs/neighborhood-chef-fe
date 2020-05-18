import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import roundSearch from "@iconify/icons-ic/round-search";
import { textBoxStyles } from "../../styles";

const SearchButton = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState("");
  const classes = textBoxStyles();
  useEffect(() => {
    const listener = (evt) => {
      const searchBox = Array.from(document.querySelectorAll(".search-box"));
      let targetElement = evt.target; // clicked element
      console.log(searchBox);

      do {
        searchBox.forEach((e) => {
          console.log(e, targetElement);
          if (e == targetElement) return;
        });
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);

      // This is a click outside.
      console.log("outside");
      setIsSearching(false);
    };
    document.addEventListener("click", listener);
    return document.removeEventListener("click", listener);
  }, []);

  const rawList = [];

  const handleSearch = (searchText) => {
    const cards = document.querySelectorAll(".MuiCard-root");
    const recurseDoc = (currentNode, originalNode) => {
      if (
        currentNode.innerText &&
        currentNode.innerText.toLowerCase().includes(searchText)
      )
        rawList.push(originalNode);
      const children = currentNode.childNodes;
      children &&
        children.forEach((node) => {
          recurseDoc(node, originalNode);
        });
      return;
    };
    cards.forEach((card) => recurseDoc(card, card));
    console.log(rawList);
    const removeDup = [...new Set(rawList)];
    console.log(removeDup);
  };
  return (
    <div className="search-box">
      {isSearching ? (
        <form
          className={classes.background}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(search.toLowerCase());
          }}
        >
          <button className={classes.button}>
            <Icon width="1.5em" icon={roundSearch} />
          </button>
          <input
            className={classes.textBox}
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className={classes.button} onClick={() => setIsSearching(false)}>
            X
          </div>
        </form>
      ) : (
        <span
          onClick={() => setIsSearching(true)}
          style={{ cursor: "pointer" }}
        >
          <Icon width="2em" icon={roundSearch} />
        </span>
      )}
    </div>
  );
};

export default SearchButton;
