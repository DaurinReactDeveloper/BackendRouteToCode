import {
  Acordeon,
  EjemplosAcordeones,
  EjemplosAcordeonesCsharp,
  Tablas,
  YouTube,
} from "../../reutilizables/acordeones/Acordeones";

export function SentenciasExpresiones() {
  return (
    <Acordeon
      titulo={"Sentencias y Expresiones"}
      idControl={"collapseEighteen"}
      expansion={true}
      show={"show"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Que son las Sentencias?</strong>
      </p>

      <p>
        Las sentencias son las que realizan una sola acción, por ejemplo, la
        declaración de una variable, de un método, de un array, etc.
      </p>

      <p className="Subtemas_Acordeones">
        <strong>1. ¿Que son las Expresiones?</strong>
      </p>

      <p>
        Las expresiones son combinaciones de acciones por ejemplo la declaración
        de una variable y a la vez la suma con otra variable. Ejemplo:
      </p>

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"resultado"}
        resultado={"5 + 3"}
        comentario={"//Expresión aritmética (suma)"}
      />

      <EjemplosAcordeones
        tipoVariable={"string"}
        nombreVariable={"mensaje"}
        resultado={"Hola"}
        comentario={"//Expresión de concatenación de cadenas"}
      />
    </Acordeon>
  );
}

export function BoxingUnboxing() {
  return (
    <Acordeon
      titulo={"Boxing/Unboxing"}
      idControl={"collapseNineteen"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Boxing</strong>
      </p>

      <p>Conversión de Dato Tipo valor a referencia.</p>

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"numero"}
        resultado={10}
      />

      <EjemplosAcordeones
        tipoVariable={"object"}
        nombreVariable={"obj"}
        resultado={"numero"}
        comentario={"//Boxing: el valor entero se convierte en un objeto."}
      />

      <p className="Subtemas_Acordeones">
        <strong>1. Unboxing</strong>
      </p>

      <p>Es el proceso contrario de referencia a Dato.</p>

      <EjemplosAcordeones
        tipoVariable={"object"}
        nombreVariable={"obj"}
        resultado={"(int)obj"}
        comentario={
          "//Unboxing: el valor del objeto se convierte de nuevo en un entero."
        }
      />
    </Acordeon>
  );
}

export function Casting() {
  return (
    <Acordeon
      titulo={"Casting(Conversiones Implícitas e Explicitas)"}
      idControl={"collapseTwenty"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Implícitas</strong>
      </p>

      <p>Entre tipos de datos compatibles de diferentes alcances</p>

      <EjemplosAcordeones
        tipoVariable={"Sbyte"}
        nombreVariable={"a"}
        resultado={15}
      />

      <p className="Subtemas_Acordeones">
        <strong>2. Explicita</strong>
      </p>

      <p>De Forma Directa e Intencional</p>

      <EjemplosAcordeones
        tipoVariable={"Int"}
        nombreVariable={"a"}
        resultado={123}
      />

      <EjemplosAcordeones
        tipoVariable={"sbyte"}
        nombreVariable={"x"}
        resultado={"(sbyte) a"}
      />

      <EjemplosAcordeones
        tipoVariable={"string"}
        nombreVariable={"num"}
        resultado={"678"}
      />

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"miNumero"}
        resultado={"int.parse(num)"}
      />
    </Acordeon>
  );
}

export function Assemblies() {
  return (
    <Acordeon
      titulo={"Assemblies(Ensamblajes): exe y dll"}
      idControl={"collapseTwenty-one"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Definición de Ensamblajes</strong>
      </p>

      <p>Los ensamblajes son archivos con metadatos que pueden ser:</p>

      <p>
        <u>Exe:</u> Es un Ejecutable de una aplicación x.
      </p>

      <p>
        <u>DLL(Dynamic Link Library):</u> Es una Librería que nos permite tener
        diversidad de código, un Ejemplo de esto seria una Biblioteca de Clases,
        nos permite tener varias clases y reutilizarlas, en otros proyectos,
        solo tenemos que agregarla a la referencia de tal proyecto.
      </p>
    </Acordeon>
  );
}

export function Using() {
  return (
    <Acordeon
      titulo={"Using"}
      idControl={"collapseTwenty-two"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Que es el Using?</strong>
      </p>

      <p>Es lo que se usa para declarar espacio de Nombre.</p>

      <p>
        <u>Otra Utilidad</u>
      </p>

      <EjemplosAcordeones
        tipoVariable={"using"}
        nombreVariable={"System"}
        signo=""
      />

      <p>
        Se usa para asegurar que los recursos no administrados se liberen
        correctamente. Encierra un objeto que implementa la interfaz IDisposable
        y asegura que el método Dispose se llame cuando el objeto salga del
        ámbito. Esto es útil para manejar recursos como archivos, conexiones a
        bases de datos, etc. Por ejemplo:
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
      
  using (var file = new StreamReader("file.txt"))
    {
        // Operaciones con el archivo
    } // file.Dispose() se llama automáticamente aquí
      
  `}
      />

      <br />
    </Acordeon>
  );
}

export function Generics() {
  return (
    <Acordeon
      titulo={"Generics"}
      idControl={"collapseTwenty-three"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Definición de Generics</strong>
      </p>

      <p>
        Funcionalidad para crear código reusable.Puedes Crear clases genéricas,
        métodos y restricciones:
      </p>

      <p>
        <u>Clases Genéricas</u>
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
  public class Lista<T>
    {
        private T[] elementos;
        public Lista(int tamaño)
        {
            elementos = new T[tamaño];
        }
        public T ObtenerElemento(int indice)
        {
            return elementos[indice];
        }
    }
`}
      />

      <br />

      <p>
        <u>Restricciones</u>
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
  public class Ejemplo<T> where T : IComparable
    {
        // Código de la clase
    }
        
`}
      />

      <br />
    </Acordeon>
  );
}

export function Async() {
  return (
    <Acordeon
      titulo={"Async(Métodos en Segundo Plano)"}
      idControl={"collapseTwenty-Four"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Definición de Async</strong>
      </p>

      <p>
        Es una palabra reservada para hacer que un método se ejecute en 2do
        plano sin afectar el flujo principal del programa, cada Async lleva
        después task{"<Recibe lo que quieras>"} a la vez que espera varios
        puntos de espera (await).
      </p>

      <p>
        <u>Pasos de una solicitud Async Básica en C#</u>
      </p>

      <p>1. Crear el Método Asíncrono</p>

      <EjemplosAcordeones
        tipoVariable={"static async"}
        nombreVariable={"Task"}
        resultado={"GetDataDB() { }"}
        signo=""
      />

      <p>2.Crear una instancia de un cliente HTTP</p>

      <EjemplosAcordeones
        tipoVariable={"HttpClient"}
        nombreVariable={"cliente"}
        resultado={"new HttpClient()"}
      />

      <p>3. Crear la Url</p>

      <EjemplosAcordeones
        tipoVariable={"string"}
        nombreVariable={"url"}
        resultado={"https://jsonplaceholder.typicode.com/posts/1"}
      />

      <p>4. Crear la respuesta del Mensaje(HttpResponseMessage)</p>

      <EjemplosAcordeones
        tipoVariable={"HttpResponseMessage"}
        nombreVariable={"respuesta"}
        resultado={"await cliente.GetAsync(url)"}
        comentario={
          "//Para conseguir la Url es con el método del cliente GetAsync();"
        }
      />

      <p>5. Leer la Respuesta asíncrona</p>

      <EjemplosAcordeones
        tipoVariable={"string"}
        nombreVariable={"contenido"}
        resultado={"await respuesta.Content.ReadAsStringAsync()"}
        comentario={
          "//Esta conlleva el contenido(Content) y el método que lo lee ReadAsStringAsync();"
        }
      />

      <p>6. El Ultimo Paso seria Mostrarlo por consola</p>

      <EjemplosAcordeones
        resultado={"Console.WriteLine(contenido);"}
        signo=""
      />

      <p className="Subtemas_Acordeones">
        <strong>2. Código del ejemplo de manera completa</strong>
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;

      class Program
      {
          static async Task Main(string[] args)
          {
              await GetDataDB();
          }

          static async Task GetDataDB()
          {
              HttpClient cliente = new HttpClient();
              string url = "https://jsonplaceholder.typicode.com/posts/1";
              
              HttpResponseMessage respuesta = await cliente.GetAsync(url);

              string contenido = await respuesta.Content.ReadAsStringAsync();

              Console.WriteLine(contenido);
          }
      }
`}
      />

      <br />
      <YouTube />
    </Acordeon>
  );
}
