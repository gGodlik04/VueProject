<template>
        <div class="post" v-for="post in posts">
            <div><strong>Название: </strong> {{ post.title }}</div>
            <div><strong>Описание: </strong> {{ post.body }}</div>
        </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.post {
    width: auto;
    padding: 1em;
    border: 0.2rem solid #ffffff;
    border-radius: 0.5em;
    margin-bottom: 1em;
    background-color: #001733;
}
</style>