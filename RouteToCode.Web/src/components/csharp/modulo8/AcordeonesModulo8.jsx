import { Acordeon } from "../../reutilizables/acordeones/Acordeones";

export function Ejercicio1() {
  return (
    <Acordeon
      titulo={"Ejercicio 1: Gestión de Biblioteca"}
      idControl={"collapseTwenty-five"}
      expansion={true}
      show={"show"}
    >
      <p className="Subtemas_Acordeones">
        <strong>Ejercicio 1: Gestión de Biblioteca</strong>
      </p>

      <p>
        Imagina que estás desarrollando un programa para gestionar una
        biblioteca. Necesitas implementar la funcionalidad de añadir nuevos
        libros a la colección de la biblioteca. Para hacer esto, tendrás que
        utilizar los conceptos de C# que has aprendido hasta ahora.
      </p>

      <p>
        <strong>1. Define una clase llamada Libro</strong> que represente un
        libro en la biblioteca. Esta clase debería tener las siguientes
        características o atributos:
      </p>

      <ul>
        <li>Titulo (string): El título del libro.</li>
        <li>Autor (string): El autor del libro.</li>
        <li>AnoPublicacion (int): El año de publicación del libro.</li>
      </ul>

      <p>
        <strong>2. Define un método para la clase</strong> Libro llamado{" "}
        <strong>MostrarInformacion()</strong> que imprima por consola la
        información del libro, incluyendo título, autor y año de publicación.
      </p>

      <p>
        <strong>3. Crea un método AgregarLibro()</strong> en la clase principal
        del programa (puedes llamarla Program por simplicidad) que permita al
        usuario agregar un nuevo libro a la colección de la biblioteca. Este
        método debe utilizar los parámetros opcionales para permitir al usuario
        ingresar solo el título y el autor del libro si no desea proporcionar el
        año de publicación en ese momento.
      </p>

      <p>
        <strong>4. Utiliza el concepto de parámetros</strong> de salida para
        devolver el objeto Libro creado por el método{" "}
        <strong>AgregarLibro()</strong>, incluyendo un mensaje que indique si se
        agregó correctamente el libro o no.
      </p>

      <p>
        <strong>5. Implementa la lógica necesaria</strong> en el método
        principal <strong>(Main)</strong> para permitir al usuario interactuar
        con el programa. Por ejemplo, muestra un menú donde el usuario pueda
        elegir agregar un libro nuevo o salir del programa.
      </p>

      <p>
        <strong>6. Utiliza el concepto de clases</strong>, métodos,
        modificadores de acceso, propiedades, y los demás conceptos aprendidos
        para garantizar que tu programa sea claro, modular y fácil de entender.
      </p>
    </Acordeon>
  );
}

export function Ejercicio2() {
  return (
    <Acordeon
      titulo={"Ejercicio 2: Juego de Rol"}
      idControl={"collapseTwenty-six"}
      expansion={false}
      collapsed={"collapsed"}
      show={""}
    >
      <p className="Subtemas_Acordeones">
        <strong>Ejercicio 2: Juego de Rol</strong>
      </p>

      <p>
        Este ejercicio te permitirá practicar la creación de clases, el uso de
        métodos, la herencia, el Encapsulamiento y otros conceptos fundamentales
        de la programación orientada a objetos en C#. ¡Diviértete desarrollando
        tu juego de rol!
      </p>

      <p>
        <strong>1. Define una clase llamada Personaje</strong> que represente a
        un personaje en el juego. Este personaje debería tener las siguientes
        características o atributos:
      </p>

      <ul>
        <li>Nombre (string): el nombre del personaje.</li>
        <li>
          Clase (string): la clase o tipo de personaje (por ejemplo, guerrero,
          mago, explorador, etc.).
        </li>
        <li>Nivel (int): el nivel del personaje.</li>
        <li>PuntosVida (int): los puntos de vida del personaje.</li>
        <li>PuntosAtaque (int): los puntos de ataque del personaje.</li>
        <li>PuntosDefensa (int): los puntos de defensa del personaje.</li>
      </ul>

      <p>
        <strong>2. Define métodos en la clase Personaje</strong> para realizar
        acciones como atacar, defenderse, y mostrar información del personaje.
      </p>

      <p>
        <strong>3. Crea un método CrearPersonaje()</strong> en la clase
        principal del programa (puedes llamarla Program por simplicidad) que
        permita al jugador crear un nuevo personaje ingresando su nombre, clase
        y nivel. Este método debe devolver un objeto Personaje creado con los
        valores proporcionados.
      </p>

      <p>
        <strong> 4. Implementa un método RealizarAccion()</strong> en la clase
        Personaje que acepte un parámetro de acción (por ejemplo, atacar o
        defenderse) y realice la acción correspondiente. Por ejemplo, si el
        jugador elige atacar, este método podría calcular el daño infligido al
        enemigo basado en los puntos de ataque del personaje.
      </p>

      <p>
        <strong>5. Utiliza la herencia si es necesario</strong> para crear
        clases específicas de personajes con características únicas. Por
        ejemplo, podrías crear clases como Guerrero, Mago, etc., que hereden de
        la clase Personaje y tengan métodos o atributos específicos de cada
        clase.
      </p>

      <p>
        <strong>6. Implementa la lógica necesaria </strong> en el método
        principal (Main) para permitir al jugador interactuar con el juego. Por
        ejemplo, muestra un menú donde el jugador pueda crear un nuevo
        personaje, realizar acciones con el personaje, y salir del juego.
      </p>

      <p>
        <strong>7. Utiliza el concepto de Encapsulamiento</strong> para proteger
        los atributos de la clase Personaje y proporcionar métodos para acceder
        a ellos de manera segura.
      </p>
    </Acordeon>
  );
}
