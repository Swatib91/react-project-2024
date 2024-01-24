import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement("h1", { id: "heading" }, "HEllo World from React!");
// console.log(heading);


const parent = React.createElement("div", { id: "paraent" },
    [
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "Hi, I m in H1 tag"),
            React.createElement("h2", {}, "This is react")]
        ),
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "Hi, I m in H1 tag"),
            React.createElement("h2", {}, "Hi, I m in H2 tag")]
        )]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // putting this parent inside this root tag and replace everything inside roots(if any other tag already inside <div>)