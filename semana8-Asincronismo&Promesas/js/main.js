/* setTimeout */

/* console.log("Preparando motores")
let largada = setTimeout(()=> {
    console.log("Largada!!")
}, 0)
console.log("Primera vuelta en marcha")
clearTimeout(largada) */

/* setInterval */
/* console.log("Atencion a las banderas amarillas")
let safetyCar = setInterval(()=> {
    console.log("Banderas amarillas, seguir al auto de seguridad")
}, 1500)
clearInterval(safetyCar) */


/* try-catch-finally */

/* let pitsTime = parseFloat(prompt("De cuanto tiempo fue la parada en pits?"))
let analisis = ""

try {
    //codigo a evaluar 
    if(pitsTime < 3.1) {
        analisis = "Buena parada, dentro de lo esperado"
    } else {
        throw new Error("Parada lenta, perdiste posiciones")
    }
} catch(err) {
    //acá viene el error si se detecta en el try 
    analisis = err
} finally {
    // bloque de codigo que se ejecuta si o si a modo de cierre (OPCIONAL) 
    console.log("Analisis del pitstop: ", analisis)
} */



//Promesas

function podioChecker(posicion) {
    return new Promise((resolve, reject) => {
        if(posicion > 3) {
            return reject `Terminaste en la posicion "${posicion}" quedaste afuera del podio`
        }
        setTimeout(() => {
            resolve({
                posicion,
                result: "Felicitaciones! Vas al podio"
            })
        }, 1000)
    })
}
podioChecker(2).then(data => console.log(data))