import Comentarios from "../../reutilizables/comentarios/Comentarios.jsx";
import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";
import {
  Assemblies,
  Async,
  BoxingUnboxing,
  Casting,
  Generics,
  SentenciasExpresiones,
  Using,
} from "./AcordeonesModulo7.jsx";

export function Modulo7() {
  return (
    <>
      <Header />
      <MainMódulosCsharp
        nombreModulo={"MODULO 7 - CARACTERÍSTICAS AVANZADAS DE C#"}
        textoModulo={
          "En este módulo, explorarás varias características avanzadas del lenguaje C#. Aprenderás sobre sentencias y expresiones, el proceso de boxing y unboxing, y cómo realizar conversiones implícitas y explícitas (casting). También descubrirás cómo funcionan los ensamblajes (exe y dll), el uso del bloque using para la gestión de recursos, el concepto de genéricos para crear estructuras de datos flexibles y tipos seguros, y cómo implementar métodos asíncronos para ejecutar tareas en segundo plano."
        }
      >
        <Subtemas
          Tema={"7.1 - Sentencias y Expresiones"}
          Accordion={SentenciasExpresiones}
        />

        <Subtemas Tema={"7.2 - Boxing/unboxing"} Accordion={BoxingUnboxing} />
        <Subtemas Tema={"7.3 - Casting"} Accordion={Casting} />
        <Subtemas Tema={"7.4 - Assemblies"} Accordion={Assemblies} />
        <Subtemas Tema={"7.5 - Using"} Accordion={Using} />
        <Subtemas Tema={"7.6 - Generics "} Accordion={Generics} />
        <Subtemas Tema={"7.7 - Async "} Accordion={Async} />
      </MainMódulosCsharp>

      <Comentarios section={"Modulo7"} />

      <Footer />
    </>
  );
}
