<script src="./PokemonPage.ts" >

// export default {
//    components: { PokemonOptions, PokemonPicture },
//    data() {
//        return {
//            pokemonArr: [],
//            pokemon: null,
//            showPokemon: false,
//            showAnswer: false,
//            message: ''
//        }
//    },
//    methods: {
//        async mixPokemonArray() {
//            this.pokemonArr = await getPokemonOptions()
//
//            const rndInt = Math.floor( Math.random() * 4 )
//            this.pokemon = this.pokemonArr[ rndInt ]
//        },
//        checkAnswer( selectedId ) {
//            this.showPokemon = true
//            this.showAnswer  = true
//
//            if( selectedId === this.pokemon.id ) {
//                this.message = `Correcto, ${ this.pokemon.name }`
//            } else {
//                this.message = `Oops, era ${ this.pokemon.name }`
//            }
//        },
//        newGame() {
//
//            this.showPokemon = false
//            this.showAnswer  = false
//            this.pokemonArr  = []
//            this.pokemon     = null
//            this.mixPokemonArray()            
//
//        }
//    },
//    mounted() {
//        this.mixPokemonArray()
//    }
// }
</script>

<template>
    <h1 v-if="!pokemon">Wait please...</h1>
    <div v-else>
        <h1>¿How is this pokémon?</h1>
        <PokemonPicture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon" 
        />
        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
        />
        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame" id="new-game-btn">
                New game
            </button>
        </template>
    </div>
</template>

