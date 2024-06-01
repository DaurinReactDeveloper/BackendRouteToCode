import Comentarios from "../../reutilizables/comentarios/Comentarios.jsx";
import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";

import {
  Encapsulamiento,
  Herencia,
  Abstracción,
  Polimorfismo,
} from "./AcordeonesModulo5.jsx";

export function Modulo5() {
  return (
    <>
      <Header />
      <MainMódulosCsharp
        nombreModulo={"MODULO 5 - PROGRAMACIÓN ORIENTADA A OBJETOS"}
        textoModulo={
          "Este módulo se centra en los principios fundamentales de la programación orientada a objetos (POO). Explorarás conceptos clave como el encapsulamiento, que te permite ocultar los detalles de implementación de una clase; la herencia, que te permite crear nuevas clases basadas en clases existentes; el polimorfismo, que te permite utilizar un objeto de múltiples formas; y las interfaces, que definen un conjunto de métodos que una clase debe implementar, lo que permite la interoperabilidad entre diferentes clases. Estos conceptos te proporcionarán una base sólida para diseñar y desarrollar aplicaciones orientadas a objetos en C#."
        }
      >
        <Subtemas Tema={"5.1 - Encapsulamiento"} Accordion={Encapsulamiento} />
        <Subtemas Tema={"5.2 - Herencia"} Accordion={Herencia} />
        <Subtemas Tema={"5.3 - Polimorfismo"} Accordion={Polimorfismo} />
        <Subtemas Tema={"5.4 - Abstracción"} Accordion={Abstracción} />
      </MainMódulosCsharp>

      <Comentarios section={"Modulo5"} />

      <Footer />
    </>
  );
}
