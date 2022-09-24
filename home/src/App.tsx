import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import HomeContent from "./HomeContent";
import { Footer } from "./Footer";

import "./index.css";

const App = () => (
  <div className="container">
    <Header pickleName="peaches" />
    <div className="content">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
