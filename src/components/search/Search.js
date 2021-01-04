import React from "react";
import { useDispatch } from "react-redux";
import { filterList } from "../../actions/index";

function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterList(e.target.value));
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search"
      aria-label="search"
      onChange={handleChange}
    />
  );
}

export default Search;
