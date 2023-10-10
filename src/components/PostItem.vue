<template>
    <div class="post">
        <div>
            <div><strong>Название: </strong> {{ post.title }}</div>
            <div><strong>Описание: </strong> {{ post.body }}</div>
        </div>
        <Button 
            @click="$emit('removePost', post)"
            class="post__btn"
        >
            Удалить
        </Button>
    </div>
</template>
<script>

export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
}
</script>
<style>
    .post {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        padding: 1em;
        border: 0.2rem solid #ffffff;
        border-radius: 0.5em;
        margin-bottom: 1em;
        background-color: #001733;
    }

    .post__btn {
        align-self: center;
    }
</style>