import React, { useState } from "react";

const SignUp = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>FirstName</label>
      <input
        name={"FirstName"}
        type={"text"}
        onChange={handleChange}
        value={state.firstName}
        placeholder={"FirstName"}
      ></input>
      <label>LastName</label>
      <input
        name={"LastName"}
        type={"text"}
        onChange={handleChange}
        value={state.lastName}
        placeholder={"LastName"}
      ></input>
      <label>Email</label>
      <input
        name={"Email"}
        type={"Email"}
        onChange={handleChange}
        value={state.email}
        placeholder={"Email"}
      ></input>
      <label>Password</label>
      <input
        name={"Password"}
        type={"Password"}
        onChange={handleChange}
        value={state.password}
        placeholder={"Password"}
      ></input>
      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default SignUp;
