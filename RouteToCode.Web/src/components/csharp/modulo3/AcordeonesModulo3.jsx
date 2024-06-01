import {
  Acordeon,
  EjemplosAcordeonesCsharp,
  YouTube,
} from "../../reutilizables/acordeones/Acordeones";

export function Funciones() {
  return (
    <Acordeon
      titulo={"Funciones"}
      idControl={"collapseEight"}
      expansion={true}
      show={"show"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Definición de Funciones</strong>
      </p>

      <p>
        Es un bloque de código que realiza una función especifica, la cual se
        puede reutilizar.
      </p>

      <p>
        <u>Ejemplo de una función</u>
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`

  static int Sumar(int a, int b)
    {
      int resultado = a + b;
    return resultado;
    }
      `}
      />

      <br />

      <p>
        <u>Ejemplo de su implementación</u>
      </p>

      <br />

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  static void Main(string[] args)
  {
    // Llamada a la función
    int num1 = 5;
    int num2 = 3;
    int resultadoSuma = Sumar(num1, num2);

    Console.WriteLine("La suma de {0} y {1} es: ", num1, num2);
    Console.WriteLine(resultadoSuma);
    }
`}
      />

      <br />

      <p className="Subtemas_Acordeones">
        <strong>2. Parámetros y Argumentos</strong>
      </p>

      <p>
        Parámetros: Son variables declaradas en la definición de una función que
        actúan como marcadores de posición para los valores que la función
        espera recibir cuando es llamada. Los parámetros permiten que una
        función sea más flexible y pueda trabajar con diferentes datos cada vez
        que es invocada.
      </p>

      <p>
        Argumentos: Son los valores reales que se pasan a una función cuando es
        llamada. Los argumentos proporcionan los datos concretos que la función
        utilizará para realizar su tarea. Cuando se llama a una función, los
        argumentos se asignan a los parámetros correspondientes según el orden
        en que se definen en la función.
      </p>

      <p>
        <u>
          Ejemplo de un Función con <strong>Argumentos</strong>
        </u>
      </p>

      <br />

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  static void Main(string[] args)
  {
    // Definición de una función que recibe dos parámetros: "a" y "b"
    static int Sumar(int a, int b)
    {
        return a + b;
    }
`}
      />

      <br />

      <p>
        <u>
          Ejemplo de la inserción de los <strong>Argumentos</strong>
        </u>
      </p>

      <br />

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  static void Main(string[] args)
    {
      // Llamada a la función "Sumar" con argumentos 3 y 5
      int resultado = Sumar(3, 5);
    
      Console.WriteLine("El resultado de la suma es: " + resultado);
    }
`}
      />

      <p className="Subtemas_Acordeones">
        <strong>3. Tipos de Funciones</strong>
      </p>

      <p>
        En programación, existen varios tipos de funciones, cada uno con un
        propósito y características específicas.
      </p>

      <p>
        <u>Funciones sin retorno (void):</u> Estas funciones realizan una tarea
        pero no devuelven ningún valor como resultado. Son útiles cuando
        simplemente se quiere ejecutar una acción, como mostrar un mensaje en
        pantalla o modificar algún estado, sin necesidad de retornar un valor.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`

  public class Program
    {
      
      public static void Saludar()
        {
          Console.WriteLine("¡Hola! Bienvenido al programa.");
        }
    
  public static void Main()
    {
      Saludar();
    }
}
    `}
      />

      <br />

      <p>
        <u>Funciones con retorno:</u> A diferencia de las funciones void, estas
        devuelven un valor como resultado después de realizar su tarea. Pueden
        ser de cualquier tipo de datos, como enteros, flotantes, cadenas, entre
        otros.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
  public class Program
    {
      
      public static int Sumar(int a, int b)
            {
                return a + b;
            }
            
      public static void Main()
            {
                int resultado = Sumar(3, 5);
                Console.WriteLine("La suma es: " + resultado);
            }

        }
        `}
      />

      <br />

      <p>
        <u>Funciones recursivas:</u> Son aquellas que se llaman a sí mismas
        dentro de su definición. Se utilizan para resolver problemas que pueden
        dividirse en casos más simples y similares al problema original. Por
        ejemplo, el cálculo de factorial o la búsqueda en árboles binarios.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  public class Program
    {
      public static int Factorial(int n)
        {
          if (n == 0)
          return 1;

          else
        return n * Factorial(n - 1);
    }
            
  public static void Main()
    {
      int resultado = Factorial(5);
      Console.WriteLine("El factorial de 5 es: " + resultado);
    }
  }
    `}
      />

      <br />

      <p>
        <u>Funciones de alto orden (Funciones de primera clase):</u> En
        lenguajes de programación que admiten funciones de primera clase, las
        funciones se pueden pasar como argumentos a otras funciones, devolver
        como valores de otras funciones y almacenarse en variables. Esto permite
        un estilo de programación más flexible y expresivo.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  public class Program
    {
      
      public static int Operacion(Func<int, int, int> funcion, int a, int b)
    {
      return funcion(a, b);
    }
    
  public static void Main()
    {
        Func<int, int, int> suma = (x, y) => x + y;
        int resultado = Operacion(suma, 3, 5);
        Console.WriteLine("La suma es: " + resultado);
    }
  }
    `}
      />

      <br />

      <p>
        <u>Funciones anónimas (lambda):</u> Son funciones que no tienen un
        nombre específico y pueden definirse en el lugar donde se necesitan. Son
        útiles para tareas simples que no requieren una declaración completa de
        función.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  public class Program
    {
      public static void Main()
        {
          Func<int, int, int> multiplicacion = (x, y) => x * y;
          int resultado = multiplicacion(3, 5);
          Console.WriteLine("El producto es: " + resultado);
            }
    }
    
  `}
      />

      <br />

      <p className="Subtemas_Acordeones">
        <strong>4. Tipos de Parámetros</strong>
      </p>

      <p>
        <u>Parámetros de Valor (Value Parameters)</u>
      </p>

      <p>
        Es como lo hacemos comúnmente, le pasamos un valor a un metodo o función
        y este crea una copia de ese pero no lo afecta.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  public class Program
    {
      public static void Incrementar(int numero)

        {
          numero++;
          Console.WriteLine("Dentro de la función: " + numero);
        }
            
  public static void Main()
    {
      int valor = 5;
      Incrementar(valor);
      Console.WriteLine("Fuera de la función: " + valor);
    }
        
  }
  `}
      />

      <br />

      <p>La salida seria la siguiente:</p>
      <ul>
        <li>Dentro de la función: 6</li>
        <li>Fuera de la función: 5</li>
      </ul>

      <p>
        <u>Parámetros de referencia</u>
      </p>

      <p>
        Este es el contrario poniéndole la palabra reservada ref cambia el valor
        original.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
    public class Program 
      {
    
    public static void Incrementar(ref int numero)
      {
        numero++;
        Console.WriteLine("Dentro de la función: " + numero);
      }
    
    public static void Main()
      {
        int valor = 5;
        Incrementar(ref valor);
        Console.WriteLine("Fuera de la función: " + valor);
      }
  }
  `}
      />

      <br />

      <p>La salida seria la siguiente:</p>
      <ul>
        <li>Dentro de la función: 6</li>
        <li>Fuera de la función: 6</li>
      </ul>

      <p>
        <u>Parámetros de salida</u>
      </p>

      <p>
        Es para sacar un valor a partir de un parámetro.Se indican con la
        palabra clave 'out' en la definición de la función y en la llamada.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  public class Program
    {
      public static void Calcular(int a, int b, out int suma, out int producto)
        {
          suma = a + b;
          producto = a * b;
        }
            
      public static void Main()
        {
          int x = 3, y = 5;
          Calcular(x, y, out int resultadoSuma, out int resultadoProducto);
          Console.WriteLine("La suma es: " + resultadoSuma);
          Console.WriteLine("El producto es: " + resultadoProducto);
        }
    }
  `}
      />

      <br />

      <p>La salida seria la siguiente:</p>
      <ul>
        <li>La suma es: 8</li>
        <li>El producto es: 15</li>
      </ul>

      <p>
        <u>Parámetros opcionales</u>
      </p>

      <p>
        Se pone el ultimo parámetro con un valor por defecto y si no lo queremos
        pasar, pues no lo pasamos.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
  public class Program
    {
      public static void ImprimirMensaje(string mensaje = "Hola, mundo")
        {
          Console.WriteLine(mensaje);
        }
            
      public static void Main()
        {
          ImprimirMensaje();
          ImprimirMensaje("¡Hola desde C#!");
        }
    
      }`}
      />

      <br />

      <p>La salida seria la siguiente:</p>
      <ul>
        <li>Hola, mundo</li>
        <li>¡Hola desde C#!</li>
      </ul>

      <YouTube />
    </Acordeon>
  );
}
