import React from "react";
import ReactDOM from "react-dom";


import { Menu } from "./componets/Menu";
import { Sites } from "./componets/Sites";

ReactDOM.render(<Menu /> ,document.getElementById("menu"));
ReactDOM.render(<Sites /> ,document.getElementById("sites"));
