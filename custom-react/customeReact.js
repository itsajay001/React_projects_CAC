const MainContainer = document.querySelector("#root");

ReactElement = {
  type: "a",

  props: {
    href: "https://google.com",

    target: "_blank",
  },

  children: "click me visit google",
};

function customrender(ReactElement, container) {
  const domelement = document.createElement(ReactElement.type);

  domelement.setAttribute("href", "ReactElement.props.href");
  domelement.setAttribute("target", "ReactElement.props.target");
  domelement.innerHTML = ReactElement.children;

  container.appendChild(domelement);
}

customrender(ReactElement, MainContainer);

/*

using for in>>
  
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;
for (const prop in reactElement.props) {
  if (prop === "children") continue;
  domElement.setAttribute(prop, reactElement.props[prop]);
}
container.appendChild(domElement); */
