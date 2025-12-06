

// First react code *************************************************************** //

// const heading = React.createElement("h1", {id: "heading"}, "hello from react code");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// putting child elements under child elements *************************************************************** //

// const parent = React.createElement("div", { id: "parent" }, 
//     React.createElement("div", { id: "child" }, 
//         React.createElement("h1", { id: "heading" }, "This is the main heading tag" )
//     )
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
// root.render(parent);


// Putting two or more child under one child elements ************************************************************** //

// const heading = React.createElement("div", { id: "parent" }, 
//     React.createElement( "div", { id: "child" }, [
//         React.createElement( "h1", { id: "heading1" }, "This is the first Heading" ),
//         React.createElement( "h2", { id: "heading2" }, "This is the second Heading" )
//         ]
//     )
// )
// root.render(heading);


// 