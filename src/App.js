import React from "react";

function App() {
  const data = { message: "Hello, prop you have reached the child-node and hence you have been logged.!" };
  return <ParentComponent data={data} />;
}

function ParentComponent(props) {
  return <ChildComponent data={props.data} />;
}

function ChildComponent(props) {
  return <GrandchildComponent data={props.data} />;
}

function GrandchildComponent(props) {
  return <div>{props.data.message}</div>;
}

export default App;

