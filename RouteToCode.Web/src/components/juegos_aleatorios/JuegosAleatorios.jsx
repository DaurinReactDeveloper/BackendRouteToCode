import React, { useState } from "react";
import "../juegos_aleatorios/juegoaleatario.css";

function JuegoOrdenar({
  expresión1,
  expresión2,
  expresión3,
  respuestaCorrecta,
  respuestaIncorrecta,
}) {
  // Definimos el estado para almacenar la respuesta del jugador
  const [respuestaInt, setRespuestaInt] = useState("");
  const [respuestaNombre, setRespuestaNombre] = useState("");
  const [respuestaValor, setRespuestaValor] = useState("");

  // Función para manejar el cambio en cada input
  function manejarCambioInt(event) {
    setRespuestaInt(event.target.value);
  }

  function manejarCambioNombre(event) {
    setRespuestaNombre(event.target.value);
  }

  function manejarCambioValor(event) {
    setRespuestaValor(event.target.value);
  }

  function verificarRespuesta() {
    // Comprobamos si la respuesta del jugador es correcta
    if (
      respuestaInt === `${expresión1}` &&
      respuestaNombre === `${expresión2}` &&
      respuestaValor === `${expresión3}`
    ) {
      alert(`${respuestaCorrecta}`);
    } else {
      alert(`${respuestaIncorrecta}`);
    }
  }

  return (
    <>
      <div className="div_juegos">
        <input
          type="text"
          onChange={manejarCambioInt}
          value={respuestaInt}
          className="input_juegos"
        />
        <input
          type="text"
          onChange={manejarCambioNombre}
          value={respuestaNombre}
          className="input_juegos"
        />
        <span>=</span>
        <input
          type="text"
          onChange={manejarCambioValor}
          value={respuestaValor}
          className="input_juegos"
        />
        <span>;</span>
        <button onClick={verificarRespuesta} className="botón_juego">
          Verificar
        </button>
      </div>
    </>
  );
}

export default JuegoOrdenar;
