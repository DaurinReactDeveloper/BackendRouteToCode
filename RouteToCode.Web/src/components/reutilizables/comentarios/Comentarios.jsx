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
  const [contenidoUpdate, setContenidoUpdate] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [mensajeEnviadoUpdate, setMensajeEnviadoUpdate] = useState(false);
  const [comentarioId, setComentarioId] = useState(null);

  useEffect(() => {
    GetComentarios();
    Registrado();
    esAdministrador();
  }, [section]);

  function Registrado() {
    const token = localStorage.getItem("token");
    setRegistrado(!!token);
  }

  function esAdministrador() {
    const token = localStorage.getItem("token");

    if (token) {
      const decodeToken = jwtDecode(token);

      if (
        decodeToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ] === "admin"
      )
        setAdministrador(true);
    }
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

  async function DeleteComentarios(commentId) {
    if (administrador) {
      try {
        const tokenDelete = localStorage.getItem("token");

        await axios.delete(`${urlComment}/Remove`, {
          data: { commentId },
          headers: { Authorization: `Bearer ${tokenDelete}` },
        });
        GetComentarios();
      } catch (error) {
        alert("HA OCURRIDO UN ERROR ELIMINANDO EL COMENTARIO");
      }
    }
  }

  async function AddComentario() {
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

  async function UpdateComentario() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token) {
      const decodeToken = jwtDecode(token);
      try {
        const respuesta = await axios.put(`${urlComment}/Update`, {
          commentId: comentarioId,
          content: contenidoUpdate,
          userName: decodeToken.sub,
          userId: Number(userId),
          section,
        });

        if (respuesta) {
          setMensajeEnviadoUpdate(true);
          GetComentarios();

          setTimeout(() => {
            window.location.reload();
          }, 10);
        }
      } catch (error) {
        alert("HA OCURRIDO UN ERROR ACTUALIZANDO EL COMENTARIO");
      }
    }
  }

  function ValidarUsuario(idComentario) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const userIdNumber = Number(userId);

    if (token) {
      if (userIdNumber === idComentario) {
        return true;
      } else {
        return false;
      }
    }
  }

  function AlmacenarComentarioId(idComentario) {
    setComentarioId(idComentario);
  }

  return (
    <section className="row row_comentarios">
      <hr className="hr_comentarios" />
      <h2 className="h2_comentarios">SECCIÓN DE COMENTARIOS</h2>

      <div className="div_botón_agregar_comentario div_invitación_comentario">
        <p className="p_comentario_comentarios">
          <strong>
            ¿Qué fue lo que más te gustó de esta sección? ¿Aprendiste algo
            nuevo?
          </strong>{" "}
          Nos encantaría conocer tu experiencia. Comparte con nosotros tus
          pensamientos y sugerencias sobre lo que te gustaría ver en esta
          sección en el futuro.{" "}
          <strong>
            {" "}
            ¡Tu opinión es muy valiosa para nosotros y nos ayuda a seguir
            mejorando!
          </strong>
        </p>
      </div>

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
        AddComentario={AddComentario}
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
                          onClick={() => DeleteComentarios(comment.commentId)}
                        >
                          <MdDelete />
                        </button>
                      )}
                    </div>
                    {ValidarUsuario(comment.commentId) && (
                      <div className="md_edit_comentario">
                        <button
                          type="button"
                          className="botón_editar_comentario"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModalUpdate"
                          onClick={() =>
                            AlmacenarComentarioId(comment.commentId)
                          }
                        >
                          <CiEdit />
                        </button>

                        <ModalUpdateComentario
                          UpdateComentario={UpdateComentario}
                          mensajeEnviadoUpdate={mensajeEnviadoUpdate}
                          setContenidoUpdate={setContenidoUpdate}
                        />
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

function ModalAddComentario({ setContenido, AddComentario, mensajeEnviado }) {
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
            <div>
              {!mensajeEnviado ? (
                <textarea
                  placeholder="Añade tu Comentario Aquí"
                  onChange={extraerContenido}
                  className="text_area_agregar"
                  required
                  maxLength={79}
                  minLength={10}
                />
              ) : (
                <p>COMENTARIO AGREGADO - ¿PUEDE OBSERVARLO?</p>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="botón_cerrar_modal"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="botón_agregar_modal"
              onClick={AddComentario}
            >
              Confirmar Comentario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalUpdateComentario({
  setContenidoUpdate,
  UpdateComentario,
  mensajeEnviadoUpdate,
}) {
  function extraerContenido(e) {
    const texto = e.target.value;
    setContenidoUpdate(texto);
  }

  return (
    <div
      className="modal fade"
      id="exampleModalUpdate"
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
            <div>
              {!mensajeEnviadoUpdate ? (
                <textarea
                  placeholder="Añade tu Comentario Aquí"
                  onChange={extraerContenido}
                  className="text_area_agregar"
                  required
                  maxLength={79}
                  minLength={10}
                />
              ) : (
                <p>COMENTARIO ACTUALIZADO </p>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="botón_cerrar_modal"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="botón_agregar_modal"
              onClick={UpdateComentario}
            >
              Confirmar Comentario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
