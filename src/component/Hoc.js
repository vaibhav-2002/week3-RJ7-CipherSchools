import React from "react";

function higherOderComponent(HocComponent) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <h1>This is a higher order component</h1>
          <HocComponent />
        </div>
      );
    }
  };
}
export default higherOderComponent;
