<template>
  <HeadComponent title="Rick and Morty" />
  <main class="container">
    <CharacterList />
  </main>
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeadComponent from './components/HeadComponent.vue';
import CharacterList from './components/CharacterList.vue';
export default {
  name: 'App',
  components: {
    HeadComponent,
    CharacterList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCharacters() {
      const url = store.apiUrl + store.endPoint.character;
      axios.get(url).then((response) => {
        store.characterList = response.data.results;
      })
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<style lang="scss" scoped></style>