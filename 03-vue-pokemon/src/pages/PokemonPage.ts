import { defineComponent, ref } from "vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";

import getPokemonOptions from "../helpers/getPokemonOptions";
import { Pokemon } from "../interfaces/pokemon";

// Es composition API porque tiene el setup en vez de data que seria el Options API
export default defineComponent({
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  setup: () => {
    const pokemonArr = ref<Pokemon[]>([]);
    const pokemon = ref<Pokemon>();
    const showPokemon = ref(false);
    const showAnswer = ref(false);
    const message = ref("");

    // Methods
    const mixPokemonArray = async () => {
      pokemonArr.value = await getPokemonOptions();

      const randomInt = Math.floor(Math.random() * 4);
      pokemon.value = pokemonArr.value[randomInt];
    };

    const checkAnswer = (selectedId: number) => {
      if (!pokemon.value) return;

      showPokemon.value = true;
      showAnswer.value = true;

      if (selectedId === pokemon.value.id) {
        message.value = `Correct, ${pokemon.value.name}`;
      } else {
        message.value = `Oops, was: ${pokemon.value.name}`;
      }
    };

    const newGame = () => {
      showPokemon.value = false;
      showAnswer.value = false;
      pokemonArr.value = [];
      pokemon.value = undefined;
      mixPokemonArray();
    };

    mixPokemonArray();

    return {
      // Properties
      pokemonArr,
      pokemon,
      showPokemon,
      showAnswer,
      message,
      // Methods
      mixPokemonArray,
      checkAnswer ,
      newGame
    }
  },
});
