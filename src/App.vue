<template>
    <div>
       <div class ="post">
            <div>Название бразуера:<strong> Chrome</strong></div>
            <div>Название языка:<strong> JavaScript</strong></div>
       </div>
       <div class ="post">
            <div>Название бразуера:<strong> Chrome</strong></div>
            <div>Название языка:<strong> JavaScript</strong></div>
       </div>
       <div class ="post">
            <div>Название бразуера:<strong> Chrome</strong></div>
            <div>Название языка:<strong> JavaScript</strong></div>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 0,
        }
    },
    methods: {
        addLike () {
            this.likes += 1;
        },
        addDislike () {
            this.dislikes += 1;
        }
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .post {
        padding: 1em;
        border: 0.2rem solid black;
        border-radius: 0.5em;
        margin-bottom: 1em;
    }
</style>