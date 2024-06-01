import {
  Acordeon,
  EjemplosAcordeonesCsharp,
  Tablas,
  YouTube,
} from "../../reutilizables/acordeones/Acordeones";

const DiferenciasAI = ["Características", "Clase Abstracta", "Interfaces"];

export function Encapsulamiento() {
  return (
    <Acordeon
      titulo={"Encapsulamiento"}
      idControl={"collapseEleven"}
      expansion={true}
      show={"show"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Qué es el Encapsulamiento?</strong>
      </p>

      <p>
        Es la técnica de ocultar los detalles internos de un objeto. Se puede
        hacer con los modificadores de acceso. Es simplemente poner los
        atributos privados y que la unica forma de acceder a ellos sea por sus
        métodos.
      </p>

      <p className="Subtemas_Acordeones">
        <strong>2. ¿Como Implementar el Encapsulamiento?</strong>
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
        
    public class Persona
      {
          // Variables privadas que representan los detalles internos de la clase
          private string nombre;
          private int edad;

          // Constructor para inicializar los datos de la persona
          public Persona(string nombre, int edad)
          {
              this.nombre = nombre;
              this.edad = edad;
          }

          // Método público para obtener el nombre de la persona
          public string ObtenerNombre()
          {
              return nombre;
          }

          // Método público para obtener la edad de la persona
          public int ObtenerEdad()
          {
              return edad;
          }
      }

      class Program
      {
          static void Main(string[] args)
          {
              // Crear un objeto de la clase Persona
              Persona persona1 = new Persona("Juan", 30);

              // Acceder a los datos de la persona a través de los métodos públicos
              Console.WriteLine("Nombre: " + persona1.ObtenerNombre());
              Console.WriteLine("Edad: " + persona1.ObtenerEdad());
          }
    }`}
      />
    </Acordeon>
  );
}

export function Herencia() {
  return (
    <Acordeon
      titulo={"Herencia"}
      idControl={"collapseTwelve"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Qué es la Herencia?</strong>
      </p>

      <p>
        Es un mecanismo que permite crear clases basadas en otras ya creadas a
        la que se llama clase base.
      </p>

      <p className="Subtemas_Acordeones">
        <strong>2. Ventajas de La Herencia</strong>
      </p>

      <ul>
        <li>
          Reutilización de código: Permite que las clases hereden atributos y
          métodos de otras clases, lo que evita la duplicación de código y
          facilita la reutilización en diferentes partes del programa.
        </li>
        <li>
          Organización y jerarquía: Facilita la organización de clases en una
          jerarquía, donde las clases derivadas heredan características comunes
          de una clase base. Esto ayuda a estructurar el código de manera lógica
          y comprensible.
        </li>
        <li>
          Abstracción y generalización: Promueve la abstracción al definir una
          clase base que captura los aspectos comunes de un conjunto de clases
          relacionadas. Esto facilita la comprensión del código al proporcionar
          una visión general de las relaciones entre las clases.
        </li>
        <li>
          Polimorfismo: Facilita la implementación del polimorfismo, lo que
          significa que un objeto puede comportarse de diferentes maneras según
          el contexto. Esto se logra mediante el uso de métodos heredados que
          pueden ser sobrescritos en las clases derivadas para adaptarse a sus
          necesidades específicas.
        </li>
      </ul>

      <p className="Subtemas_Acordeones">
        <strong>3. Como heredar de una clase</strong>
      </p>

      <p>
        <strong>1. Definir la clase base:</strong> Primero, define la clase base
        de la cual quieres heredar. Esta clase contendrá los atributos y métodos
        que deseas que las clases derivadas hereden.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`

  public class Persona
    {
        // Propiedades
        public string Nombre { get; set; }
        public int Edad { get; set; }

        // Constructor
        public Persona(string nombre, int edad)
        {
            Nombre = nombre;
            Edad = edad;
        }

        // Método
        public void Saludar()
        {
            Console.WriteLine($"Hola, soy {Nombre} y tengo {Edad} años.");
        }
    }
`}
      />

      <br />

      <p>
        <strong>2. Crear la clase derivada:</strong>
        Luego, crea una nueva clase que herede de la clase base utilizando la
        palabra clave :, seguida del nombre de la clase base.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`

  public class Estudiante : Persona
  {
    // Propiedades adicionales
    public string Curso { get; set; }
        
    // Constructor
    public Estudiante(string nombre, int edad, string curso) : base(nombre, edad)
      {
          Curso = curso;
      }
        
    // Método adicional
    public void Estudiar()
       {
        Console.WriteLine($"Soy {Nombre} y estoy estudiando en el curso de {Curso}.");
      }
  }
`}
      />

      <br />

      <p>
        <strong>3. Utilizar la clase derivada:</strong>
        Ahora puedes utilizar la clase derivada en tu programa. La clase
        derivada heredará todos los miembros (atributos y métodos) de la clase
        base y también puede tener sus propios miembros adicionales.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`

  class Program
    {
      static void Main(string[] args)
        {
          // Crear una instancia de la clase derivada
          Estudiante estudiante1 = new Estudiante("Juan", 20, "Programación");
        
          // Acceder a propiedades y métodos de la clase base y derivada
          estudiante1.Saludar(); 
          // Salida: Hola, soy Juan y tengo 20 años.
          estudiante1.Estudiar(); 
          // Salida: Soy Juan y estoy estudiando en el curso de Programación.
          }
        }
`}
      />
    </Acordeon>
  );
}

export function Polimorfismo() {
  return (
    <Acordeon
      titulo={"Polimorfismo"}
      idControl={"collapseThirteen"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Qué es el Polimorfismo?</strong>
      </p>

      <p>Es la técnica de reutilizar el mismo método de distintas maneras.</p>

      <p className="Subtemas_Acordeones">
        <strong>2. ¿Como se puede Sobrescribir un método?</strong>existen 2
        maneras de hacerlo, las cuales son las siguientes.
      </p>

      <p>
        <u>Virtual Keyword:</u> Poniéndole la palabra reservada{" "}
        <strong>virtual</strong> a la clase padre, por ejemplo:
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
  public class Animal 
  {
    
    //Método Virtual
          
    public virtual void Caminar() { } 
    
  }     
`}
      />

      <br />

      <p>
        <u>Ahora, ¿cómo lo aplico?</u> Se crea una clase que herede de animal y
        con la palabra reservada override se sobrescribe el método.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
  public class Perro : Animal 
    {
        public override void Caminar() {
        
            Console.WriteLine("EL PERRO CAMINA");

        }
    }
              
`}
      />

      <br />

      <p>
        <u>new:</u> Poniéndole la palabra reservada <strong>new</strong> en el
        método que tenga el mismo nombre de la clase padre.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`

    // Definición de la clase base 
    public class Animal
      {
        // Método de la clase base
        public void HacerSonido()
          {
              Console.WriteLine("El animal hace un sonido.");
          }
      }
        
    // Definición de la clase derivada que oculta el método de la clase base
    public class Perro : Animal
      {
      // Usar la palabra clave new para ocultar el método HacerSonido
        public new void HacerSonido()
          {
            Console.WriteLine("El perro ladra.");
          }
      }          
`}
      />
      <br />
    </Acordeon>
  );
}

export function Abstracción() {
  return (
    <Acordeon
      titulo={"Abstracción"}
      idControl={"collapseFourteen"}
      expansion={false}
      collapsed={"collapsed"}
    >
      <p className="Subtemas_Acordeones">
        <strong>1. ¿Qué es la Abstracción?</strong>
      </p>

      <p>
        Es una técnica o concepto que consiste en definir las características y
        acciones(métodos) esenciales de un grupo de objetos.
      </p>

      <p className="Subtemas_Acordeones">
        <strong>2. ¿Como logro hacer una abstracción?</strong>
      </p>

      <p>Se logra mediante las clases abstractas y con las interfaces.</p>

      <p>
        <u>Clases Abstractas</u>
      </p>

      <p>
        Son clases que <strong>no pueden ser instanciadas directamente</strong>.
        Sirven como plantillas o modelos para definir otras clases que sí pueden
        ser instanciadas. Estas clases pueden contener métodos abstractos, que
        deben ser implementados por las clases derivadas, y métodos concretos,
        que pueden ser usados o sobrescritos por las clases derivadas. En C#,
        una clase solo puede heredar de una única clase abstracta.
      </p>

      <p>
        Para crear una clase abstracta, simplemente creas una clase normal y le
        pones abstract antes del class.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
  // Definición de la clase abstracta
    
  public abstract class Animal
      {
          // Método abstracto que debe ser implementado por las clases derivadas
          public abstract void HacerSonido();
        
          // Método no abstracto que puede ser usado o 
          //sobrescrito por las clases derivadas
          public void Dormir()
          {
              Console.WriteLine("El animal está durmiendo.");
          }
      }     
`}
      />

      <br />

      <p>
        <u>Interfaces</u>
      </p>

      <p>
        Son contratos no definidos que deben cumplirse. Las clases pueden
        heredar de múltiples interfaces. Para crear una interface, simplemente
        creas una clase normal y le pones interface antes del class, o le das
        click izquierdo y añadir clase y eliges interface.
      </p>

      <p>
        <strong>Dato Importante:</strong> Cuando se hereda una interfaz, es
        obligatorio implementar todos sus métodos.
      </p>

      <EjemplosAcordeonesCsharp
        csharpCode={`
  // Definición de la interfaz
        public interface IVehiculo
        {
            // Declaración de métodos
            void Acelerar();
            void Frenar();
            void Girar(string direccion);
        }
        
        // Implementación de la interfaz en una clase
        public class Coche : IVehiculo
        {
            // Implementación de los métodos de la interfaz
            public void Acelerar()
            {
                Console.WriteLine("El coche está acelerando.");
            }
        
            public void Frenar()
            {
                Console.WriteLine("El coche está frenando.");
            }
        
            public void Girar(string direccion)
            {
                Console.WriteLine($"El coche está girando a la {direccion}.");
            }
        } 
`}
      />

      <br />

      <p className="Subtemas_Acordeones">
        <strong>
          3. Diferencias entre las Interfaces y las clases Abstractas
        </strong>
      </p>

      <div className="tabla_pc">
        <Tablas alcanceNombre={"Diferencias"} columnas={DiferenciasAI}>
          <tr>
            <th scope="row">1</th>
            <td>Implementación de Métodos</td>
            <td>Puede contener métodos con o sin implementación.</td>
            <td>No puede contener implementación de métodos.</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Herencia</td>
            <td>Puede heredar de una sola clase base.</td>
            <td>Puede heredar de múltiples interfaces.</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Constructores </td>
            <td>Puede tener constructores.</td>
            <td>No puede tener constructores.</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Campos </td>
            <td>Puede contener campos (variables de clase).</td>
            <td>No puede contener campos</td>
          </tr>
        </Tablas>
      </div>

      <div className="lista_celulares">
        <p>Interfaces</p>
        <ul>
          <li>
            Implementación de Métodos:No puede contener implementación de
            métodos.
          </li>
          <li>Herencia:Puede heredar de múltiples interfaces.</li>
          <li>Constructores:No puede tener constructores.</li>
          <li>Campos:No puede contener campos.</li>
        </ul>

        <p>Clases Abstractas</p>
        <ul>
          <li>
            Implementación de Métodos:Puede contener métodos con o sin
            implementación
          </li>
          <li>Herencia:Puede heredar de una sola clase base.</li>
          <li>Constructores:Puede tener constructores.</li>
          <li>Campos:Puede contener campos (variables de clase).</li>
        </ul>
      </div>

      <YouTube />
    </Acordeon>
  );
}
