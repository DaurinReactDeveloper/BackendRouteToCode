import Comentarios from "../../reutilizables/comentarios/Comentarios.jsx";
import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";
import { Ejercicio1, Ejercicio2 } from "./AcordeonesModulo8.jsx";

export function Modulo8() {
  return (
    <>
      <Header />
      <MainMódulosCsharp
        nombreModulo={"MODULO 8 - EJERCICIOS FINALES"}
        textoModulo={
          "En este módulo, pondrás en práctica todo lo aprendido en C# a través de ejercicios integradores."
        }
      >
        <Subtemas
          Tema={"8.1 - Ejercicio 1: Gestión de Biblioteca"}
          Accordion={Ejercicio1}
        />
        <Subtemas
          Tema={"8.2 - Ejercicio 2: Juego de Rol"}
          Accordion={Ejercicio2}
        />
      </MainMódulosCsharp>

      <Comentarios section={"Modulo8"} />

      <Footer />
    </>
  );
}
