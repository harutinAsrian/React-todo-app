import React from "react";
import "./App.css";
import Search from "./components/search/Search";
import Buttons from "./components/buttons/Buttons";
import Input from "./components/input/Input";
import Done from "./components/done/Done";
import All from "./components/all/All";
import Active from "./components/active/Active";
import { useSelector } from "react-redux";
import { howManyToDo, getComplited } from "./helpers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const itemList = useSelector((state) => state.todoList);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>Todo List</h1>
          <p>
            {howManyToDo(itemList)} more to do, {getComplited(itemList)} done
          </p>
        </div>
        <div className="search">
          <Search />
          <Buttons />
        </div>
        <Switch>
          <Route exact path="/" component={All} />
          <Route exact path="/active" component={Active} />
          <Route exact path="/done" component={Done} />
        </Switch>
        <Input />
      </div>
    </Router>
  );
}

export default App;
