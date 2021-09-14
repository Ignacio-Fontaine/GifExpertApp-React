import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {
  // TASK useState
  const [inputValue, setInputValue] = useState("");

  // SECCION Funciones
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // console.log(e.target.value);
    // console.log(e.nativeEvent.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias((category) => [inputValue, ...category]);
      setInputValue("");
    }
    // console.log("Submit!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>{inputValue}</h1> */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
