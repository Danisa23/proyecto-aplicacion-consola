console.log("¡Bienvenido a mi aplicación de consola!");
const nombre = prompt("¿Cuál es tu nombre?");
alert("Hola " + nombre + ", bienvenido/a a la aplicación.");
let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Error: debes ingresar números válidos.");
    console.log("Los datos ingresados no son válidos.");
} else {
    console.log("Los números ingresados son válidos.");
}
console.log("Primer número:", numero1);
console.log("Segundo número:", numero2);
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {

    if (b === 0) {
        return "No se puede dividir por cero";
    }

    return a / b;
}
console.log("Suma:", sumar(numero1, numero2));
console.log("Resta:", restar(numero1, numero2));
console.log("Multiplicación:", multiplicar(numero1, numero2));
console.log("División:", dividir(numero1, numero2));
const opcion = prompt(
    "Selecciona una operación:\n" +
    "1. Sumar\n" +
    "2. Restar\n" +
    "3. Multiplicar\n" +
    "4. Dividir"
);
switch (opcion) {

    case "1":
        console.log("Resultado:", sumar(numero1, numero2));
        break;

    case "2":
        console.log("Resultado:", restar(numero1, numero2));
        break;

    case "3":
        console.log("Resultado:", multiplicar(numero1, numero2));
        break;

    case "4":
        console.log("Resultado:", dividir(numero1, numero2));
        break;

    default:
        console.log("Opción no válida.");
}
const operaciones = [
    "Suma",
    "Resta",
    "Multiplicación",
    "División"
];

console.log("Operaciones disponibles:");

for (let i = 0; i < operaciones.length; i++) {
    console.log((i + 1) + ". " + operaciones[i]);
}
let contador = 1;

while (contador <= 3) {
    console.log("Ejecutando ciclo:", contador);
    contador++;
}
const usuario = {
    nombre: nombre,
    edad: 25,
    curso: "JavaScript",

    presentarse: function() {
        console.log(
            "Hola, soy " + this.nombre +
            " y estoy aprendiendo " + this.curso
        );
    }
};
usuario.presentarse();
const estudiantes = [
    {
        nombre: "Ana",
        nota: 6.5
    },
    {
        nombre: "Pedro",
        nota: 5.8
    },
    {
        nombre: "María",
        nota: 6.9
    }
];
console.log("Lista de estudiantes:");

estudiantes.forEach(function(estudiante) {
    console.log(
        estudiante.nombre + 
        " - Nota: " + 
        estudiante.nota
    );
});
const nombres = estudiantes.map(function(estudiante) {
    return estudiante.nombre;
});

console.log("Nombres de los estudiantes:");
console.log(nombres);
function estudiantesAprobados(lista) {
    return lista.filter(function(estudiante) {
        return estudiante.nota >= 4.0;
    });
}
const aprobados = estudiantesAprobados(estudiantes);

console.log("Estudiantes aprobados:");
console.log(aprobados);