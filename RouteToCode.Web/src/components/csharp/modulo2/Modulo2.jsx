import {
  MainMódulosCsharp,
  Subtemas,
} from "../../reutilizables/mainCsharp/MainMódulosCsharp.jsx";
import { Footer } from "../../reutilizables/footer/Footer.jsx";
import { Header } from "../../reutilizables/header/Header.jsx";
import {
  EstructurasControl,
  Operadores,
  Tipos_Datos,
  Variables,
} from "./AcordeonesModulo2.jsx";
import Comentarios from "../../reutilizables/comentarios/Comentarios.jsx";

export function Modulo2() {
  return (
    <>
      <Header />
      <MainMódulosCsharp
        nombreModulo={"MODULO 2 - FUNDAMENTOS DE C#"}
        textoModulo={
          "En este módulo, explorarás los fundamentos de C#, comenzando con los diferentes tipos de datos, incluyendo tanto los básicos como los compuestos, y los operadores que se utilizan para manipularlos. Aprenderás cómo declarar variables, entender su ámbito, y distinguir entre tipos de referencia y tipos de valor. Además, estudiarás las estructuras de control esenciales como las sentencias condicionales, los bucles y otras sentencias de control avanzadas, que te permitirán dirigir el flujo de tu programa de manera efectiva."
        }
      >
        {/* Subtemas - MODULO 2 */}
        <Subtemas Tema={"2.1 Tipos de Datos"} Accordion={Tipos_Datos} />

        <Subtemas Tema={"2.2 Variables"} Accordion={Variables} />

        <Subtemas Tema={"2.3 Operadores"} Accordion={Operadores} />

        <Subtemas
          Tema={"2.4 Estructuras de Control"}
          Accordion={EstructurasControl}
        />
      </MainMódulosCsharp>

      <Comentarios section={"Modulo2"} />

      <Footer />
    </>
  );
}
