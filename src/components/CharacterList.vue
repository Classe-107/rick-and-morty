<template>
    <section>
        <div class="row gy-4">
            <div class=" col-12 col-md-4 col-lg-3" v-for=" (item, index) in store.characterList" :key="item.id">
                <CardComponent :image="item.image" :title="item.name" :subtitle="item.status" :text="item.species" />
            </div>
            <div class="col-12" v-if="store.error">
                <div class="alert alert-danger">
                    {{ store.error }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store.js';
import CardComponent from './CardComponent.vue';

export default {
    name: 'CharacterList',
    components: {
        CardComponent
    },
    data() {
        return {
            store,


        };
    },

}
</script>

<style lang="scss" scoped></style>