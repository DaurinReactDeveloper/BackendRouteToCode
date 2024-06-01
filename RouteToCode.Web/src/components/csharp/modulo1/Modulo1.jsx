import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";

import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  InstalaciónConfiguración,
  IntroducciónCsharp,
  IntroducciónProgramación,
} from "./AcordeonesModulo1.jsx";

import "./introducciónCsharp.css";
import Comentarios from "../../reutilizables/comentarios/Comentarios.jsx";

export function Modulo1() {
  return (
    <>
      <Header />

      <MainMódulosCsharp
        nombreModulo={"MODULO 1: INTRODUCCIÓN A C#"}
        textoModulo={
          "En este módulo, aprenderás los conceptos básicos de la programación, incluyendo qué es, por qué es importante y los diferentes enfoques que existen, como la programación orientada a objetos. Conocerás la historia y características del lenguaje de programación C#, así como el entorno de desarrollo utilizado para escribir y probar tu código. Además, se te guiará en la descarga e instalación de Visual Studio, la configuración adecuada del entorno y la creación de tu primer proyecto en C#."
        }
      >
        {/* Subtemas - MODULO 1 */}
        <Subtemas
          Tema={"1.1 Introducción a la Programación"}
          Accordion={IntroducciónProgramación}
        />

        <Subtemas
          Tema={"1.2 Introducción a C#"}
          Accordion={IntroducciónCsharp}
        />

        <Subtemas
          Tema={"1.3 Instalación y Configuración"}
          Accordion={InstalaciónConfiguración}
        />
      </MainMódulosCsharp>

      <Comentarios section={"Modulo1"} />

      <Footer />
    </>
  );
}
