import React, { useState, Component } from "react";

const UserDetails = ({ user = {} }) => {
  // let user = props.user;
  // let { user } = props;
  const [h1Text, setH1Text] = useState("Event Listner");
  return (
    <div>
      <h3>{user.name}</h3>
      <h5>
        Email: {user.email}
        <br></br>
        Phone: {user.phone}
      </h5>
      <h1>{h1Text}</h1>
      <button
        onClick={(e) => {
          setH1Text("This is eventListner(e)");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

// class UserDetails extends Component {
//   user = this.props.user;
//   render() {
//     return (
//       <div>
//         <h3>{this.user.name}</h3>
//         <h5>
//           Email: {this.user.email}
//           <br></br>
//           Phone: {this.user.phone}
//         </h5>
//       </div>
//     );
//   }
// }
export default UserDetails;
