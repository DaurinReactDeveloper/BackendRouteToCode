import App from "../App.jsx";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Modulo1 } from "../components/csharp/modulo1/Modulo1.jsx";
import { Modulo2 } from "../components/csharp/modulo2/Modulo2.jsx";
import { Modulo3 } from "../components/csharp/modulo3/Modulo3.jsx";
import { Modulo4 } from "../components/csharp/modulo4/Modulo4.jsx";
import { Modulo5 } from "../components/csharp/modulo5/Modulo5.jsx";
import { Modulo6 } from "../components/csharp/modulo6/Modulo6.jsx";
import { Modulo7 } from "../components/csharp/modulo7/Modulo7.jsx";
import { Modulo8 } from "../components/csharp/modulo8/Modulo8.jsx";
import { Modulo9 } from "../components/developmentkills/modulo9/Modulo9.jsx";
import IniciarSesión from "../components/reutilizables/iniciarsesion/IniciarSesion.jsx";
import Register from "../components/reutilizables/registro/Register.jsx";

const token = localStorage.getItem("token");

export const router = createBrowserRouter([
  {
    path: "/",
    element: token ? <Navigate to="/Inicio" /> : <IniciarSesión />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Inicio",
    element: <App />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Modulo_1",
    element: <Modulo1 />,
    errorElement: "Ha Ocurrido un error",
  },

  {
    path: "/Modulo_2",
    element: <Modulo2 />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Modulo_3",
    element: <Modulo3 />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Modulo_4",
    element: <Modulo4 />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Modulo_5",
    element: <Modulo5 />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Modulo_6",
    element: <Modulo6 />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Modulo_7",
    element: <Modulo7 />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Modulo_8",
    element: <Modulo8 />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/Modulo_9",
    element: <Modulo9 />,
    errorElement: "Ha Ocurrido un error",
  },
  {
    path: "/register",
    element: token ? <Navigate to="/Inicio" /> : <Register />,
    errorElement: "Ha Ocurrido un error",
  },
]);
