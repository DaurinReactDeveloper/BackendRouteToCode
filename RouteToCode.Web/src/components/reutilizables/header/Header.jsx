import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Importa jwt_decode desde la biblioteca jwt-decode
import { FiMenu } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { ContentButton, Contents, Home, NamePage } from "../textos/Textos.jsx";
import "./header.css";

export function Header() {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  let userName = "";

  if (token) {
    const decodedToken = jwtDecode(token);
    userName = decodedToken.sub;
  }

  function cerrarSesión() {
    localStorage.removeItem("token");
    navigation("/");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* NOMBRE DE LA PAGINA */}
          <h1 className="title_navbar">{NamePage}</h1>
          {/* BOTÓN EXTENDIBLE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
          >
            <FiMenu className="button_menu" />
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* HOME */}
              <li className="nav-item">
                <Link className="nav-link" to={"/Inicio"}>
                  {Home}
                </Link>
              </li>

              {/* TABLA DE CONTENIDO */}

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  {Contents}
                </a>
              </li>
            </ul>

            {/* BOTÓN DE INICIAR SESIÓN */}
            {token ? (
              <button
                onClick={cerrarSesión}
                className="button_sesión"
                title="Cerrar Sesión"
              >
                <IoPersonCircleOutline className="person_icon" />
                <span>{userName}</span>
              </button>
            ) : (
              <Link to={"/"} className="button_sesión" title="Iniciar Sesión">
                <IoPersonCircleOutline className="person_icon" />
                <span>{ContentButton}</span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      <OfCanvas />
    </>
  );
}
function OfCanvas() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          {NamePage}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      {/* BODY DEL CANVAS */}
      <div className="offcanvas-body">
        <p>
          <strong>EL CAMINO DE UN PROGRAMADOR EFICIENTE - C#</strong>
        </p>
        <p className="p_part">CURSO BASICO C#</p>
        <ul>
          <li>
            <Link to="/Modulo_1" className="link_canvas">
              Modulo 1 - Introducción a C#
            </Link>
          </li>
          <li>
            <Link to="/Modulo_2" className="link_canvas">
              Modulo 2 - Fundamentos de C#
            </Link>
          </li>
          <li>
            <Link to="/Modulo_3" className="link_canvas">
              Modulo 3 - Funciones
            </Link>
          </li>
          <li>
            <Link to="/Modulo_4" className="link_canvas">
              Modulo 4 - Estructura de Datos
            </Link>
          </li>
          <li>
            <Link to="/Modulo_5" className="link_canvas">
              Modulo 5 - POO
            </Link>
          </li>
          <li>
            <Link to="/Modulo_6" className="link_canvas">
              Modulo 6 - Clases y Objetos
            </Link>
          </li>
          <li>
            <Link to="/Modulo_7" className="link_canvas">
              Modulo 7 - Características Avanzadas
            </Link>
          </li>
          <li>
            <Link to="/Modulo_8" className="link_canvas">
              Modulo 8 - Final - Ejercicios
            </Link>
          </li>
        </ul>

        {/* PARTE 2 */}
        <p className="p_part"> GENERAL DEVELOPMENT KILLS C#</p>

        <ul>
          <li>
            <Link to="/Modulo_9" className="link_canvas">
              Modulo 1 - Git
            </Link>
          </li>
        </ul>

        {/* PARTE 3 */}
        <p className="p_part"> PROGRAMACIÓN CON ADO.NET</p>

        {/* PARTE 4 */}
        <p className="p_part"> APLICACIONES WINDOWS FORMS</p>

        {/* PARTE 5 */}
        <p className="p_part"> APLICACIONES WEB ASP.NET</p>

        {/* PARTE 6 */}
        <p className="p_part"> REACT JS</p>
      </div>
    </div>
  );
}
