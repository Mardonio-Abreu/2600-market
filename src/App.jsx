import React from "react";
import "./css/style.css";
import ItemListContainer from "./componenents/ItemListContainer/ItemListContainer";
import NavigationBar from "./componenents/NavBar/NavBar"


const App = () => {
  return (
    <>
      <NavigationBar/>
      <ItemListContainer/>
    </>
  );
};

export default App;
