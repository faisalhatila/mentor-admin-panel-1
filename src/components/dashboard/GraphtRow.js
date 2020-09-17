import React from "react";
import LeftGraph from "./LeftGraph";
import RightGraph from "./RightGraph";
// import { GraphComponent } from "./GraphComponent";
const GraphRow = (props) => {
  return (
    <div className="row">
      <LeftGraph />
      {/* <GraphComponent /> */}
      {/* <ComponentComponent /> */}
      <RightGraph />
    </div>
  );
};

export default GraphRow;
