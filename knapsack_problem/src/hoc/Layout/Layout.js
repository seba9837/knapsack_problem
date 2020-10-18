import React from "react";
import Cont from "../Cont/Cont";
import StandardNavBar from "../../components/Navigation/StandardNavBar/StandardNavBar";

const layout = (props) => (
  <Cont>
    <StandardNavBar />
    <main>{props.children}</main>
  </Cont>
);

export default layout;
