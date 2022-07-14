import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (<div id="home">
    {/* an <h1> element, with the style attribute set to a color of "firebrick" */}
    <h1 style={{ color: "firebrick" }}>
      {name} is a Web Developer from {city}
    </h1>
  </div>);
}

export default Home;
