//escolha do pokemon
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido;


//implementação
if ( escolhaDoTreinador === 1 ){
    pokemonEscolhido = "Bulbasur";
} else if ( escolhaDoTreinador === 2 ){
    pokemonEscolhido = "Charmander";
} else if(escolhaDoTreinador === 4){
    pokemonEscolhido = "Pikachu";
} else{
    pokemonEscolhido = "Mewtwo";
}

//Imprime o Pokémon escolhido:
if(pokemonEscolhido){
    print("Você escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.")
}