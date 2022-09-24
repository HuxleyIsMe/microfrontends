import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { Footer } from "./Footer";

import "./index.css";

const App = () => (
  <div className="container">
    <Header pickleName="peaches" />
    <div className="content">Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
