<template>
  <HeadComponent title="Rick and Morty" />
  <main class="container">
    <SearchBar @filter-change="setParams" />
    <CharacterList />
    <LoaderComponent v-if="store.loading" />
  </main>
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';
import HeadComponent from './components/HeadComponent.vue';
import CharacterList from './components/CharacterList.vue';
import LoaderComponent from './components/LoaderComponent.vue';
import SearchBar from './components/SearchBar.vue';
export default {
  name: 'App',
  components: {
    HeadComponent,
    CharacterList,
    LoaderComponent,
    SearchBar
  },
  data() {
    return {
      store,
      params: null

    }
  },
  methods: {
    setParams(search) {
      console.log(search);
      if (search) {
        this.params = {
          status: search
        }
      } else {
        this.params = null;
      }

      this.getCharacters();
    },
    getCharacters() {
      store.error = '';
      const url = store.apiUrl + store.endPoint.character;
      axios.get(url, { params: this.params }).then((res) => {
        console.log(res.data.results);
        store.characterList = res.data.results;
      }).catch((error) => {
        console.log(error)
        this.store.error = error.message;
      }).finally(() => {
        store.loading = false
      })

    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<style lang="scss" scoped></style>