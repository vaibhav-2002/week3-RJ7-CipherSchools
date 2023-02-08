import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SignUpForm from "./SignUpForm";
import Photos from "./component/Photos";
import higherOderComponent from "./component/Hoc";
const App = () => {
  const TestApp = higherOderComponent(() => {
    return <h1>This is a test</h1>;
  });
  return (
    <div>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path={"/"} element={<h1>This is Home Page</h1>} />
          <Route
            path={"/contact"}
            element={<h1>This is Contact page</h1>}
          ></Route>
          <Route
            path={"/about"}
            element={<h1>This is an About Page</h1>}
          ></Route>
          <Route path={"/signup"} element={<SignUpForm></SignUpForm>}></Route>
          <Route path={"/photos"} element={<Photos></Photos>}></Route>
          <Route path={"/test"} element={<TestApp></TestApp>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
