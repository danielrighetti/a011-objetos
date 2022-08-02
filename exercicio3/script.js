const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// parte a

pokemon1Copia = {...pokemon1}
pokemon1Copia.nome = "Squirtle",
pokemon1Copia.tipo = "Água"

console.log(pokemon1Copia)

// parte b

pokemon1Copia.ataques = []
pokemon1Copia.ataques.push({

    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})

console.log(pokemon1Copia)

// parte c

pokemon1.ataques = pokemon1Copia.ataques

console.log(pokemon1)

// parte d

pokemon1.ataques = [{
    dano: 45,
    precisao: 100,
    tipo: "Água"
}]

console.log(pokemon1)

// parte e

pokemon1Copia.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    precisao: 100, 
    tipo: "Água"
})

console.log(pokemon1Copia)

// parte f

console.log(pokemon1)
console.log(pokemon1Copia)