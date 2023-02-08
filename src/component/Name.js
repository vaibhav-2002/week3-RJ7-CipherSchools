import React, { useState } from "react";

const Name = () => {
  let [state, setState] = useState({ name: "Kartik" });

  let setName = (e) => {
    setState({ ...state, name: "Vaibhav" });
  };

  return (
    <div>
      <h1> The name is : {state.name}</h1>
      <button onClick={setName}>Click Me</button>
    </div>
  );
};
export default Name;
