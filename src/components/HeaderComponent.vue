<template>
    <header class="container">
        <h1>{{ title }}</h1>
    </header>
</template>

<script>

export default {
    name: 'HeaderComponent',
    props: ['title']
}

</script>

<style lang="scss" scoped></style>