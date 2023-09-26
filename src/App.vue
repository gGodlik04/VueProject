<template>
    <div>
        <div>
            <button v-on:click="addLike">Like</button>
            <button @click="addDislike">Dislike</button>
        </div>
        <div>Hello world</div>
        <div>Count likes <strong>{{ likes }}</strong></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            likes: 6,
        }
    },
    methods: {
        addLike () {
            this.likes += 1;
        },
        addDislike () {
            this.likes -= 1;
        }
    }
}
</script>

<style>

</style>