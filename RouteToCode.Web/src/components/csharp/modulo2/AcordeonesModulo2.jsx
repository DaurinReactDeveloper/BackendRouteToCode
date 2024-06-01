import JuegoOrdenar from "../../juegos_aleatorios/JuegosAleatorios";
import {
  Acordeon,
  EjemplosAcordeones,
  EjemplosAcordeonesCsharp,
  Tablas,
  YouTube,
} from "../../reutilizables/acordeones/Acordeones";

//Columnas Tablas
const Columnas = ["Tipos de Datos", "Descripción"];
const ColumnasÁmbitos = ["Ámbitos", "Descripción"];
const ColumnasBucles = ["Control", "Descripción"];
const ColumnasConceptos = ["Conceptos", "Descripción"];
const ColumnasAritméticos = ["Tipo Operador", "Descripción"];

export function Tipos_Datos() {
  return (
    <Acordeon
      titulo={"Tipos de Datos"}
      idControl={"collapseFour"}
      show={"show"}
      expansion={true}
    >
      {/* Parte 1 */}
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Qué es un Dato? </strong>
      </p>

      <p>Es la representación de la información de nuestro sistema.</p>

      {/* Datos Básicos */}
      <p className="Subtemas_Acordeones">
        <strong>2. Datos Básicos en C#</strong>
      </p>

      {/* Tabla para datos básico */}
      <Tablas alcanceNombre={"col"} columnas={Columnas}>
        <tr>
          <th scope="row">1</th>
          <td>Enteros (int)</td>
          <td>Números enteros, como -5, 0, 10, etc.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Decimales (double) </td>
          <td>Números con decimales, como 3.14, -0.5, 100.0, etc.</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cadenas (string) </td>
          <td>Secuencias de caracteres, como "Hola mundo".</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Caracteres (char)</td>
          <td>Caracteres individuales, como 'a', 'b', '1', etc.</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Booleanos (bool)</td>
          <td>Valores booleanos verdadero (true) o falso (false).</td>
        </tr>
      </Tablas>

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"nombreVariable"}
        resultado={9}
      />

      <EjemplosAcordeones
        tipoVariable={"bool"}
        nombreVariable={"nombreVariable"}
        resultado={"true"}
      />

      <EjemplosAcordeones
        tipoVariable={"string"}
        nombreVariable={"nombreVariable"}
        resultado={"Hola Mundo"}
      />

      {/*Datos compuestos*/}
      <p className="Subtemas_Acordeones">
        <strong>3. Datos Compuestos en C#</strong>
      </p>

      <Tablas alcanceNombre={"col"} columnas={Columnas}>
        <tr>
          <th scope="row">1</th>
          <td>Arrays </td>
          <td>Colecciones de elementos del mismo tipo, con un tamaño fijo.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Listas </td>
          <td>
            Colecciones de elementos dinámicos, cuyo tamaño puede cambiar
            dinámicamente.
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Clases (classes) </td>
          <td>
            Tipos de datos compuestos que pueden contener variables y métodos.
          </td>
        </tr>
      </Tablas>

      <EjemplosAcordeones
        tipoVariable={"int[]"}
        nombreVariable={"nombreArray"}
        resultado="new int[tamañoArray]"
      />

      {/*Constantes */}
      <p className="Subtemas_Acordeones">
        <strong>4. Constante en C#</strong>
      </p>
      <p>
        Es una variable inmutable(que su valor no cambia). Puede ser cualquier
        tipo de datos.
      </p>
      {/* Ejemplo  */}
      <EjemplosAcordeones
        tipoVariable={"const"}
        nombreVariable={"nombreConstate"}
        resultado={9}
      />

      {/* Parte Final Video */}
      <p>
        <strong>Ademas de hacer todos estos ejemplos en C# - Visita:</strong>
        <a
          href="https://www.youtube.com/watch?v=P3wMb5Of2fs&t=4s"
          target="_blank"
        >
          Tipos de Datos(Recomendado)
        </a>
      </p>
    </Acordeon>
  );
}

export function Variables() {
  return (
    <Acordeon
      titulo={"Variables"}
      idControl={"collapseFive"}
      expansion={false}
      collapsed={"collapsed"}
    >
      {/* Parte 1 */}
      <p className="Subtemas_Acordeones">
        <strong>1. Declaración de Variables </strong>
      </p>

      <p>
        Como pudieron ver en los ejemplos de los tipos de datos, la manera de
        declarar una variable es la siguiente:
      </p>

      <EjemplosAcordeones
        tipoVariable={"tipo_de_dato"}
        nombreVariable={"nombreVariable"}
        resultado={"valor"}
      ></EjemplosAcordeones>

      <p>Declaración de un String</p>
      <EjemplosAcordeones
        tipoVariable={"string"}
        nombreVariable={"Nombre"}
        resultado={"Daurin Gonzalez"}
      ></EjemplosAcordeones>

      <p>Después de este ejemplo, ¿Puedes declarar un Entero? </p>
      <p>Estas serian las Partes:</p>
      <ul>
        <li>Numero</li>
        <li>10</li>
        <li>int</li>
      </ul>

      <JuegoOrdenar
        expresión1={"int"}
        expresión2={"Numero"}
        expresión3={"10"}
        respuestaCorrecta={
          "¡Correcto! Has ordenado correctamente las partes de la declaración de la variable."
        }
        respuestaIncorrecta={"Incorrecto. Intenta nuevamente."}
      />

      {/* Parte 2 */}
      <p className="Subtemas_Acordeones">
        <strong>2. Ámbito de Variables </strong>
      </p>

      <Tablas alcanceNombre={"col"} columnas={ColumnasÁmbitos}>
        <tr>
          <th scope="row">1</th>
          <td>Local</td>
          <td>
            Las variables locales son declaradas dentro de un método,
            constructor, o bloque de código, y solo son accesibles dentro de ese
            bloque
          </td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Clase(Campo)</td>
          <td>
            Las variables de clase, también conocidas como campos, son
            declaradas a nivel de clase y son accesibles para todos los métodos
            y constructores de esa clase.
          </td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>Parámetros</td>
          <td>
            Los parámetros de un método son variables locales que reciben
            valores al llamar al método.
          </td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>Bloque</td>
          <td>
            También es posible declarar variables dentro de un bloque de código,
            como un bucle o una estructura condicional. Estas variables solo son
            válidas dentro de ese bloque.
          </td>
        </tr>
      </Tablas>

      <iframe
        className="videosacordeones"
        src="https://www.youtube.com/embed/ScIuUmeBRGM?si=V8iLBhvxqiYN8crc"
        title="Ámbito de las Variables"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Parte 3 */}
      <p className="Subtemas_Acordeones">
        <strong>2. Tipos de Referencia y Tipos de Valor</strong>
      </p>

      <p>
        <u>Tipo Referencia</u>
      </p>

      <p>
        Estos datos se guardan en memoria en una ubicación real. Los valores de
        tipo referencia esta: Las clases, interfaces, arreglos, string etc.
      </p>

      <EjemplosAcordeones
        tipoVariable={"int[]"}
        nombreVariable={"arrayEnteros"}
        resultado={"{ 1, 2, 3}"}
      />

      <EjemplosAcordeones
        tipoVariable={"int[]"}
        nombreVariable={"arrayEnteros2"}
        resultado={"arrayEnteros"}
        comentario={"//Se copia la referencia al array original"}
      />

      <EjemplosAcordeones
        tipoVariable={"arrayEnteros2[0]"}
        resultado={"5"}
        comentario={"//Modifica el valor en el array original"}
      />

      <p>
        <u>Tipo Valor</u>
      </p>

      <p>
        Son aquellos que almacenan sus datos directamente en la memoria asignada
        a la variable. Estos tipos incluyen tipos primitivos como int, double,
        char, bool, struct y enum. Cuando asignas un tipo de valor a una
        variable,{" "}
        <strong>la variable contiene una copia del valor real.</strong>
      </p>
    </Acordeon>
  );
}

export function Operadores() {
  return (
    <Acordeon
      titulo={"Operadores"}
      idControl={"collapseSix"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1- ¿Qué es un Operador?</strong>
      </p>

      <p>
        Un operador en C# es un símbolo o palabra reservada que se utiliza para
        realizar operaciones sobre variables y valores.
      </p>

      <p className="Subtemas_Acordeones">
        <strong>2-Operadores Aritméticos</strong>
      </p>

      <p>Son los que se utilizan para hacer operaciones matemáticas.</p>

      {/* Tabla de los Operadores - Aritméticos */}
      <Tablas alcanceNombre={"Aritmético"} columnas={ColumnasAritméticos}>
        <tr>
          <th scope="row">1</th>
          <td>+</td>
          <td>Suma dos valores o concatena cadenas de texto.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>-</td>
          <td>Resta dos valores.</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>*</td>
          <td>Multiplica dos valores.</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>/</td>
          <td>Divide el primer valor por el segundo.</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>%</td>
          <td>Devuelve el residuo de la división entre dos números.</td>
        </tr>
      </Tablas>

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"Suma"}
        resultado={"1 + 2"}
      />
      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"Multiplicar"}
        resultado={"10 * 2"}
      />
      {/* Tabla de los Operadores - Asignación */}
      <p className="Subtemas_Acordeones">
        <strong>3-Operadores de Asignación</strong>
      </p>

      <p>Son los que se utilizan para asignar valores a variables.</p>

      <Tablas alcanceNombre={"Asignación"} columnas={ColumnasAritméticos}>
        <tr>
          <th scope="row">1</th>
          <td>=</td>
          <td>Asigna el valor de la expresión a la variable.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>+=</td>
          <td>Suma el valor de la expresión a la variable.</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>-=</td>
          <td>Resta el valor de la expresión a la variable.</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>*=</td>
          <td>Multiplica el valor de la expresión por la variable.</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>/=</td>
          <td>Divide el valor de la variable por la expresión.</td>
        </tr>
      </Tablas>

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"Suma"}
        signo="+="
        resultado={"2"}
      />
      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"Resta"}
        signo="-="
        resultado={"5"}
      />

      <p className="Subtemas_Acordeones">
        <strong>3-Operadores de Comparación</strong>
      </p>

      <p>Son los que se utilizan para comparar valores.</p>

      {/* Tabla de los Operadores - Comparación */}
      <Tablas alcanceNombre={"Comparación"} columnas={ColumnasAritméticos}>
        <tr>
          <th scope="row">1</th>
          <td>==</td>
          <td>
            Comprueba si dos valores son <strong>iguales</strong>.
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>!=</td>
          <td>
            Comprueba si dos valores son <strong>diferentes</strong>.
          </td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>{">"}</td>
          <td>
            Comprueba si el valor de la izquierda es <strong>mayor</strong> que
            el de la derecha.
          </td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>{"<"}</td>
          <td>
            Comprueba si el valor de la izquierda es <strong>menor</strong> que
            el de la derecha.
          </td>
        </tr>

        <tr>
          <th scope="row">5</th>
          <td>{">="}</td>
          <td>
            Comprueba si el valor de la izquierda es{" "}
            <strong>mayor o igual</strong> que el de la derecha.
          </td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>{"<="}</td>
          <td>
            Comprueba si el valor de la izquierda es{" "}
            <strong>menor o igual</strong> que el de la derecha.
          </td>
        </tr>
      </Tablas>

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"a"}
        resultado={"2"}
      />

      <EjemplosAcordeones
        tipoVariable={"int"}
        nombreVariable={"b"}
        resultado={"2"}
      />

      <EjemplosAcordeones
        tipoVariable={"bool"}
        nombreVariable={"Comparación"}
        resultado={"(a == b) "}
        comentario={"//true o false "}
      />

      {/* Tabla de los Operadores - Lógicos */}
      <p className="Subtemas_Acordeones">
        <strong>3-Operadores Lógicos</strong>
      </p>
      <p>Son los que se utilizan para combinar expresiones lógicas</p>
      <Tablas alcanceNombre={"Lógicos"} columnas={ColumnasAritméticos}>
        <tr>
          <th scope="row">1</th>
          <td>&&</td>
          <td>Operador lógico AND (Y).</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>||</td>
          <td>Operador lógico OR (O).</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>!</td>
          <td>Operador lógico NOT (NO).</td>
        </tr>
      </Tablas>

      <div>
        <p>
          <strong>Video sobre los Operadores Lógicos:</strong>
          <a href="https://www.youtube.com/watch?v=SMMMCEXl82o" target="_blank">
            Operadores Lógicos(Recomendado)
          </a>
        </p>
      </div>

      <p className="Subtemas_Acordeones">
        <strong>3-Operadores de Incremento y Decremento</strong>
      </p>

      <p>
        Son los que utilizan para aumentar o disminuir el valor de una variable.
      </p>

      {/* Tabla de los Operadores - Incremento y Decremento */}
      <Tablas
        alcanceNombre={"Incremento - Decremento"}
        columnas={ColumnasAritméticos}
      >
        <tr>
          <th scope="row">1</th>
          <td>++</td>
          <td>Incrementa en uno el valor de la variable.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>--</td>
          <td>Decrementa en uno el valor de la variable.</td>
        </tr>
      </Tablas>

      <EjemplosAcordeones
        tipoVariable={"double"}
        nombreVariable={"Num"}
        resultado={"2.5"}
      />

      <EjemplosAcordeones
        resultado={"Num++"}
        signo=" "
        comentario={"//Num = 3.5"}
      />

      <p className="Subtemas_Acordeones">
        <strong>3-Operadores de Concatenación</strong>
      </p>

      <p>
        Se utiliza para unir cadenas de texto,el signo a utilizar es{" "}
        <strong>+</strong>
      </p>

      <p>
        Recuerda hacer ejemplos con cada uno de los operadores -
        <strong> Programar solo se aprende PROGRAMANDO</strong>
      </p>
    </Acordeon>
  );
}

export function EstructurasControl() {
  return (
    <Acordeon
      titulo={"Estructuras de Control"}
      idControl={"collapseSeven"}
      expansion={false}
      collapsed={"collapsed"}
    >
      {/* Parte 1 */}
      <p className="Subtemas_Acordeones">
        <strong>1. Sentencias Condicionales</strong>
      </p>
      <p>
        Las sentencias condicionales en C# permiten que el programa tome
        decisiones y ejecute diferentes bloques de código en función de ciertas
        condiciones. Las estructuras condicionales más comunes en C# son if,
        else if, else, y switch.
      </p>
      <p>
        <u>if y else</u>
      </p>
      <p>
        La sentencia if evalúa una condición booleana y ejecuta el bloque de
        código asociado si la condición es true. La sentencia else se puede
        utilizar para ejecutar un bloque de código alternativo si la condición
        del if es false.
      </p>
      <EjemplosAcordeonesCsharp
        csharpCode={`
  int numero = 10;
        
  if (numero > 5) {
      Console.WriteLine("El número es mayor que 5");
    }
  else {
      Console.WriteLine("El número es 5 o menor");
    }`}
      />
      <p>
        <u>else if</u>
      </p>
      <p>
        La sentencia else if permite evaluar múltiples condiciones secuenciales.
        Si la primera condición no es true, se evalúa la siguiente, y así
        sucesivamente.
      </p>
      <EjemplosAcordeonesCsharp
        csharpCode={`
  int numero = 10;
        
  if (numero > 10)
    {
      Console.WriteLine("El número es mayor que 10");
    }
  else if (numero == 10)
    {
      Console.WriteLine("El número es igual a 10");
    }
  else
    {
      Console.WriteLine("El número es menor que 10");
    }`}
      />
      <p>
        <u>switch</u>
      </p>
      <p>
        La sentencia switch es útil cuando se tiene una variable que puede tomar
        varios valores diferentes y se quiere ejecutar diferentes bloques de
        código en función de esos valores.
      </p>
      <EjemplosAcordeonesCsharp
        csharpCode={`
  int dia = 3;

  switch (dia) {
    case 1:
      Console.WriteLine("Lunes");
      break;
    case 2:
      Console.WriteLine("Martes");
      break;
    case 3:
      Console.WriteLine("Miércoles");
      break;
    case 4:
      Console.WriteLine("Jueves");
      break;
    case 5:
      Console.WriteLine("Viernes");
      break;
    case 6:
      Console.WriteLine("Sábado");
      break;
    case 7:
      Console.WriteLine("Domingo");
      break;
    default:
      Console.WriteLine("Día no válido");
      break;
    }`}
      />

      <br />

      <p>
        Si todavía tienes alguna duda sobre las estructuras de control, te
        invito que veas los siguiente videos:
      </p>

      <br />

      <iframe
        className="videosacordeones"
        src="https://www.youtube.com/embed/MUgJLLnrgc4?si=QodMJlcmUsvjcLQ4"
        title="if,else if y else"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <iframe
        className="videosacordeones"
        src="https://www.youtube.com/embed/n1jydrJMcWk?si=mRbzaR6Nvh6dcrsg"
        title="switch"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Parte 2 */}
      <p className="Subtemas_Acordeones">
        <strong>2. Bucles </strong>
      </p>

      <p>
        Los bucles permiten ejecutar repetidamente un bloque de código mientras
        se cumpla una condición. Los tipos de bucles más comunes en C# son for,
        foreach, while y do-while.
      </p>

      <p>
        <u>Bucle for</u>
      </p>

      <p>
        El bucle for es ideal cuando conoces de antemano el número de
        iteraciones que quieres realizar. Se compone de tres partes:
        inicializacion, condición y actualización.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={` 
  for (int i = 0; i < 10; i++) 
      {
        Console.WriteLine($"Iteración {i}");
      }`}
      />

      <br />

      <ul>
        <li>int i = 0: Inicializacion. Se ejecuta una sola vez al inicio.</li>
        <li>
          {"i < 10"}: Condición. El bucle continúa mientras esta condición sea
          verdadera.
        </li>
        <li>i++: Actualización. Se ejecuta al final de cada iteración.</li>
      </ul>

      <p>
        <u>Bucle foreach</u>
      </p>

      <p>
        El bucle foreach se usa para iterar sobre una colección (como un array o
        una lista) sin necesidad de gestionar manualmente el índice. Es
        especialmente útil cuando no necesitas modificar la colección.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
    string[] frutas = { "Manzana", "Banana", "Cereza" };

    foreach (string fruta in frutas) {

    Console.WriteLine(fruta);

    }`}
      />

      <p>
        <u>Bucle while</u>
      </p>

      <p>
        El bucle while ejecuta un bloque de código repetidamente mientras la
        condición especificada sea verdadera. Es útil cuando no sabes de
        antemano cuántas iteraciones necesitas.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
    
    int contador = 0;

    while (contador < 5) {
    Console.WriteLine($"Contador: {contador}");
    contador++;

    }`}
      />

      <p>
        <u>Bucle do while</u>
      </p>

      <p>
        El bucle do-while es similar al while, pero garantiza que el bloque de
        código se ejecute al menos una vez, ya que la condición se evalúa
        después de la primera iteración.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
    
    int contador = 0;

      do
      {
        Console.WriteLine($"Contador: {contador}");
        contador++;
      } while (contador < 5);`}
      />

      <br />

      <Tablas alcanceNombre={"col"} columnas={ColumnasBucles}>
        <tr>
          <th scope="row">1</th>
          <td>break</td>
          <td>Termina el bucle inmediatamente.</td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>continue</td>
          <td>Salta la iteración actual y pasa a la siguiente.</td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>return</td>
          <td>
            Sale del método actual, terminando el bucle (y cualquier código
            subsiguiente en el método).
          </td>
        </tr>
      </Tablas>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
    for (int i = 0; i < 10; i++)
      {
        if (i == 5) {
        break; // Sale del bucle cuando i es 5
      }
      
        if (i % 2 == 0) {
        continue; // Salta las iteraciones donde i es par
      }
      
      Console.WriteLine($"Iteración {i}");
    
    }`}
      />

      <p>
        <u>Notas adicionales</u>
      </p>

      <Tablas alcanceNombre={"col"} columnas={ColumnasConceptos}>
        <tr>
          <th scope="row">1</th>
          <td>Bucle infinito</td>
          <td>
            Un bucle sin una condición de terminación adecuada se convierte en
            un bucle infinito. Por ejemplo, while (true){"{...}"} crea un bucle
            infinito, que solo puede detenerse con break o return.
          </td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Optimización</td>
          <td>
            Siempre que sea posible, evita operaciones costosas dentro de las
            condiciones de bucles (for o while) para mejorar el rendimiento.
          </td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>Anidamiento</td>
          <td>
            Puedes anidar bucles, es decir, poner un bucle dentro de otro, para
            iterar sobre estructuras de datos más complejas, como matrices
            bidimensionales.
          </td>
        </tr>
      </Tablas>

      {/* Parte 3 */}
      <p className="Subtemas_Acordeones">
        <strong>3. Sentencias de Control Avanzadas</strong>
      </p>

      <p>
        Además de las sentencias de control básicas como if, switch, y los
        bucles (for, while, foreach, do-while), también existen sentencias de
        control más avanzadas que permiten manejar situaciones específicas con
        mayor flexibilidad y eficiencia.{" "}
      </p>

      <p>
        <u>try-catch-finally</u>
      </p>

      <p>
        Las sentencias try-catch-finally se utilizan para manejar excepciones y
        garantizar que se ejecute un bloque de código, incluso si se produce una
        excepción.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
    try
      {
          // Código que puede causar una excepción
          int[] numeros = { 1, 2, 3 };
           Console.WriteLine(numeros[5]);
      }
    catch (IndexOutOfRangeException e)
      {
          // Código para manejar la excepción
          Console.WriteLine("Se ha producido un error: " + e.Message);
      }
    finally
      {
          // Código que siempre se ejecuta
            Console.WriteLine("El bloque finally se ejecuta siempre.");
      }`}
      />

      <p>
        <u>using</u>
      </p>

      <p>
        La sentencia using se utiliza para asegurar que los recursos se liberen
        correctamente cuando ya no se necesiten. Es comúnmente usada con objetos
        que implementan la interfaz IDisposable.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
        using (StreamReader sr = new StreamReader("archivo.txt"))
        {
            string contenido = sr.ReadToEnd();
            Console.WriteLine(contenido);
        } // El StreamReader se cierra automáticamente aquí`}
      />
      <br />
      <YouTube />
    </Acordeon>
  );
}
