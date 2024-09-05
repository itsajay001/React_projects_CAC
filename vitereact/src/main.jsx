import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const variable = "this is variable in React";

const reactElement = React.createElement(
  "a",
  { href: "google.com", target: "_blank" },
  "Click me to visit google",
  variable
);

ReactDOM.createRoot(document.getElementById("root")
).render(
    
  reactElement
);
