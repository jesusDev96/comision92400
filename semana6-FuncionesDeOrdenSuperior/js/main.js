// Funcion que retorna otra funcion

// function multiplicar(numeroA, numeroB) {
//     let resultado = numeroA*numeroB
//     return resultado
// }

// function multiplicar(numeroA) {
//     return(numeroB) => numeroA*numeroB
// }
// let resultado = multiplicar(10)
// console.log(resultado(5))

// let operacion = prompt("Ingrese si desea multiplicar o dividir")
// let numeroA = parseInt(prompt("Ingrese el primer numero"))
// let numeroB = parseInt(prompt("Ingrese el segundo numero"))

// function elegirOperacion(operacion) {
//     if(operacion == "multiplicar") {
//         return(a,b) => a*b
//     } else if (operacion == "dividir") {
//         return(a,b) => a/b
//     }
// }

// let operacionElegida = elegirOperacion(operacion)
// console.log(operacionElegida(numeroA, numeroB))


// Funcion que recibe otra funcion por prametro

// let numeros = [1, 2, 3, 4, 5]

// function iterador(datos, accion) {
//     for(const dato of datos) {
//         accion(dato)
//     }
// }

// function multiplicar(numeroA) {
//     let resultado = numeroA*10
//     console.log(resultado)
// }

// iterador(numeros, multiplicar)

// const tablaDel10 = []

// iterador(numeros, numero => tablaDel10.push(numero*10))
// console.log(tablaDel10)

const productos= [
    {
        id: 1, 
        nombre: "televisor", 
        precio: 5000
    },
    {
        id: 2, 
        nombre: "lavarropas", 
        precio: 8000
    },
    {
        id: 3, 
        nombre: "microondas", 
        precio: 2000
    },
    {
        id: 4, 
        nombre: "secadora", 
        precio: 4000
    },
    {
        id: 5, 
        nombre: "cocina", 
        precio: 13000
    },
]



// forEach()
// productos.forEach(producto => {
//     console.log("Producto: " + producto.nombre + " Precio: $" + producto.precio)
// })

// find()
// const busqueda = productos.find(producto => producto.nombre == "celular")
// console.log(busqueda)

// filter()
// let precioMaximo = parseInt(prompt("Ingrese su presupuesto maximo"))
// const filtrados = productos.filter(producto => producto.precio <= precioMaximo)
// console.log(filtrados)

// const css = productos.filter(producto => producto.nombre.includes("CSS"))
// console.log(css)

// some()
// console.log(productos.some(producto => producto.nombre == "televisor"))
// let buscar = prompt("ingrese el producto a ver si esta en stock")
// let hayStock = productos.some(producto => producto.nombre == buscar)
// if(hayStock) {
//     console.log("Lo tenemos!!")
// } else {
//     console.log("No esta momentaneamente")
// }


// map()
// const productosDisponibles = productos.map(producto => producto.nombre)
// console.log(productosDisponibles)

// const descuento = productos.map(producto => {
//     let precioDescuento = producto.precio - (producto.precio*20/100)
//     return {
//         id: producto.id,
//         nombre: producto.nombre,
//         precio: precioDescuento
//     }
// })
// console.log(descuento)

// reduce()
// const total = productos.reduce((contador, producto) => contador + producto.precio, 0)
// console.log(total)