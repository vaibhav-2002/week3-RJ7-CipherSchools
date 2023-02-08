import React, { useState } from "react";
import Test from "../Test";
import UserDetails from "./UserDetails";

const AllUserList = () => {
  const [state, setState] = useState({
    name: "anusheel",
  });
  // state = {
  //   name: "anusheel",
  // };
  let Allusers = [
    {
      name: "vaibhav",
      email: "vaibhavkhandelwal2002@gmail.com",
      phone: "7073817488",
    },
    {
      name: "kartik",
      email: "kartik@.com",
    },
  ];

  let setStateName = (name) => {
    setState({ ...state, name });
  };

  //   Or we can do
  //   let array = [
  //     <UserDetails user={Allusers[0]}></UserDetails>,
  //     <UserDetails user={Allusers[1]}></UserDetails>,
  //   ];
  // setTimeout(() => {
  //   this.setState({ name: "Vaibhav Boss" });
  // }, 1500);
  return (
    <div>
      {/* <UserDetails user={Allusers[0]}></UserDetails>
      <UserDetails user={Allusers[1]}></UserDetails> */}

      {/* {array} */}

      {/* .map funtion() */}

      {/* <h1>The name is {this.state.name}</h1> */}

      <Test name={state.name} setName={setStateName}></Test>
      {Allusers.map((user, index) => (
        <UserDetails key={index} user={user}></UserDetails>
      ))}
    </div>
  );
};
export default AllUserList;
