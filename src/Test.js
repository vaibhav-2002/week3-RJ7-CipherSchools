import React, { Component } from "react";
import "./Test.css";
// const Test = () => {
//   return (
//     <div>
//       <div>"Hello This is Test File is working"</div>
//     </div>
//   );
// };

// class Test extends Component {
//   state = { isLoggedIn: false };
//   render() {
//     return (
//       <div>
//         {!this.state.isLoggedIn ? (
//           <h1>"You are Logged Out"</h1>
//         ) : (
//           <h1>"Congratulations, you are logged in!"</h1>
//         )}
//         <button onClick={(e) => this.setState({ isLoggedIn: true })}>
//           Login
//         </button>
//       </div>
//     );
//   }
// }

const Test = ({ name = "", setName }) => {
  return (
    <div>
      <h1>The name is : {name}</h1>;
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
};

export default Test;
