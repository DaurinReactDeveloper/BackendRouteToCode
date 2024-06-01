import {
  Acordeon,
  EjemplosAcordeones,
  EjemplosAcordeonesCsharp,
  Tablas,
  YouTube,
} from "../../reutilizables/acordeones/Acordeones";

const ColumnasModificadores = ["Tipos", "Descripción"];

export function Clases() {
  return (
    <Acordeon
      titulo={"Clases"}
      idControl={"collapseFifteen"}
      expansion={true}
      show={"show"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Definición de Clases</strong>
      </p>
      <p>
        Conjunto de características y comportamiento(Métodos) de un objeto en
        particular.
      </p>
      <p className="Subtemas_Acordeones">
        <strong>2. Atributos</strong>
      </p>
      <p>
        <u>Atributos:</u> Los <strong>atributos</strong> son las propiedades o
        características de nuestras clases. estos atributos tienen algo que se
        llama <strong>Modificadores de Acceso</strong>, los cuales son los
        siguientes:
      </p>

      <Tablas nombreColumna={"col"} columnas={ColumnasModificadores}>
        <tr>
          <th scope="row">1</th>
          <td>public</td>
          <td>Se puede llamar desde cualquier parte de la aplicación.</td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Private</td>
          <td> Solo se puede llamar o usar dentro de la clase.</td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>Internal</td>
          <td>
            Se puede utilizar de cualquier parte del ensamblado de la
            aplicación(Mejor se utiliza public).
          </td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>Protected</td>
          <td>
            Indica que un campo o variable esta protegido se puede usar desde la
            misma clase o de una clase que herede de esa clase.
          </td>
        </tr>
      </Tablas>

      <p>Ejemplo de un Atributo</p>
      <EjemplosAcordeones
        tipoVariable={"public string "}
        nombreVariable={"Marca"}
        resultado={"{get; set;}"}
      />
      <EjemplosAcordeones
        tipoVariable={"private string "}
        nombreVariable={"Modelo"}
        resultado={"{get; set;}"}
      />

      <p>
        ¿Por qué se le pone <strong>get</strong> y <strong>set</strong> al
        final? son Métodos de Acceso que hacen lo siguiente:
      </p>

      <ul>
        <li>
          <strong>Get:</strong> Permite obtener o leer el valor de una
          propiedad. Se utiliza para acceder al valor de un atributo desde fuera
          de la clase.
        </li>
        <li>
          <strong>Set:</strong> Permite establecer o modificar el valor de una
          propiedad. Se utiliza para asignar un nuevo valor a un atributo desde
          fuera de la clase.
        </li>
      </ul>
      <p className="Subtemas_Acordeones">
        <strong>3. Constructores</strong>
      </p>

      <p>
        Un constructor en C# es un método especial que se llama automáticamente
        cuando se crea una instancia (objeto) de una clase. Su propósito
        principal es inicializar los atributos del objeto, estableciendo valores
        iniciales o ejecutando cualquier configuración necesaria. Un constructor
        tiene el mismo nombre que la clase y no tiene un tipo de retorno, ni
        siquiera void.
      </p>

      <p>
        Por ejemplo, en una clase "Coche", el constructor podría establecer
        valores iniciales para atributos como "color" y "marca":
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
    public class Coche {
    
        public string Color { get; set; }
        public string Marca { get; set; }

        // Constructor
        public Coche(string color, string marca) {
            Color = color;
            Marca = marca;
        }

    }`}
      />

      <br />

      <p>
        Al crear un nuevo objeto de la clase "Coche", el constructor se encarga
        de asignar los valores iniciales.
      </p>

      <p>
        <u>Sobrecarga de Constructor</u>
      </p>

      <p>
        La sobrecarga de constructores es una técnica que permite definir
        múltiples versiones de un constructor en una clase. Cada versión puede
        aceptar diferentes conjuntos de parámetros. Esto proporciona
        flexibilidad al crear objetos de la clase, ya que los usuarios pueden
        elegir el constructor que mejor se adapte a sus necesidades. La
        sobrecarga de constructores permite inicializar objetos de diferentes
        maneras, utilizando diferentes combinaciones de valores para los
        parámetros.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`   
        
  // Primer constructor: acepta marca y modelo, establece color por defecto
    public Coche(string marca, string modelo) {
        Marca = marca;
        Modelo = modelo;
        Color = "Negro"; // Color por defecto
    }

  // Segundo constructor: acepta marca, modelo y color
    public Coche(string marca, string modelo, string color) {
        Marca = marca;
        Modelo = modelo;
        Color = color;
    }`}
      />

      <br />

      <p>
        Un dato importante es que todas las clases tienen un constructor por
        defecto, que seria un constructor sin parámetros. O sea, este:
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`   
  // Constructor por defecto
    public NombreDeLaClase() { } `}
      />

      <br />

      <p className="Subtemas_Acordeones">
        <strong>4. Métodos</strong>
      </p>

      <p>
        Los Métodos, los cuales son funciones pero para un mayor entendimiento
        cuando se habla de clases se le dice Métodos, son las{" "}
        <strong>Acciones</strong> de nuestras clases.
      </p>

      <p>
        <u>Diferencia de Métodos y Funciones</u>
      </p>

      <p>Métodos</p>
      <ul>
        <li>Contexto: Definidos dentro de una clase </li>
        <li>Asociación: Asociados a objetos de una clase</li>
        <li>Propósito: Manipulan datos de atributos y realizan acciones</li>
        <li>Invocación: A través de instancias de una clase</li>
      </ul>

      <p>Funciones</p>
      <ul>
        <li>Contexto: Pueden estar dentro o fuera de clases</li>
        <li>Asociados: No necesitan estar asociadas a objetos</li>
        <li>Propósito: Realizan tareas específicas, pueden devolver valores</li>
        <li>Invocación: Llamadas directamente si están fuera de una clase</li>
      </ul>

      <p>
        <u>Ejemplo de un Método</u>
      </p>

      <br />

      <EjemplosAcordeonesCsharp
        csharpCode={`

  public class Coche {
    
    public int Velocidad { get; set; }
        
      public void Acelerar(int incremento)
        {
          Velocidad += incremento;
        }
  }
    Coche miCoche = new Coche(); //esto es una instancia de la clase, 
    //en el siguiente tema hablaremos de el a profundidad.

    miCoche.Acelerar(10);  // Llama al método Acelerar en el objeto miCoche
        
   `}
      />

      <br />

      <p>
        <u>Dato Importante:</u> A los Métodos también se le ponen Modificadores
        de Acceso.
      </p>

      <p>
        <u>Sobrecarga de Métodos</u>
      </p>

      <p>
        La sobrecarga de métodos es cuando tienes{" "}
        <strong>
          múltiples métodos en una clase con el mismo nombre pero diferentes
          conjuntos de parámetros.
        </strong>{" "}
        Cada versión del método puede hacer cosas diferentes o manejar
        diferentes tipos de datos. Esto permite que los métodos tengan
        comportamientos específicos según los argumentos que se les pasen. Es
        una forma útil de ofrecer flexibilidad y facilidad de uso en tu código.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
  public class Calculadora {

  // Método Sumar: acepta dos enteros y devuelve la suma
  public int Sumar(int num1, int num2) {
      return num1 + num2;
  }

  // Sobrecarga del método Sumar: acepta tres enteros y devuelve la suma
  public int Sumar(int num1, int num2, int num3) {
      return num1 + num2 + num3;
  }

  // Sobrecarga del método Sumar: acepta dos números flotantes y devuelve la suma
  public float Sumar(float num1, float num2) {
      return num1 + num2;
  }

}`}
      />

      <br />

      <p className="Subtemas_Acordeones">
        <strong>
          5. Ejemplo de una Clase implementando TODO lo de la unidad
        </strong>
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`

    // Definición de la clase Coche
        
    public class Coche {

            // Atributos de la clase Coche
            public string Marca { get; set; }
            public string Modelo { get; set; }
            public string Color { get; set; }

            // Constructor de la clase Coche
            public Coche(string marca, string modelo, string color) {
                
                Marca = marca;
                Modelo = modelo;
                Color = color;

            }
            
            // Método Acelerar
            public void Acelerar() {
                
                Console.WriteLine($"{Marca} {Modelo} está acelerando.");
            
            }

            // Método Frenar
            public void Frenar() {
                    
                Console.WriteLine($"{Marca} {Modelo} está frenando.");
                
            }
        }`}
      />

      <br />
    </Acordeon>
  );
}

export function Objetos() {
  return (
    <Acordeon
      titulo={"Objetos"}
      idControl={"collapseSixteen"}
      collapsed={"collapsed"}
      expansion={false}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. Creación de Objetos</strong>
      </p>
      <p>
        <u>Concepto de Objeto</u>
      </p>
      <p>
        Un objeto es una instancia de una clase en programación orientada a
        objetos. Representa una entidad con características (atributos) y
        comportamientos (métodos). Por ejemplo, si tienes una clase Coche, un
        objeto de esa clase podría ser un coche específico con atributos como
        marca, modelo y color, y métodos como arrancar y frenar.
      </p>
      <p>
        <u>Creación de un Objeto</u>
      </p>
      <p>
        Para crear un objeto en C#, primero defines una clase y luego utilizas
        el operador new para instanciarla, ahora mostrare la instancia que
        hicimos en el{" "}
        <strong> ULTIMO EJEMPLO(ejemplo general de la unidad)</strong> del tema
        anterior.
      </p>
      <EjemplosAcordeones
        tipoVariable={"Coche"}
        nombreVariable={"miCoche"}
        resultado={`new Coche("${"Toyota"}","${"Corola"}","${"Rojo"}")`}
      />

      <p></p>

      <p>
        ¿por qué se le pasa: Toyota, Corola y Rojo al objeto coche? Esto se debe
        al constructor de la clase, el constructor de la clase recibe esos
        parámetros para ponérselo a las propiedades de la clase coche.
      </p>

      <YouTube />
    </Acordeon>
  );
}
