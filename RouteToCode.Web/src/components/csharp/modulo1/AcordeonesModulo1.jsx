import {
  Acordeon,
  EjemplosAcordeonesCsharp,
  Tablas,
  YouTube,
} from "../../reutilizables/acordeones/Acordeones";

//Columnas Tablas
const Columnas = ["Características", "Descripción"];

export function IntroducciónProgramación() {
  return (
    <Acordeon
      titulo={"Introducción a la programación"}
      idControl={"collapseOne"}
      show={"show"}
      expansion={false}
    >
      {/* Parte 1 */}
      <p className="Subtemas_Acordeones">
        <strong>1. Definición de Programación </strong>
      </p>
      <article className="row row_acordeón_introducción">
        <div className="col-sm-12 col-lg-6">
          <img
            src="/introducciónprogramación.webp"
            alt="introducciónprogramación"
            className="img-fluid"
          />
        </div>

        <div className="col-sm-12 col-lg-6">
          <p>
            Es la manera de instruir a una computadora para que realice tareas
            específicas.
          </p>
        </div>
      </article>
      {/* Parte 2 */}
      <p className="Subtemas_Acordeones">
        <strong>2. Conceptos Básicos de Programación</strong>
      </p>
      <p>
        <u>Algoritmos</u>
      </p>
      <p>
        Son un conjunto de instrucciones paso a paso que describen como resolver
        un problema o llevar acabo una tarea. En otras palabras es el lenguaje
        que entiende el computador.
      </p>
      <p>
        <u>Lenguaje de Programación</u>
      </p>
      <p>
        Son los que permiten que le pasemos el algoritmo al computador. Son como
        el traductor que usamos para hablar con la computadora.
      </p>
      <p>
        <u>Variables</u>
      </p>
      <p>
        Las variables son espacios de almacenamiento utilizados para contener
        valores que pueden cambiar durante la ejecución de un programa.
      </p>
      <p>
        <u>Constantes</u>
      </p>
      <p>
        Las constantes son valores que no cambian durante la ejecución de un
        programa.
      </p>
      <p>
        <u>Video explicativo sobre los conceptos básicos de la Programación</u>
      </p>
      <iframe
        className="videosacordeones"
        src="https://www.youtube.com/embed/P3wMb5Of2fs?si=9vEnl5yUqb3Cfz8x"
        title="Conceptos Basico de Programación"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {/* Parte 3 */}
      <p className="Subtemas_Acordeones">
        <strong>3. Paradigmas de Programación </strong>
      </p>
      <iframe
        className="videosacordeones"
        src="https://www.youtube.com/embed/hcuvB58hwlE?si=RtxsbEBc__SJVqMp"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p>
        <strong>En esta primera parte</strong> esperamos que ya tengas pendiente
        los términos básicos, porque lo utilizaremos en el transcurso del{" "}
        <strong>roadmap</strong>
      </p>

      <YouTube />
    </Acordeon>
  );
}

export function IntroducciónCsharp() {
  return (
    <Acordeon
      idControl={"collapseTwo"}
      titulo={"Introducción a C#"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Historia de C#</strong>
      </p>

      <p>
        C# (pronunciado "C Sharp") es un lenguaje de programación diseñado por
        <strong> Microsoft en 1999</strong> como parte de su{" "}
        <strong>plataforma .NET</strong>. Fue creado por{" "}
        <strong>Anders Hejlsberg </strong> y su equipo, con el objetivo de
        combinar la potencia y la facilidad de uso de lenguajes como C++ y Java.
        Desde su lanzamiento, C# ha experimentado varias evoluciones y
        actualizaciones, siendo una de las herramientas principales en el{" "}
        <strong>
          desarrollo de aplicaciones empresariales, de escritorio, web y móviles
          en el ecosistema de Microsoft{" "}
        </strong>{" "}
        . Una de las características más destacadas de C# es su tipado fuerte y
        estático, que ayuda a detectar errores en tiempo de compilación y
        facilita el mantenimiento del código. También cuenta con un recolector
        de basura que gestiona automáticamente la memoria, lo que simplifica la
        administración de recursos. Con el tiempo,{" "}
        <strong>
          C# ha ido adoptando características modernas de programación,{" "}
        </strong>{" "}
        como la programación orientada a objetos, la programación funcional y la
        programación asíncrona, lo que lo convierte en un lenguaje versátil y
        adecuado para una amplia gama de aplicaciones y escenarios de
        desarrollo. Además, C# es ampliamente compatible con otras tecnologías
        de Microsoft,{" "}
        <strong>
          como el entorno de desarrollo integrado Visual Studio, el framework
          .NET y el ASP.NET
        </strong>{" "}
        para el desarrollo web.
      </p>

      <iframe
        className="videosacordeones"
        src="https://www.youtube.com/embed/UUQTjA0cRpQ?si=esGbPhvZJvPlKxfY"
        title="El origen de C#"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <p className="Subtemas_Acordeones">
        <strong>2. Características de C#</strong>
      </p>

      <Tablas alcanceNombre={"col"} columnas={Columnas}>
        <tr>
          <th scope="row">1</th>
          <td>Tipado estático y fuerte</td>
          <td>
            C# es un lenguaje de programación con tipado estático, lo que
            significa que los tipos de datos se verifican en tiempo de
            compilación y no pueden cambiar durante la ejecución. Esto ayuda a
            detectar errores antes de que el programa se ejecute.
          </td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Orientado a objetos</td>
          <td>
            C# es un lenguaje orientado a objetos, lo que significa que todo en
            C# es un objeto. Los objetos pueden contener datos en forma de
            campos y comportamiento en forma de métodos.
          </td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>Administración de memoria</td>
          <td>
            C# cuenta con un recolector de basura (garbage collector) que
            gestiona automáticamente la asignación y liberación de memoria,
            evitando así problemas comunes como fugas de memoria.
          </td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>Programación asincrónica </td>
          <td>
            C# ofrece soporte para la programación asincrónica, lo que permite
            escribir código que puede ejecutar tareas en segundo plano sin
            bloquear el hilo principal de ejecución.
          </td>
        </tr>

        <tr>
          <th scope="row">5</th>
          <td>Integración con .NET</td>
          <td>
            C# está estrechamente integrado con el framework .NET, lo que le
            permite acceder a una amplia gama de bibliotecas y herramientas para
            el desarrollo de aplicaciones.
          </td>
        </tr>

        <tr>
          <th scope="row">6</th>
          <td>Desarrollo multiplataforma </td>
          <td>
            Con el lanzamiento de .NET Core, C# se ha vuelto multiplataforma, lo
            que significa que se puede usar para desarrollar aplicaciones tanto
            en Windows, Linux como macOS.
          </td>
        </tr>
      </Tablas>

      <p className="Subtemas_Acordeones">
        <strong>3. Ecosistema .Net</strong>
      </p>

      <EcosistemaCsharp />

      <p className="Subtemas_Acordeones">
        <strong>4. Entorno de Desarrollo</strong>
      </p>

      <p>
        El entorno de desarrollo más utilizado para trabajar con C# es{" "}
        <strong>Visual Studio</strong>, desarrollado por Microsoft. Visual
        Studio es una suite de herramientas de desarrollo integrado (IDE) que
        ofrece un amplio conjunto de características para facilitar la creación,
        depuración y despliegue de aplicaciones en C# y otros lenguajes
        compatibles con .NET.
      </p>

      <p>
        <u>Características</u>
      </p>

      <Tablas alcanceNombre={"col"} columnas={Columnas}>
        <tr>
          <th scope="row">1</th>
          <td>Editor de código</td>
          <td>
            Visual Studio proporciona un editor de código potente y altamente
            personalizable que incluye resaltado de sintaxis, sugerencias de
            código, refactorización y soporte para múltiples lenguajes.
          </td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Depuración integrada</td>
          <td>
            Permite depurar aplicaciones paso a paso, inspeccionar variables y
            analizar el flujo de ejecución para identificar y corregir errores
            de manera eficiente.
          </td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>Diseñador de interfaz gráfica</td>
          <td>
            Incluye herramientas para diseñar interfaces de usuario mediante
            arrastrar y soltar controles, lo que facilita la creación de
            aplicaciones de escritorio y aplicaciones móviles.
          </td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>Despliegue y publicación</td>
          <td>
            Permite publicar aplicaciones en una variedad de plataformas,
            incluidas Azure, servidores web y tiendas de aplicaciones, con
            opciones de configuración flexibles y automatizadas.
          </td>
        </tr>
      </Tablas>
    </Acordeon>
  );
}

export function InstalaciónConfiguración() {
  return (
    <Acordeon
      idControl={"collapseThree"}
      titulo={"Instalación y Configuración"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Instalación de Visual Studio</strong>
      </p>

      <iframe
        className="videosacordeones"
        src="https://www.youtube.com/embed/bhxX6w-KMHo?si=J-3MrUxRGzn7Mtiq"
        title="Instalación y Configuración"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <p className="Subtemas_Acordeones">
        <strong>2. Escritura de Datos por Consola</strong>
      </p>

      <p>
        La escritura de datos por consola es una habilidad fundamental para
        interactuar con el usuario y mostrar información en una aplicación de
        consola. En C#, se utiliza principalmente la clase Console para manejar
        estas operaciones.{" "}
      </p>

      <p>
        <strong>Console.Write:</strong> Este método escribe texto en la consola
        sin agregar un salto de línea al final. Si se llama varias veces, los
        textos se mostrarán en la misma línea.
      </p>

      <p>Salida en la consola: Hola, mundo!</p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        Console.Write("Hola, ");
        Console.Write("mundo!");`}
      />

      <br />

      <p>
        <strong>Console.WriteLine:</strong> Este método escribe texto en la
        consola y agrega un salto de línea al final. Cada llamada a
        Console.WriteLine comenzará en una nueva línea.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        Console.WriteLine("Hola, mundo!");
        Console.WriteLine("Bienvenido a C#.");`}
      />

      <br />

      <p>Salida en la Consola</p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
      Hola, mundo!
      Bienvenido a C#.`}
      />

      <br />

      <p className="Subtemas_Acordeones">
        <strong>3. Lectura de Datos por Consola</strong>
      </p>

      <p>
        En esta parte se utiliza la misma clase Console. y contiene los
        siguientes métodos para la lectura de datos: Console.Read,
        Console.ReadKey, y Console.ReadLine.
      </p>

      <p>
        <strong>Uso de Console.ReadLine:</strong> El método más utilizado para
        leer entradas de usuario es Console.ReadLine. Este método lee toda la
        línea de texto ingresada por el usuario hasta que presiona la tecla
        Enter y devuelve el resultado como una cadena.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        Console.WriteLine("Ingrese su nombre:");
        string nombre = Console.ReadLine();
        Console.WriteLine($"Hola, {nombre}!");`}
      />

      <br />

      <p>
        Este código pide al usuario que ingrese su nombre y luego saluda al
        usuario con el nombre ingresado.
      </p>

      <p>
        <strong>Convertir la Entrada de Texto:</strong> Como Console.ReadLine
        devuelve siempre una cadena, es común necesitar convertir esta entrada a
        otros tipos de datos, como enteros o decimales. Se puede utilizar el
        método Convert o el método Parse de los tipos de datos correspondientes.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        Console.WriteLine("Ingrese su edad:");
        string entrada = Console.ReadLine();
        int edad = int.Parse(entrada);
        Console.WriteLine($"Tienes {edad} años.");`}
      />

      <br />

      <p>
        <strong>Uso de Console.Read:</strong> El método Console.Read lee el
        siguiente carácter de la entrada estándar y devuelve el valor entero
        correspondiente del carácter. No es muy utilizado para leer entradas
        completas de usuario.
      </p>

      <p>
        <strong>Uso de Console.ReadKey:</strong> El método Console.ReadKey
        captura la siguiente tecla presionada por el usuario, y puede devolver
        información adicional como si alguna tecla modificadora (Shift, Ctrl,
        Alt) fue presionada. Esto es útil para crear menús o detectar atajos de
        teclado.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        Console.WriteLine("Presiona una tecla para continuar...");
        ConsoleKeyInfo tecla = Console.ReadKey();
        Console.WriteLine($"Tecla presionada: {tecla.Key}");`}
      />
    </Acordeon>
  );
}

function EcosistemaCsharp() {
  return (
    <>
      <p>
        <u>.Net</u>
      </p>

      <p>
        Es una plataforma de desarrollo de Microsoft en la que se puede crear
        una variedad de aplicaciones, usando C# como lenguaje principal.
      </p>

      <p>
        <u>.NET Framework</u>
      </p>

      <p>
        Biblioteca de Clases y Servicios para construir aplicaciones solo para
        windows.
      </p>

      <p>
        <u>C#</u>
      </p>

      <p>
        Lenguaje de Programación estático, que lee e interpreta tu código y lo
        vuelve binario(Lenguaje del Computador). Fue diseñado para ser usado en
        .NET.
      </p>

      <p>
        <u>ASP.NET</u>
      </p>

      <p>Es la parte Web de .Net solo para windows.</p>

      <p>
        <u>ASP.NET Core</u>
      </p>

      <p>El update de Asp.Net, este es multiplataforma.</p>

      <p>
        <u>Entity Framework</u>
      </p>

      <p>
        Es un ORM(Mapeo Objeto Relación). Es lo que utiliza .NET para el mapeo
        de las bases de datos.
      </p>

      <p>
        <u>Xamarin</u>
      </p>

      <p>Es lo que usa .NET para el desarrollo móvil.</p>

      <p>
        <u>Blazor</u>
      </p>

      <p>
        Es lo que permite poner código c# en un html. Lo que permite construir
        aplicaciones web interactivas.
      </p>
    </>
  );
}
