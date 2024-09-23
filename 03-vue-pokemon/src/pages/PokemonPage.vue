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
            <button @click="newGame">
                New game
            </button>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';

import getPokemonOptions from '../helpers/getPokemonOptions';
import { Pokemon } from '../interfaces/pokemon';

const pokemonArr  = ref<Pokemon[]>([]);
const pokemon     = ref<Pokemon>();
const showPokemon = ref(false);
const showAnswer  = ref(false);
const message     = ref('');

// Methods

const mixPokemonArray  = async() => {
    pokemonArr.value = await getPokemonOptions();

    const randomInt = Math.floor( Math.random() * 4 );
    pokemon.value = pokemonArr.value[randomInt];
}

const checkAnswer = ( selectedId: number ) => {
    if(!pokemon.value) return;

    showPokemon.value = true;
    showAnswer.value  = true;

    if( selectedId === pokemon.value.id ) {
        message.value = `Correct, ${ pokemon.value.name }`;
    } else {
        message.value = `Oops, was: ${ pokemon.value.name }`;
    }
}

const newGame = () => {
    showPokemon.value = false;
    showAnswer.value  = false;
    pokemonArr.value  = [];
    pokemon.value     = undefined;
    mixPokemonArray()            
}

mixPokemonArray();
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
