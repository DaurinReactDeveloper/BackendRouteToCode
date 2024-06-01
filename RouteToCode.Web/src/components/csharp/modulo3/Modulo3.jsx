import Comentarios from "../../reutilizables/comentarios/Comentarios.jsx";
import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";
import { Funciones } from "./AcordeonesModulo3.jsx";

export function Modulo3() {
  return (
    <>
      <Header />

      <MainMódulosCsharp
        nombreModulo={"MODULO 3 - FUNCIONES"}
        textoModulo={
          "En este módulo, te adentrarás en el mundo de las funciones y métodos en C#. Aprenderás qué son las funciones, cómo definirlas y utilizarlas en tus programas. Explorarás los conceptos de parámetros y argumentos, así como los diferentes tipos de funciones que puedes crear para modular y organizar tu código de manera efectiva."
        }
      >
        <Subtemas Tema={"3.1 FUNCIONES"} Accordion={Funciones} />
      </MainMódulosCsharp>

      <Comentarios section={"Modulo3"} />

      <Footer />
    </>
  );
}
