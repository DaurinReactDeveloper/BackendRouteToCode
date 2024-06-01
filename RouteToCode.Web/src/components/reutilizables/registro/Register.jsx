import React, { useState } from "react";
import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";
import { urlUser } from "../../../endpoints/Endpoints.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  //Variables a utilizar - para almacenar lo del input
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textSuccess, setTextSuccess] = useState("");

  //variable navegación para redirigir
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/IniciarSesión");
  }

  const userDto = {
    name: `${name}`,
    address: `${address}`,
    email: `${email}`,
    password: `${password}`,
  };

  function extraerNombre(e) {
    const evento = e.target.value;

    if (evento != null) {
      setName(evento);
    } else {
      alert("HA OCURRIDO UN ERROR CON EL NOMBRE");
    }
  }

  function extraerDireccion(e) {
    const evento = e.target.value;

    if (evento != null) {
      setAddress(evento);
    } else {
      alert("HA OCURRIDO UN ERROR CON EL NOMBRE");
    }
  }

  function extraerEmail(e) {
    const evento = e.target.value;

    if (evento != null) {
      setEmail(evento);
    } else {
      alert("HA OCURRIDO UN ERROR CON EL NOMBRE");
    }
  }

  function extraerPassword(e) {
    const evento = e.target.value;

    if (evento != null) {
      setPassword(evento);
    } else {
      alert("HA OCURRIDO UN ERROR CON EL NOMBRE");
    }
  }

  async function agregarUsuario() {
    try {
      const usuario = await axios.post(`${urlUser}/Save/`, userDto, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (usuario.status === 200) {
        setTextSuccess("SE HA AGREGADO CORRECTAMENTE - REDIRIGIENDO...");
        setTimeout(() => {
          navigate("/IniciarSesión");
        }, 2000);
      } else {
        setTextSuccess("HA OCURRIDO UN ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <main className="main_register">
        <section className="row">
          <article className="col section_register_img">
            <img
              src="\src\assets\img_register.webp"
              alt=""
              className="img-fluid"
            />
          </article>

          <article className="col  section_inputs_register">
            <h2 className="h2_register">REGISTRO</h2>
            <p className="p_register">
              NOS ALEGRA SABER, QUE QUIERES SER PARTE DE NUESTRA COMUNIDAD{" "}
              {":)"}
            </p>

            <div className="div_input_register">
              <input
                type="text"
                placeholder="Name"
                className="input_register"
                onChange={extraerNombre}
                required
                maxLength={15}
                minLength={5}
              />
              <input
                type="text"
                placeholder="Address"
                className="input_register"
                onChange={extraerDireccion}
                required
                maxLength={15}
                minLength={5}
              />
              <input
                type="email"
                placeholder="Email"
                className="input_register"
                onChange={extraerEmail}
                required
                maxLength={15}
                minLength={5}
              />
              <input
                type="password"
                placeholder="Password"
                className="input_register"
                onChange={extraerPassword}
                required
                maxLength={15}
                minLength={5}
              />
            </div>

            <div className="mensaje_registro">
              {textSuccess ? (
                <p className="p_success_registro_correcto">{textSuccess}</p>
              ) : (
                <p className="p_success_registro_incorrecto">{textSuccess}</p>
              )}
            </div>

            <div className="div_button_registrarse">
              <button
                type="button"
                className="botón_registrarse"
                onClick={agregarUsuario}
              >
                REGISTRARSE
              </button>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
