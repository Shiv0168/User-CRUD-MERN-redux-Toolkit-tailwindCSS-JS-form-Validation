import React from "react";
import NavigationBar from "./NavigationBarPage";
import Home from "../features/user/Home";

const HomePage = () => {
  return (
    <>
      <NavigationBar>
        <Home></Home>
      </NavigationBar>
    </>
  );
};

export default HomePage;
