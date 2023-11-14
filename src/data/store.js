// store.js
import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/",
  endPoint: {
    character: "character",
    location: "location",
    episode: "episode",
  },
  error: "",
  loading: true,
  characterList: [],
});
