import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Your custom styles
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import CSS files
import "admin-lte/dist/css/adminlte.min.css"; // AdminLTE CSS
import "admin-lte/plugins/fontawesome-free/css/all.min.css"; // FontAwesome for icons
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

// Import JavaScript files
import "jquery/dist/jquery.min.js"; // jQuery
import "popper.js/dist/umd/popper.min.js"; // Popper.js for Bootstrap tooltips/popovers
import "bootstrap/dist/js/bootstrap.min.js"; // Bootstrap JS
import "admin-lte/dist/js/adminlte.min.js"; // AdminLTE JS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize stepper

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
