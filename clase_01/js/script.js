// 🟠 Declaración de variable
let nombre;

// Asignación de valor a la variable. let permite su reasignación
nombre = "Diana";
nombre = "Juan";

// 🟠 Declaración y asígnación de variable con const. No permite reasignación
const DNI = 43211223;

// 🟠 Tipos de datos
// string: "esto es un string", "6", "!", "", " ", "false", "true"
// number: 12, 0, -100, 3.14, NaN (Not a Number)
// boolean: true, false -> lo veremos en profundidad la clase 2
let esVerdadero = true;
esVerdadero = false;

// 🟠 ### Comunicación entrada/salida ### 🟠
// alert -> salida
// alert("Hola mundo!");

// 🟠 prompt: ingreso de datos por teclado -> entrada
// SIEMPRE devuelve como tipo de dato un string
// let otroNombre = prompt("Ingresa tu nombre");

// 🟠 console.log -> salida para imprimir datos

// 🟠 ### Convenciones de escritura ### 🟠
// camelCase estaEsMiVariable -> esta es la que se usa en JS para nombrar variables
// PascalCase
// snake_case -> se usa por ejemplo en Python
// kebab-case -> para class y id en CSS
// MI_VARIABLE -> SCREAMING_SNAKE_CASE

// 🟠 ### Operaciones con string ### 🟠
// Concatenación de strings: siempre que le sume un valor a un string, va a dar como resultado otro string
// alert("Hola, mi nombre es " + nombre)

// 🟠 ### Operaciones con tipo de dato number ### 🟠
// Tener en cuenta que prompt siempre devuelve string como dato, por lo que hay que tener cuidado
// de convertir de string a number en caso de querer realizar operaciones numéricas
let numero1 = parseInt(prompt("Ingresa un número"));
let numero2 = parseInt(prompt("Ingresa otro número"));

let resultado = numero1 + numero2;
console.log(
  "El resultado de la suma entre " +
    numero1 +
    " y " +
    numero2 +
    " es " +
    resultado,
);

// 🟠 parseInt, parseFloat, Number -> convertir de string a number
// parseInt("3.14") -> Da como resultado 3. Siempre convierte el dato numérico a entero
// parseFloat("3.14") -> Da como resultado 3.14. Conserva decimales en la conversión.
// Number("3.14") -> Da como resultado 3.14. También conserva decimales.

// operador typeof para saber qué tipo de dato es tal valor
typeof numero1;
