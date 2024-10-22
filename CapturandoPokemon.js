// Lê a entrada do usuário
let escolhaTreinador = parseInt(gets());


// Variável para armazenar o nome do Pokémon escolhido
let pokemonEscolhido;


// Estrutura condicional para determinar o Pokémon
if (escolhaTreinador === 1) {
  pokemonEscolhido = "Bulbasaur";
} else if (escolhaTreinador === 2) {
  pokemonEscolhido = "Charmander";
} else if (escolhaTreinador === 4) {
  pokemonEscolhido = "Pikachu";
} else if (escolhaTreinador === 5) {
  pokemonEscolhido = "Mewtwo";
} else {
  pokemonEscolhido = "Pokémon inválido";
}


// Imprime a mensagem de boas-vindas
print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
