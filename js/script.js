// alert('ALGO');
// Tipos de Datos en JS
// var = Define variables de tipo global
// let = Permite declarar variables con contexto local/contexto global. Con let no se deja declarar la misma variable
// const = No se puede redefinir. Los nombres van en mayuscula sostenida

// tipos de datos
// --Primitivos--
// Number
// undefined
// String
// Boolean

// Tipo estructurado
// Object

let x = 5.76;
// document.write("<i>Valor de x:</i>"+x);---Muestra en la pagina web
//console.log("Tipo de x: " + typeof x + " Contenido de X " + x);//typeof tipo de variable 

if (true) {
    let x = 1000;
    // console.log(x);
}

// console.log(x);

let y = 10;
y = 15;
// console.log(y);

for (let i = 1; i <= 5; i++) {
    // console.log(i);

}
// console.log(i);


const z = 'zoe';
// z="Ana";


//Arrays(Cada array puede ser de diferente tipo) van con corchetes
const arr = ['Juan', 33];
//arr=[34,false];No se puede reasignar 
arr[0] = -56;//Los indices no estan protegidos
arr.push(70); //Agregue al final o encima




let disponible = false;

let nombre = "eva lua";
let edad = 40;

// console.log(nombre +" Tiene "+edad+" años" );
// Temple String ``
// console.log(`${nombre} tiene ${edad} años`);

// Operadores
let p = 5 ** 2;

// console.log(Math.sqrt(p));

let n = null;//Null se trata como object
// console.log(typeof n);

// console.log(5 == "5");// Compara el contenido
// console.log(5 === "5");// Compara el tipo
// console.log(5 !== "5");// Compara el tipo
// console.log(5 != "5");// Compara el contenido
// console.log(undefined == null);// Compara el tipo
// console.log(undefined === null);// Compara el contenido

const arr2 = new Array(true, 4.5, "ninguno");
// console.log(arr2);

const datos = ["Joe", 45, false, [23, 49], 3.14];
datos[10] = ["rojo", "verde", "azul"];
datos.push("Empleado");//Empuja o Agrega hacia Arriba
datos.unshift("Centro");//Agrega debajo

// console.log(datos[3][1]);//para array bidimencionales
// console.log(datos);

// for(let i=0;i<datos.length;i++){
//     console.log(datos[i]);
// }


//En el ciclo (For...of..) la variable i toma el contenido de cada uno de los elementos de la coleccion  
// for(let i of datos){
//     console.log(i);
// }

//Toma el indice de las posiciones. No toma los elementos undefine
// for(let i in datos){
//     console.log(datos[i]);
// }

let t = datos.pop();//Quita del Final. Retorna el dato 
let i = datos.shift();//Quita del Inicio. Retorna el dato 

//for elegante 
// for(let i in datos){
//     console.log(`[${i}]=${datos[i]}`);
// }


//--Object--
//Objetos van con llaves
const obj = { "nom": "pepe", "edad": 18 };
obj.nom = "Juan"; //Los campos estan desprotegido
obj.genero = "masculino";//Se pueden crear campos

const obj2 = new Object();
obj2.campo = "Un dato";

//Cualquier Anotacion es Valida
// console.log(obj2.campo);
// console.log(obj2["campo"]);

//Forma Prety
const empleado = {
    nom: "Joe Hurtado Plata",
    edad: 45,
    fechaIngreso: "2023/11/25",
    salario: 670000,
    'zonas': ["Sur", "Occidente"],
    activo: true,
    direccion: { calle: 55, carrera: 40, numero: 121, barrio: "candelaria" },
    dependencia:"Ventas",
};

// console.log(empleado.nom);
// console.log(empleado.direccion.barrio);
// console.log(empleado["zonas"][0]);


//For each 
// for(let emp in empleado){
//     console.log(`[${emp}]=${empleado[emp]}`);
// }










