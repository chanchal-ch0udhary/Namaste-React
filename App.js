import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
  [React.createElement("div", { id: "child1" , key: "C1"},
    [React.createElement("h1", { id: "heading1", key: "c1-h1" }, "I am h1 Tag"),
     React.createElement("h2", { id: "heading2", key: "c1-h2" }, "I am h2 Tag")
    ]
  ),
  React.createElement("div", { id: "child2", key: "C2" },
    [React.createElement("h1", { id: "heading1", key: "c2-h1" }, "I am h1 Tag"),
     React.createElement("h2", { id: "heading2", key: "c2-h2" }, "I am h2 Tag")
    ]
  )]
);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
