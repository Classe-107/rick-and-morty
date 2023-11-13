<template>
    <header class="container text-center py-4 my-4">
        <h1>{{ title }}</h1>
    </header>
</template>

<script>

export default {
    name: 'HeadComponent',
    props: ['title']
}

</script>

<style lang="scss" scoped></style>