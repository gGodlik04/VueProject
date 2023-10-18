<template>
        <div v-if="posts.length > 0">
            <h3
                class="posts__title"
            >
                Список постов
            </h3>
            <PostItem
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @removePost="$emit('removePost', post)"
            />
        </div>
        <h2
            v-else
            class="posts__title"
        >
            Список постов пуст
        </h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    components: { PostItem }
}
</script>

<style scoped>

    .posts__title {
        font-size: 25px;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 100px;
    }
</style>