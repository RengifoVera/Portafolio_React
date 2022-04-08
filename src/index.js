import React from "react";
import ReactDOM from "react-dom";
import { Menu} from "./componets/Menu";
import { Inicio } from "./componets/Inicio";
import { SobreMi } from "./componets/SobreMi";
import { Proyect } from './componets/Proyect';
import {Contacto}  from './componets/Contacto';
import { Footer } from "./componets/Footer";

ReactDOM.render(<Menu />,document.getElementById("nav"));
ReactDOM.render(<Footer />,document.getElementById("footer"));
ReactDOM.render(<Inicio /> ,document.getElementById("inicio"));
ReactDOM.render(<SobreMi />,document.getElementById("sobreMi"));
ReactDOM.render(<Proyect />,document.getElementById("proyectos"));
ReactDOM.render(<Contacto />,document.getElementById("contacto"));
