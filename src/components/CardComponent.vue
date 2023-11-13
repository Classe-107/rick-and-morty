<template>
    <div class="card bg-transparent border-0 ">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body text-center">
            <h5 class="card-title">{{ title }}</h5>
            <h6 class="card-title">{{ subtitle }}</h6>
            <h6 class="card-title">{{ text }}</h6>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: [
        'image',
        'title',
        'subtitle',
        'text'
    ]
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}
</style>