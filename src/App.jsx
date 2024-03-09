import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./css/style.css";
import ItemListContainer from "./componenents/ItemListContainer/ItemListContainer";
import NavigationBar from "./componenents/NavBar/NavBar"


const App = () => {
  return (
    <>
      <NavigationBar/>
      <Router>   
        <Routes>
          <Route path="/list" element={<ItemListContainer text={"List"}/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
