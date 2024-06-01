import React, { useState } from "react";
import axios from "axios";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { urlUser } from "../../../endpoints/Endpoints";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";
import "../iniciarsesion/iniciarsesion.css";

export default function IniciarSesión() {
  const [email, setEmail] = useState("");
  const [password, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const Redireccionar = useNavigate();

  function insertarUsuario(e) {
    const usuario = e.target.value;
    if (usuario != null) {
      setEmail(usuario);
    } else {
      console.log("usuario es null");
    }
  }

  function insertarContraseña(e) {
    const password = e.target.value;

    if (password != null) {
      setContraseña(password);
    } else {
      console.log("contraseña es null");
    }
  }

  async function extraerUsuario() {
    try {
      const response = await axios.get(`${urlUser}/${email}/${password}`);
      console.log(response.data);

      if (response.data.token) {
        setMensaje("USUARIO ENCONTRADO");
        localStorage.setItem("token", response.data.token);

        // Verificar que userId no es null
        const userId = response.data.user.userId;

        if (userId) {
          localStorage.setItem("userId", userId.toString());
        } else {
          console.log("userId es null o undefined");
        }
        Redireccionar("/Inicio");
      } else {
        setMensaje("USUARIO NO ENCONTRADO");
      }
    } catch (error) {
      setMensaje("HA OCURRIDO UN ERROR, INTENTE DE NUEVO");
    }
  }

  function cambiarContraseña() {
    alert("ESTA FUNCION SE AGREGARA MAS ADELANTE");
  }

  return (
    <>
      <Header />

      <main>
        <section className="row row_iniciarsesion">
          {/* PRIMERA COLUMNA */}
          <article className="col col_img_iniciarsesion">
            <img
              src="\src\assets\img_login.webp"
              alt="img"
              className="img-fluid img_login"
            />
          </article>

          {/* SEGUNDA COLUMNA */}
          <article className="col col_data_iniciarsesion">
            {/* DIV MENSAJE DE INICIO */}

            <div className="div_text_iniciarsesion">
              <h1 className="h1_mensaje_bienvenida_registro">
                BIENVENIDO DE NUEVO
                <MdPersonPin />
              </h1>
              <p className="p_subtitulo_registro">
                ¡ESTAMOS FELICES DE VERTE DE NUEVO!
              </p>
            </div>

            {/* DIV DATA DE INICIO */}
            <div className="div_data_iniciarsesion">
              <div className="div_user_iniciarsesion">
                <FaUser className="icon_iniciarsesion" />
                <input
                  className="input_user_iniciarsesion"
                  type="text"
                  onChange={insertarUsuario}
                  placeholder="USUARIO"
                />
              </div>

              <div className="div_password_iniciarsesion">
                <FaUserLock className="icon_iniciarsesion" />
                <input
                  className="input_password_iniciarsesion"
                  type="password"
                  onChange={insertarContraseña}
                  placeholder="CONTRASEÑA"
                />
              </div>

              <div className="div_cambiar_password">
                <Link
                  onClick={cambiarContraseña}
                  className="link_iniciarsesion_register"
                >
                  ¿OLVIDASTE TU CONTRASEÑA?
                </Link>
              </div>

              {mensaje ? (
                <p className="p_mensaje_iniciar_sesión">{mensaje}</p>
              ) : (
                <p className="p_mensaje_iniciar_sesión">{mensaje}</p>
              )}

              <div className="div_botón_iniciarsesion">
                <button
                  type="button"
                  className="botón_iniciarsesion_continuar"
                  onClick={extraerUsuario}
                >
                  INICIAR SESIÓN
                </button>
              </div>

              <div className="div_iniciarsesion_register">
                <span>¿NO TIENES UNA CUENTA?</span>
                {""}{" "}
                <Link to={"/register"} className="link_iniciarsesion_register">
                  REGÍSTRATE
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
