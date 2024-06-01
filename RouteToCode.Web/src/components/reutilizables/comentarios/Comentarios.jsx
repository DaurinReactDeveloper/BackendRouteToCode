import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdAddComment } from "react-icons/md";
import { urlComment } from "../../../endpoints/Endpoints";
import "./comentarios.css";

export default function Comentarios({ section }) {
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [administrador, setAdministrador] = useState(null);
  const [registrado, setRegistrado] = useState(null);
  const [contenido, setContenido] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  useEffect(() => {
    GetComentarios();
    Registrado();
  }, [section]);

  function Registrado() {
    const token = localStorage.getItem("token");
    setRegistrado(!!token);
  }

  async function GetComentarios() {
    try {
      const respuesta = await axios.get(
        `${urlComment}/GetBySection/${section}`
      );
      if (respuesta.data.success) {
        const comentariosConAsteriscos = respuesta.data.data.map((comment) => ({
          ...comment,
          userName: comment.userName.substring(0, 4) + "***",
        }));
        setComentarios(comentariosConAsteriscos);
      }
    } catch (error) {
      alert("Ha ocurrido un error con los comentarios");
    } finally {
      setLoading(false);
    }
  }

  function esAdministrador() {
    const token = localStorage.getItem("token");
    if (token) {
      const decodeToken = jwtDecode(token);
      setAdministrador(
        decodeToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ] === "admin"
      );
    }
  }

  async function eliminarComentario(commentId) {
    esAdministrador();
    if (administrador) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`${urlComment}/Remove`, {
          data: { commentId },
          headers: { Authorization: `Bearer ${token}` },
        });
        GetComentarios();
      } catch (error) {
        alert("HA OCURRIDO UN ERROR ELIMINANDO EL COMENTARIO");
      }
    }
  }

  async function addComentario() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token) {
      const decodeToken = jwtDecode(token);
      try {
        const respuesta = await axios.post(`${urlComment}/Save`, {
          content: contenido,
          userName: decodeToken.sub,
          userId: Number(userId),
          section,
        });

        if (respuesta) {
          setMensajeEnviado(true);
          GetComentarios();

          setTimeout(() => {
            window.location.reload();
          }, 10);
        }
      } catch (error) {
        alert("HA OCURRIDO UN ERROR AÑADIENDO EL COMENTARIO");
      }
    }
  }

  return (
    <section className="row row_comentarios">
      <hr className="hr_comentarios" />
      <h2 className="h2_comentarios">SECCIÓN DE COMENTARIOS</h2>

      {registrado ? (
        <div className="div_botón_agregar_comentario">
          <button
            type="button"
            className="botón_agregar_comentario"
            title="Añadir un Comentario"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <MdAddComment />
          </button>
        </div>
      ) : (
        <div className="div_botón_agregar_comentario">
          <button
            type="button"
            className="botón_agregar_comentario"
            title="REGÍSTRATE PARA AÑADIR UN COMENTARIO"
          >
            <MdAddComment />
          </button>
        </div>
      )}

      <ModalAddComentario
        setContenido={setContenido}
        addComentario={addComentario}
        mensajeEnviado={mensajeEnviado}
      />

      <article className="col_datos_comentarios">
        {loading ? (
          <p>Cargando comentarios...</p>
        ) : (
          comentarios.map((comment) => (
            <div className="row row_comentario_map" key={comment.commentId}>
              <div className="div_contenedor_img_data">
                <div className="div_img_comentario">
                  <img
                    src="src/assets/img_comentarios.webp"
                    className="img-fluid img_comentarios"
                    alt="Imagen de usuario"
                  />
                </div>
                <div className="div_data_comentarios">
                  <p className="p_nombre_usuario_comentario">
                    {comment.userName}
                  </p>
                  <p className="comentario">{comment.content}</p>
                  <div className="div_editar_eliminar_comentario">
                    <div className="md_delete_comentario">
                      {administrador && (
                        <button
                          type="button"
                          className="botón_delete_comentario"
                          onClick={() => eliminarComentario(comment.commentId)}
                        >
                          <MdDelete />
                        </button>
                      )}
                    </div>
                    {registrado && (
                      <div className="md_edit_comentario">
                        <button
                          type="button"
                          className="botón_editar_comentario"
                        >
                          <CiEdit />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </article>
    </section>
  );
}

function ModalAddComentario({ setContenido, addComentario, mensajeEnviado }) {
  function extraerContenido(e) {
    const texto = e.target.value;
    setContenido(texto);
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              AGREGAR COMENTARIO
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <label>
              <p>Comentario</p>

              {!mensajeEnviado ? (
                <textarea
                  placeholder="Añade tu Comentario Aquí"
                  required
                  onChange={extraerContenido}
                ></textarea>
              ) : (
                <p>COMENTARIO AGREGADO - DELE A SALIR</p>
              )}
            </label>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addComentario}
            >
              Confirmar Comentario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
