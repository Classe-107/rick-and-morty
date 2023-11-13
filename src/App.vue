<template>
  <HeaderComponent title="Rick and Morty" />
  <main class="container">

  </main>
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent
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