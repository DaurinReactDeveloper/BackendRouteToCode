import "../mainCsharp/mainModuloCsharp.css";

export function MainMódulosCsharp({ children, textoModulo, nombreModulo }) {
  return (
    <main className="main_modulo_1">
      {/* IMAGEN */}
      <Img_csharp />

      {/* Presentación de la Unidad */}
      <section className="container ">
        <article className="col-12">
          <div className="div_name_page">
            <h1 className="name_page_basic">{nombreModulo}</h1>
          </div>
        </article>

        <article className="col-12 col_principal_básico">
          <p>{textoModulo}</p>

          {children}
        </article>
      </section>
    </main>
  );
}

export function Img_csharp() {
  return (
    <>
      <section className="row">
        <img
          src="src/assets/img_frame_csharp.webp"
          alt="img_csharp"
          className="img-fluid img_módulos_csharp"
        />
      </section>
    </>
  );
}

export function Subtemas({ Tema, Texto, Accordion, Clase }) {
  const AccordionComponent = Accordion;

  return (
    <>
      <h5 className="h5_Subtemas">
        <strong>{Tema}</strong>
      </h5>

      <div className={Clase}>
        <p>{Texto}</p>
        <AccordionComponent />
      </div>
    </>
  );
}
