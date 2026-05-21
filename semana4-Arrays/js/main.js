const jugadores = ["messi", "dibu martinez", "cuti romero", "lautaro martinez", "julian alvarez"]
// console.log(jugadores[2])
// console.log(jugadores.length)

// for-of
for(const jugador of jugadores) {
    console.log("Jugador: " + jugador)
}

// .push()
jugadores.push("dybala")

// .unshift()
jugadores.unshift("paredes")

// .pop()
jugadores.pop()

// .shift()
jugadores.shift()


// .includes()
// console.log(jugadores.includes("paredes"))

// indexOf()
// console.log(jugadores.indexOf("dybala"))

// .sort()
// jugadores.sort()

// .reverse() 
// jugadores.reverse()
// jugadores.sort().reverse()
// console.log(jugadores)

// .join()
// console.log(jugadores.join(" - "))


// splice()
// jugadores.splice(2, 0, "tagliafico")
// console.log(jugadores)