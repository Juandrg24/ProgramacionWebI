// alert("Algo"
// );

//Funciones
// Funciones con declaracion
// function mayor(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     else {
//         return num2;
//     }

// }


// Cuando solo hay una instrucion se puede resumir asi la condicion
// function mayor(num1, num2) {

//operador ternario If inline

// (expr_relacional pregunta)? expr_si_verdadero:expr_si_falso;

// let res = (num1 > num2) ? num1 : num2;
//return res;

//se puede simplificar asi
// return (num1 > num2) ? num1 : num2;

// if (num1 > num2)return num1;
// else return num2;
// }


// Funciones como expresiones--funcion anonima
// let mayor = function (num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }


// Funciones Flecha arrow function
// sintaxis : ()=>{}  
//si el parametro es uno solo no se necesita poner parentesis. si tiene mas si 
// si las llaves solo tienen una condicon no se ponen llaves y es return

let mayor = (num1, num2) => (num1 > num2) ? num1 : num2;


const x = -23;
const y = -206;
const z = -50;

// console.log(`El mayor dato entre ${x}, ${y} y ${z} es ${mayor(x, mayor(y, z))}`);//Recusivo indirecto

const empleado = {
    nombre: "Joe Hurtado Plata", //String
    edad: 45,//number
    fechaIngreso: "2023/11/25",//String
    salario: 6700000,//number
    "zonas": ["Sur", "Occidente"],//object
    activo: true,//boolean
    direccion: { calle: 55, carrera: 40, numero: 121, barrio: "Candelaria" },//object
    dependencia: "Ventas",
    deduccion: function (porDed) {//tipo function
        return this.salario * (porDed / 100);
    }
};

let pd = 10;
// console.log(empleado.deduccion(pd));



const factura = {
    id: 1111,
    descripcion: 'Compra papelería oficina',
    cliente: { nombre: 'Oficina Desarrollo', correo: 'desarrollo@correo.org' },
    items: [//Array de objetos
        {
            producto: 'Resma papel',
            precio: 13500,
            cantidad: 20
        },
        {
            producto: 'Caja lapicero negro',
            precio: 25600,
            cantidad: 6
        },
        {
            producto: 'Libreta anotaciones media carta',
            precio: 13450,
            cantidad: 10
        },
    ],

    total: function () {
        let tot = 0;
        for (let item of this.items) {//El of guarda el contenido de cada indice y el in guarda el indice se utiliza el this para hacer referencia a algo del objeto
            tot += item.cantidad * item.precio;
        }
        return tot;
    }
}

// console.log(factura.total());

const valores = [25, -3, 720, -54, 37, 24];

let tot = 0;

valores.forEach((val) => {//Toma el valor de los elementos sin utilizar un ciclo externo
    tot += val;
});
//console.log(tot);

let tot2 = valores.reduce((acum/* valor al que se encarga de acumular*/, val/*Cada uno de los valores del arreglo*/) => {
    return acum + val;
}, 0);

// console.log(tot2);

let valores2 = valores.map(val => val * 2);//devuelve un array
// console.log(valores2);

// let rta1 = confirm("Esta seguro");
// // console.log(rta1);
// let rta2 = prompt("Digita tu nombre: ", "Ninguno");
// console.log(rta2);

const retornarobj = function (x, y) {
    return { suma: x + y, resta: x - y, producto: x * y, division: (y == 0 ? 'Error: Div0' : x / y) };
}

// let res = retornarobj = (5, 6);
// console.log(res);


// Ejercicio
// Crear una Funcion que calcule y muestre el promedio de las calificaciones del arreglo asig 

let asig = [
    { nom: 'Matemáticas', nota: 4.5 },
    { nom: 'Algoritmos', nota: 4.8 },
    { nom: 'Humanidades', nota: 2.3 },
    { nom: 'Idiomas', nota: 4.0 },
    { nom: 'Lenguaje Prog.', nota: 4.7 },
];

const promedionotas = function () {
    let sumnota = 0;

    for (let i = 0; i < asig.length; i++) {
        sumnota += asig[i].nota;
    }
    return sumnota / asig.length;
}

//Funcion que compare las notas y diga cual es la mas alta  devolver el objeto completo
const notamax = function () {
    let notmax = asig[0];

    for (let i = 1; i < asig.length; i++) {
        let nota = notamax.nota;
        if (asig[i].nota > notmax.nota) {
            notmax = asig[i];
        }
    }
    return notmax;
}


// console.log(notamax());

// console.log(promedionotas());



//Ejercicio 
//Se pide al usuario el codigo de un vendedor por teclado ese codigo sera pasado a una 
// funcion que calcule el total de ventas para ese vendedor. Debe retornar un objeto con 
// el codigo,nombre y el total de ventas del vendedor.

let ventas = [
    { "codigo": '7', "vendedor": 'Ana', "venta": 2768280 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 1087660 },
    { "codigo": '2', "vendedor": 'María', "venta": 2040850 },
    { "codigo": '3', "vendedor": 'Olga', "venta": 1838380 },
    { "codigo": '2', "vendedor": 'María', "venta": 1466250 },
    { "codigo": '1', "vendedor": 'Juan', "venta": 632570 },
    { "codigo": '2', "vendedor": 'María', "venta": 1290130 },
    { "codigo": '1', "vendedor": 'Juan', "venta": 1873400 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 1080520 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 2179230 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 2564280 },
    { "codigo": '3', "vendedor": 'Olga', "venta": 1923720 },
    { "codigo": '5', "vendedor": 'Luis', "venta": 1944970 },
    { "codigo": '2', "vendedor": 'María', "venta": 852210 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 470390 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 2712690 },
    { "codigo": '3', "vendedor": 'Olga', "venta": 2592330 },
    { "codigo": '5', "vendedor": 'Luis', "venta": 1921340 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 636480 },
    { "codigo": '4', "vendedor": 'Pedro', "venta": 1136280 },
    { "codigo": '1', "vendedor": 'Juan', "venta": 539580 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 2114630 },
    { "codigo": '2', "vendedor": 'María', "venta": 2738700 },
    { "codigo": '2', "vendedor": 'María', "venta": 1474070 },
    { "codigo": '6', "vendedor": 'Jose', "venta": 2529260 },
    { "codigo": '4', "vendedor": 'Pedro', "venta": 553180 },
    { "codigo": '7', "vendedor": 'Ana', "venta": 1848750 }
];



const totventavende = function (codven) {
    let totven = 0;
    let nomven;
    let cod;

    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i].codigo == codven) {
            totven += ventas[i].venta;
            nomven = ventas[i].vendedor;
            cod = ventas[i].codigo;
        }
    }
    return { "codigo": cod, "vendedor": nomven, "totven": totven };
}

//const codven = prompt("Introduzca el codigo del vendedor a calcular: ");

//console.log(totventavende(codven));


//Set 
let set = new Set();

set.add(34);
set.add(ventas);

set.has(34);//si existe ese dato

//console.log(set);//El set No acepta valores duplicados 


//Elaborar una funcion que permita mostrar la valoracion del inventario por categoria 

let inventario = [
    { 'categoria': 'Almacenamiento', 'producto': 'Disco duro SSD Kinsgton', 'precio': 198000, 'existencia': 21 },
    { 'categoria': 'Audio', 'producto': 'Audífono Sony inalámbrico bluetoot', 'precio': 369000, 'existencia': 7 },
    { 'categoria': 'Video', 'producto': 'Televisor Sony 32 pulgadas LED', 'precio': 1188000, 'existencia': 10 },
    { 'categoria': 'Video', 'producto': 'Monitor Samsung 24 pulgadas', 'precio': 790000, 'existencia': 17 },
    { 'categoria': 'Audio', 'producto': 'JBL - Flip 6', 'precio': 599000, 'existencia': 25 },
    { 'categoria': 'Almacenamiento', 'producto': 'Memoria USB 3.2 128Gb', 'precio': 43000, 'existencia': 56 },
    { 'categoria': 'Audio', 'producto': 'Parlante Bose SoundLink', 'precio': 859000, 'existencia': 13 },
    { 'categoria': 'Almacenamiento', 'producto': 'Memoria USB 3.2 64Gb', 'precio': 35000, 'existencia': 29 },
    { 'categoria': 'Audio', 'producto': 'Parlante Sony XB100', 'precio': 220000, 'existencia': 18 },
    { 'categoria': 'algo', 'producto': 'Televisor Sony 32 pulgadas LED', 'precio': 1188000, 'existencia': 10 },
    { 'categoria': 'algo', 'producto': 'Monitor Samsung 24 pulgadas', 'precio': 790000, 'existencia': 17 },
    { 'categoria': 'algo', 'producto': 'JBL - Flip 6', 'precio': 599000, 'existencia': 25 },
];


// set [{'categoria':almacenamiento},{'categoria':Audio},{'categoria':video}]
const valinventariocate = function () {

    let set = new Set();
    let setsize = new Set();

    for (let i = 0; i < inventario.length; i++) {
        setsize.add(inventario[i].categoria);
    }

    for (let cate of setsize) {

        let totval = 0;
        let nomCatego;

        for (let i = 0; i < inventario.length; i++) {
            let ctgo = inventario[i].categoria;

            if (cate === ctgo) {
                nomCatego = inventario[i].categoria;
                totval += inventario[i].precio * inventario[i].existencia;
            }
        }
        set.add({ "categoria": nomCatego, "totInventario": totval });

    }
    console.log(set);
}
valinventariocate();
