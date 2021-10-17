import React from "react";
import { Route } from "wouter";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
console.log(navigator);
function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/calendar">
        <Calendar />
      </Route>
    </>
  );
}

export default App;
