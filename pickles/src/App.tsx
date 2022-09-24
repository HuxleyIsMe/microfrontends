import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { Footer } from "home/Footer";
// must be a default export
// import Header from "home/Header";

import "./index.css";
// @ts-ignore
const Header = React.lazy(() => import("home/Header"));

const App = () => (
  <div className="container">
    <Suspense fallback={<div>..Loading</div>}>
      <Header />
    </Suspense>
    <div className="content">Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
