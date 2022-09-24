import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import SafeComponent from "./SafeComponent";
import { Footer } from "home/Footer";

// must be a default export but like noo
// import Header from "home/Header";

import "./index.css";
// @ts-ignore
const Header = React.lazy(() => import("home/Header"));

const App = () => {
  const [showHeader, setShowHeader] = React.useState(false);
  return (
    <div className="container">
      {!showHeader && (
        <Suspense fallback={<div>..Loading</div>}>
          {/* @ts-ignore  look at class typescript typingm*/}
          <SafeComponent>
            {/* ok this should throw an error but it doesnt...  */}
            <Header />
          </SafeComponent>
        </Suspense>
      )}
      {/* <button onClick={() => setShowHeader(!showHeader)}>
        {" "}
        Show the header
      </button> */}

      <div className="content">Content</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
