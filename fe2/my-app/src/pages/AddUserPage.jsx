import React from "react";
import NavigationBar from "./NavigationBarPage";
import Add from "../features/user/Add";

const AddUserPage = () => {
  return (
    <>
      <NavigationBar>
        <Add></Add>
      </NavigationBar>
    </>
  );
};

export default AddUserPage;
