import {
  Acordeon,
  EjemplosAcordeones,
  Tablas,
  YouTube,
} from "../../reutilizables/acordeones/Acordeones";

const MétodosArraysLista = ["Métodos", "Descripción"];

export function Arrays() {
  return (
    <Acordeon
      titulo={"Arrays"}
      idControl={"collapseNine"}
      expansion={true}
      show={"show"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Qué es un Array?</strong>
      </p>

      <p>
        Un array es una estructura de datos que permite almacenar múltiples
        valores del mismo tipo en una sola variable. Los valores se organizan en
        una secuencia indexada, donde cada valor se puede acceder mediante su
        índice numérico, que empieza en 0.
      </p>

      <p>
        <u>Declaraciones de un Array</u>
      </p>

      <p>Declaración de un array de enteros con tamaño fijo.</p>

      <EjemplosAcordeones
        tipoVariable={"int[]"}
        nombreVariable={"números"}
        resultado={"new int[5] //el numero 5 es el tamaño del Array"}
      />

      <p>Declaración e inicializacion de un array de números.</p>

      <EjemplosAcordeones
        tipoVariable={"int[]"}
        nombreVariable={"números"}
        resultado={"new int[]{1,2,3,4,5}"}
      />

      <p>Otra forma de declarar e inicializar un array de enteros.</p>

      <EjemplosAcordeones
        tipoVariable={"int[]"}
        nombreVariable={"edades"}
        resultado={"{25,26,27}"}
      />

      <p>
        <u>¿Como puedo ver lo que contiene un array?</u> Utilizando{" "}
        <a href="">bucles.</a>
      </p>

      <div>
        <p>
          <u>Características de los Arrays</u>
        </p>

        <ul>
          <li>
            No Son Dinámicos: Esto significa que una vez que se crea un array,
            su tamaño no puede cambiar dinámicamente.
          </li>
          <li>
            Tienen un Tamaño Fijo: Cuando se declara un array en C#, se
            especifica su tamaño en el momento de la declaración
          </li>
          <li>
            Elementos de tipo homogéneo: Todos los elementos de un array deben
            ser del mismo tipo de datos. Por ejemplo, un array de enteros solo
            puede contener enteros, no se pueden mezclar diferentes tipos de
            datos en un mismo array.
          </li>
        </ul>
      </div>
      <div>
        <p>
          <u>Métodos de los Arrays</u>
        </p>
      </div>

      <Tablas
        alcanceNombre={"Métodos de los Arrays"}
        columnas={MétodosArraysLista}
      >
        <tr>
          <th scope="row">1</th>
          <td>length</td>
          <td>Tamaño del Array</td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>indexOf</td>
          <td>Devuelve la posición de un elemento</td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>Sort</td>
          <td>Ordena Los elementos en orden Ascendentes</td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>Reverse</td>
          <td>Invierte el Arrays</td>
        </tr>
      </Tablas>

      <p>
        Los ejemplos a continuación los haremos con el Array:{" "}
        <strong>edades</strong>. Es el 3er ejemplo de este tema.{" "}
      </p>

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"edadesLength"}
        resultado={"edades.length"}
        comentario={"//esto devolverá el numero 3"}
      />

      <EjemplosAcordeones
        signo=""
        resultado={"Array.indexOf(edades,26)"}
        comentario={
          "//esto devolverá la posición del elemento 26, la cual es: 1"
        }
      />

      <p>
        <strong>
          ¿Por qué devolvió la posición 1 y no la posición 2, ya que el 25 esta
          primero?
        </strong>{" "}
        Porque en los Arrays la primera posición es el 0. En la{" "}
        <strong>posición 0</strong> esta el 25, en la{" "}
        <strong>posición 1</strong> esta el 26 y en la{" "}
        <strong>posición 3</strong> esta el 27.
      </p>

      <EjemplosAcordeones signo="" resultado={"Array.Sort(edades)"} />
      <EjemplosAcordeones signo="" resultado={"Array.Reverse(edades)"} />
    </Acordeon>
  );
}

export function Colecciones() {
  return (
    <Acordeon
      titulo={"Colecciones"}
      idControl={"collapseTen "}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Que son las Colecciones?</strong>
      </p>

      <p>
        Estructuras de datos que nos permiten almacenar y manipular conjuntos de
        elementos.
      </p>

      <p className="Subtemas_Acordeones">
        <strong>2. Listas</strong>
      </p>

      <p>Es una Colección de elementos dinámicos al igual que su tamaño.</p>

      <p>
        <u>Declaración de una Lista</u>
      </p>

      <EjemplosAcordeones
        tipoVariable={"List<string>"}
        nombreVariable={"CadenaVacia"}
        resultado={"new List<string>()"}
        comentario={"//En este caso cadena Vacia."}
      />
      <EjemplosAcordeones
        tipoVariable={"List<int>"}
        nombreVariable={"ListaEntero"}
        resultado={"new List<int>()"}
        comentario={"//En este caso Lista de Entero"}
      />
      <EjemplosAcordeones
        tipoVariable={"List<ExampleClasses> "}
        nombreVariable={"ObjetoPersonalizado"}
        resultado={"new List<ExampleClasses>()"}
        comentario={"//En este caso Lista de un Objeto"}
      />

      <p>
        <u>Métodos de una Lista</u>
      </p>

      <Tablas
        alcanceNombre={"Métodos de las Listas"}
        columnas={MétodosArraysLista}
      >
        <tr>
          <th scope="row">1</th>
          <td>Add</td>
          <td>Añade un Elemento a la Lista.</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Remove</td>
          <td>Elimina un Elemento de la Lista.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>RemoveAt</td>
          <td>Eliminar por índice.</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Contains</td>
          <td>Buscar en la Lista tal cosa.</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Count</td>
          <td>devuelve el número total de elementos.</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Clear</td>
          <td>Vacía la Lista.</td>
        </tr>
      </Tablas>

      <EjemplosAcordeones
        tipoVariable={""}
        nombreVariable={""}
        resultado={"CadenaVacía.Add(“Daurin”)"}
        signo={""}
      />

      <EjemplosAcordeones
        tipoVariable={""}
        nombreVariable={""}
        resultado={"CadenaVacía.Remove(“Daurin”)"}
        signo={""}
      />

      <EjemplosAcordeones
        tipoVariable={""}
        nombreVariable={""}
        resultado={"CadenaLlena.Clear()"}
        signo={""}
      />

      <EjemplosAcordeones
        tipoVariable={""}
        nombreVariable={""}
        resultado={`CadenaVacía.RemoveAt(1))`}
        signo={""}
      />

      <EjemplosAcordeones
        tipoVariable={""}
        nombreVariable={""}
        resultado={"CadenaLlena.Count()"}
        signo={""}
      />

      <YouTube />
    </Acordeon>
  );
}
