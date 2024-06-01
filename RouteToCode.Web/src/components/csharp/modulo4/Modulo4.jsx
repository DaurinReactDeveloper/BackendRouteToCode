import Comentarios from "../../reutilizables/comentarios/Comentarios.jsx";
import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";

import { Arrays, Colecciones } from "./AcordeonesModulo4.jsx";

export function Modulo4() {
  return (
    <>
      <Header />
      <MainMódulosCsharp
        nombreModulo={"MODULO 4 - ESTRUCTURAS DE DATOS"}
        textoModulo={
          "En este módulo, aprenderás sobre las estructuras de datos en C#. Comenzarás con los arrays, comprendiendo cómo declararlos, recorrerlos y realizar operaciones con ellos. Luego, explorarás las colecciones, enfocándote en las listas, y cómo usarlas para gestionar grupos de datos de manera más flexible y dinámica."
        }
      >
        <Subtemas Tema={"4.1 - Arrays"} Accordion={Arrays} />
        <Subtemas Tema={"4.2 - Colecciones"} Accordion={Colecciones} />
        {/*<Subtemas Tema={"5.3 - Polimorfismo"} Accordion={Polimorfismo} />
        <Subtemas Tema={"5.4 - Abstracción"} Accordion={Abstracción} /> */}
      </MainMódulosCsharp>

      <Comentarios section={"Modulo4"} />

      <Footer />
    </>
  );
}
