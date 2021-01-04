import React, { useState } from "react";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-outline-info">
        <Link to="/">All</Link>
      </button>
      <button type="button" className="btn btn-outline-info">
        <Link to="/active">Active</Link>
      </button>
      <button type="button" className="btn btn-outline-info">
        <Link to="/done">Done</Link>
      </button>
    </div>
  );
}

export default Buttons;
