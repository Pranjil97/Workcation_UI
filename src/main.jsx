import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";


import App from "./App";
import "./css/tailwind.css"

const app = document.getElementById("root");

const root = createRoot(app);

root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("root"));