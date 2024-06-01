import React from "react";
import "./frame_principal.css";
import {
  text_mision,
  text_valores,
  text_valores_Apredizaje,
  text_valores_Comunidad,
  text_valores_Excelencia,
  text_valores_Final,
  text_valores_Integridad,
  text_valores_accesibilidad,
  text_vision,
} from "../reutilizables/textos/Textos.jsx";

export function FramePrincipal() {
  return (
    <>
      <main className="main_principal">
        {/* Section img */}
        <section className="row_img_main_principal">
          <img
            src="src\assets\img_frame_1.webp"
            alt=""
            className="img-fluid img_main_principal"
          />

          {/* TEXTO NAME PAGE */}
          <h1 className="text_route">LA SENDA AL MUNDO</h1>

          <div className="text_Computer_name">
            <h2 className="h2_código">DEL CÓDIGO</h2>
          </div>

          {/* TEXTO TELÉFONO */}
          <p className="text_Cel">LA SENDA AL MUNDO DEL CÓDIGO</p>
        </section>

        {/* PARTE 2 - MISION Y VISION */}
        <section className="row row_mision_vision">
          <article className="col col_mision_main_principal">
            <h2 className="h2_mision">MISION</h2>
            <p>{text_mision}</p>
          </article>

          <article className="col col_vision_main_principal">
            <h2 className="h2_vision">VISION</h2>
            <p>{text_vision}</p>
          </article>
        </section>

        {/* PARTE 3 - VALORES */}
        <section className="row row_valores_main_principal">
          <h2 className="h2_valores">VALORES</h2>

          <article className="articule_ul_valores">
            <p>{text_valores}</p>
            <ul className="ul_valores">
              <li>{text_valores_Excelencia}</li>
              <li>{text_valores_Apredizaje}</li>
              <li>{text_valores_Comunidad}</li>
              <li>{text_valores_Integridad}</li>
              <li>{text_valores_accesibilidad}</li>
            </ul>
            <p>{text_valores_Final}</p>
          </article>
        </section>
      </main>
    </>
  );
}
