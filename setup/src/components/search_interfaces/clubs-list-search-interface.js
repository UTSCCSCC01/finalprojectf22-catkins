import axios from "axios";
import { useState } from "react";
import SearchBar from "../reusable_components/Search_bar";

function SearchInterface(props) {
  const [searchMode, setSearchMode] = useState("by the club name");

  const onClickModeChange = () => {
    setSearchMode((prevState) => {
      const currentState =
        prevState === "by the club name"
          ? "by the club tag"
          : "by the club name";
      console.log(currentState);
      return currentState;
    });
  };

  const searchByClubNameFunction = (e) => {
    e.preventDefault();

    const groupName = e.target[0].value;
    console.log(groupName);
    axios
      .get("http://localhost:5000/search/groups", {
        params: {
          clubName: groupName,
        },
      })
      .then((res) => {
        props.listChangeFunction(res.data);
      });
  };

  const searchByTagFunction = (e) => {
    e.preventDefault();

    const clubTags = e.target[0].value.split(" ");

    axios
      .get("http://localhost:5000/search/groups", {
        params: {
          clubTags: clubTags,
          clubName: "",
        },
      })
      .then((res) => {
        //console.log(res.data);
        props.listChangeFunction(res.data);
      });
  };

  return (
    <>
      {searchMode === "by the club name" && (
        <SearchBar
          submitFunction={searchByClubNameFunction}
          placeholder={"Search clubs by their names"}
        />
      )}
      {searchMode === "by the club tag" && (
        <SearchBar
          submitFunction={searchByTagFunction}
          placeholder={"Search posts by their tags"}
        />
      )}
      <button
        onClick={onClickModeChange}
        className={
          "bg-transparent py-2 px-4 mb-5 border border-[#D0D1C9] hover:border-transparent rounded"
        }
      >
        {searchMode === "by the club name"
          ? "press to search by the club tag"
          : "press to search by the club name"}
      </button>
    </>
  );
}

export default SearchInterface;
