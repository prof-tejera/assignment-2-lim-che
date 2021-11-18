import React, { useState } from "react";

const TabataTimer = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const rest = {
      num: parseInt(enteredNumber),
    };
    props.onChangedNumber(rest);
    setEnteredNumber("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          min="1"
          max="9"
          step="1"
          value={enteredNumber}
          onChange={numberChangeHandler}
          required
        />
        <button> Rest</button>
      </form>
    </div>
  );
};

export default TabataTimer;
