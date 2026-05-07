// IF
// let validar = false
// if(validar) {
//     console.log("Variable verdadera")
// }

// let fruta = "mandarina"
// let mes = "mayo"


// if(fruta == "mandarina") {
//     console.log("Me parece que es otoño")
// } else if (fruta == "frutilla") {
//     console.log("Quizas es primavera")
// } else {
//     console.log("Banana o manzana son frutas de todo el año")
// }

// OR ||
// if(fruta == "mandarina" || mes == "mayo") {
//     console.log("Me parece que son frutas del otoño")
// }

// AND &&
// if(fruta == "mandarina" && (mes == "marzo" || mes == "abril" || mes == "mayo" || mes == "junio")) {
//     console.log("Me parece que son frutas del otoño")
// }

// let edad = 18

// if(edad >= 18) {
//     console.log("Podes comprar en nuestra vinoteca")
// } else {
//     console.log("No tenes autorizacion")
// }



// FOR
// for("desde"; "hasta"; "actualizacion") {
//     // Bloque de codigo a ejecutar
// }

// for(let i=1; i<=10; i++) {
//     console.log(i)
// }

// let numero = parseInt(prompt("Bienvenido! Ingrese la tabla de multiplicar que desea"))
// console.log("Tabla de multiplicar del " + numero)
// for(let i=1; i<=15; i++) {
//     let resultado = numero*i
//     console.log(numero + "x" + i + ": " + resultado)
// }

// console.log("Cuenta regresiva")
// for(let i=10; i>=1; i--) {
//     console.log(i)
//     if(i==2) {
//         console.log("Abortamos despegue")
//         break
//     }
//     if(i==1) {
//         console.log("Despegue")
//     }
// }


// WHILE
// let continuar = true
// while(continuar) {
//     let numero = parseInt(prompt("Bienvenido! Ingrese la tabla de multiplicar que desea"))
//     console.log("Tabla de multiplicar del " + numero)
//     for(let i=1; i<=5; i++) {
//         let resultado = numero*i
//         console.log(numero + "x" + i + ": " + resultado)
//     }

    // let confirmacion = prompt("Desea hacer otro calculo? (si/no)").toLowerCase()
    // if(confirmacion == "no") {
    //     continuar=false
    //     console.log("Gracias!!")
    // }
// }


// SWITCH-CASE
let continuar = true
while(continuar) {
    let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, 2 para extraccion, 3 para deposito"))

    switch(menu) {
        case 1:
            alert("Total de la cuenta: $300.000")
            break
        case 2:
            alert("Limite de extraccion: $70.000")
            break
        case 3:
            alert("Limite de deposito: $50.000")
            break
        default:
            alert("Opcion incorrecta")
    }

    let confirmacion = prompt("Desea hacer otra consulta? (si/no)").toLowerCase()
    if(confirmacion == "no") {
        continuar=false
        alert("Retire su tarjeta")
    }
}

