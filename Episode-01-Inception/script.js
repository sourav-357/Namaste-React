

// First react code 

// const heading = React.createElement("h1", {id: "heading"}, "hello from react code");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// putting elements under elements 

const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        React.createElement("h1", { id: "heading" }, "This is the main heading tag" )
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);


// 