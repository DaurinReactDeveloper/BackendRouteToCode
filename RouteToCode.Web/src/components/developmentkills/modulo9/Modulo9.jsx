import Comentarios from "../../reutilizables/comentarios/Comentarios.jsx";
import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";
import { GitComandos, GitConceptos } from "./AcordeonesModulo9.jsx";

export function Modulo9() {
  return (
    <>
      <Header />
      <MainMódulosCsharp
        nombreModulo={"MODULO 9 - GIT (CONTROLADOR DE VERSIONES) "}
        textoModulo={
          "En este módulo, te familiarizarás con Git, una herramienta esencial para el control de versiones en el desarrollo de software. Comenzarás con los conceptos básicos, entendiendo qué es Git, por qué es importante y cómo se utiliza en la gestión de proyectos. Luego, aprenderás los comandos fundamentales de Git que te permitirán realizar tareas básicas como crear repositorios, realizar commits, y gestionar ramas, entre otras operaciones esenciales para el trabajo colaborativo y el seguimiento de cambios en tu código."
        }
      >
        <Subtemas Tema={"1.1 - CONCEPTOS BÁSICOS"} Accordion={GitConceptos} />
        <Subtemas Tema={"1.2 - COMANDOS"} Accordion={GitComandos} />
      </MainMódulosCsharp>

      <Comentarios section={"Modulo9"} />

      <Footer />
    </>
  );
}
