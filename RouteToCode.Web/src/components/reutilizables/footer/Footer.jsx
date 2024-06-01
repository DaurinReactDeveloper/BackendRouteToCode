import React from "react";
import { NamePage, contact_footer } from "../textos/Textos.jsx";
import { FaSquareWhatsapp, FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";

export function Footer() {
  return (
    <>
      <hr className="hr_inicio_footer" />

      <section className="row row_footer">
        <article className="col-sm-12 col-md-4 col_name_page_footer">
          <p className="name_footer">{NamePage}</p>
        </article>

        <article className="col col-md-4 col_contact_footer">
          <p className="name_contact">{contact_footer}</p>
          <p>Tel: 809-918-7905</p>
          <p>Correo: dauringonzales7@gmail.com</p>
        </article>

        <article className="col col-md-4 col_redes_footer">
          <div className="div_icon_footer">
            <a href="https://wa.link/6593id" target="_blank">
              <FaSquareWhatsapp className="icon_footer" />
            </a>
          </div>

          <div className="div_icon_footer">
            <a
              href="https://www.instagram.com/solucionesdigitales_16/"
              target="_blank"
            >
              <FaSquareInstagram className="icon_footer" />
            </a>
          </div>

          <div className="div_icon_footer">
            <a
              href="https://www.linkedin.com/in/dauringonzalezdeveloperweb/"
              target="_blank"
            >
              <FaLinkedin className="icon_footer" />
            </a>
          </div>
        </article>
      </section>

      <hr className="hr_final_footer" />
      <section className="row row_final_footer">
        <p> &copy; 2024 Daurin Gonzalez. Todos los Derechos Reservados </p>
      </section>
    </>
  );
}
