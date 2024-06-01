import { Acordeon } from "../../reutilizables/acordeones/Acordeones";

export function GitConceptos() {
  return (
    <Acordeon
      titulo={"GIT CONCEPTOS BÁSICOS"}
      idControl={"GitConceptos"}
      expansion={true}
      show={"show"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Conceptos Básicos</strong>
      </p>

      <p>
        <u>Repositorio:</u> Es una carpeta con ramas(niveles) donde vamos guardo
        nuestro progreso.
      </p>

      <p>
        <p>
          <u>Ramas:</u> Línea de Trabajo Diferente que se crea a partir de una
          principal.
        </p>
      </p>
    </Acordeon>
  );
}

export function GitComandos() {
  return (
    <Acordeon
      titulo={"GIT CONCEPTOS BÁSICOS"}
      idControl={"GitComandos"}
      expansion={false}
      collapsed={"collapsed"}
      show={""}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Comandos</strong>
      </p>

      <p>
        <strong>1. git config:</strong> Configuraciones a nivel de usuarios,
        repositorios y Sistema.
      </p>

      <p>
        A la hora de instalar git en nuestro ordenador tenemos que hacer las
        primeras 2 configuraciones a nivel de usuario.
      </p>

      <p>git config --global user.name “SuNombre”</p>

      <p>git config --global user.email “SuCorreo”</p>

      <p>
        <strong>2. git init:</strong> Este comando se utiliza para inicializar
        un repositorio.
      </p>

      <p>
        <strong>3. git clone:</strong> Clonar un repositorio.
      </p>

      <p>
        <strong>4. git status: </strong> Estado de nuestro repositorio, nos dice
        si tenemos cambios sin guardar.
      </p>

      <p>
        <strong>5. git add . :</strong> Se utiliza para agregar lo cambios al
        área de preparación para después hacer el commit.
      </p>

      <p>
        <strong>6. git commit:</strong> Se utiliza para guardar los cambios. git
        commit -m “Cambios Agregados”.
      </p>

      <p>
        <strong>7. git log:</strong> Para ver los commit que hemos hecho.
      </p>

      <p>
        <strong>8. git push:</strong> Subir los cambios locales al repositorio
        remoto.
      </p>

      <p>
        <strong>9. git fetch:</strong> Baja los cambios que están en el
        repositorio remoto al local.
      </p>

      <p>
        <strong>10. git branch:</strong> Listar todas las ramas que tenemos.
      </p>

      <p>
        <strong>11. git checkout [nombre_rama]:</strong> Cambia a la rama
        especificada.
      </p>

      <p>
        <strong>12. git remote:</strong> Lista todos los repositorios remotos
        que tenemos.
      </p>

      <p>
        <strong>13. git merge [nombre_rama]:</strong> Fusiona la rama
        especificada con la rama actual.
      </p>
    </Acordeon>
  );
}
