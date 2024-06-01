import "prismjs/themes/prism.min.css"; // Estilos de Prism (puedes elegir un tema específico)
import { useRef } from "react";
import { FaRegClipboard } from "react-icons/fa";

//El padre de los Acordeones - children no debe ponerse en español
export function Acordeon({
  idControl,
  titulo,
  children,
  expansion,
  show,
  collapsed,
}) {
  return (
    <div className="accordion div_accordion" id="acordeones">
      <div className="accordion-item">
        <h5 className="accordion-header">
          <button
            className={`accordion-button ${collapsed}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${idControl}`}
            aria-expanded={expansion}
            aria-controls={idControl}
          >
            <strong>{titulo}</strong>
          </button>
        </h5>

        <div
          id={idControl}
          className={`accordion-collapse collapse ${show}`}
          data-bs-parent="#acordeones"
        >
          <div className="accordion-body">
            {/* BODY */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

//Tabla para utilizar en los componentes
export function Tablas({ alcanceNombre, columnas, children }) {
  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope={alcanceNombre}>#</th>
            {columnas.map((columna, index) => (
              <th scope="col" key={index}>
                {columna}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

//Ejemplos de todos los Acordeones
export function EjemplosAcordeones({
  tipoVariable,
  nombreVariable,
  resultado,
  signo = "=",
  comentario,
}) {
  let resultadoRenderizado;
  if (tipoVariable === "string") {
    resultadoRenderizado = `"${resultado}"`;
  } else {
    resultadoRenderizado = resultado;
  }

  return (
    <div className="declaración_variable">
      <p>
        <span className="span_int">{tipoVariable}</span>{" "}
        <span className="span_nombre_variable">{nombreVariable}</span> {signo}{" "}
        {resultadoRenderizado}; {comentario}
      </p>
    </div>
  );
}

export function EjemplosAcordeonesCsharp({ csharpCode }) {
  const divRef = useRef(null);

  async function CopiarTexto() {
    //Condición para saber si ya tiene el div
    if (divRef.current) {
      //Conseguimos el div
      const text = divRef.current.innerText;

      try {
        await navigator.clipboard.writeText(text);
        alert("Texto copiado al portapapeles");
      } catch (error) {
        console.error("Error al copiar el texto: ", error);
      }
    }
  }

  return (
    <>
      <div ref={divRef} className="declaración_variable_2">
        <pre>
          <code>{csharpCode}</code>
        </pre>
        <button type="button" onClick={CopiarTexto} className="Botón_Copiar">
          <FaRegClipboard />
        </button>
      </div>
    </>
  );
}

//Spam Acordeones
export function YouTube() {
  return (
    <p>
      Recuerda Seguirnos en YouTube:{" "}
      <a href="https://www.youtube.com/@solucionesdigitales163" target="_blank">
        solucionesdigitales_16
      </a>
    </p>
  );
}
