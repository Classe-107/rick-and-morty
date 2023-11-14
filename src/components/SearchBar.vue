<template>
    <div>
        <select name="searchbar" id="searchbar" v-model="textSearch" @change="passData">
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            textSearch: ''
        }
    },
    methods: {
        passData() {
            this.$emit('filterChange', this.textSearch);
        }
    }
}
</script>

<style lang="scss" scoped></style>