import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";
import { Clases, Objetos } from "./AcordeonesModulo6.jsx";

export function Modulo6() {
  return (
    <>
      <Header />
      <MainMódulosCsharp
        nombreModulo={"MODULO 6 - CLASES Y OBJETOS"}
        textoModulo={
          "En este módulo, explorarás el concepto fundamental de clases y objetos en C#. Aprenderás qué son las clases, cómo se definen, y cómo contienen atributos y métodos que representan características y comportamientos de un objeto. Se estudiarán los constructores, métodos especiales que inicializan objetos. Además, se te guiará en la creación de objetos, instancias concretas de una clase que puedes utilizar en tu programa para representar entidades del mundo real."
        }
      >
        <Subtemas Tema={"6.1 - Clases"} Accordion={Clases} />
        <Subtemas Tema={"6.2 - Objetos"} Accordion={Objetos} />
      </MainMódulosCsharp>

      <Comentarios section={"Modulo6"} />

      <Footer />
    </>
  );
}
