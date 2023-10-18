<template>
        <div v-if="posts.length > 0">
            <h3
                class="posts__title"
            >
                Список постов
            </h3>
            <TransitionGroup name="post-list"> 
                <PostItem
                    v-for="post in posts"
                    :post="post"
                    :key="post.id"
                    @removePost="$emit('removePost', post)"
                />
            </TransitionGroup>
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

    .post-list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .post-list-enter-active,
    .post-list-leave-active {
        transition: all 0.4s ease;
    }

    .post-list-enter-from,
    .post-list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .post-list-move {
        transition: transform 0.8s linear;
    }
</style>