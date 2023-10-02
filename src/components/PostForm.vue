<template>
    <form @submit.prevent>
            <h4 class="title">Создание поста</h4>
            <input  
                v-model="post.title"
                class="input" 
                type="text" 
                placeholder="Название" 
            >
            <input 
                v-model="post.body"
                class="input" 
                type="text" 
                placeholder="Название"
            >
            <button 
                class="btn"
                @click="createPost"
            >
                Создать
            </button>
        </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now(); 
            this.$emit('create',this.post)
            this.post = {
                title: '',
                body: '',
            }
        },
    }
}
</script>

<style>
.input {
    width: 100%;
    height: 3em;
    border: 0.2rem solid #ffffff;
    padding: 5px;
    background-color: #001733;
    border-radius: 0.5em;
    margin-bottom: 1em;
    color: #ffffff;
}

form {
    display: flex;
    flex-direction: column;
}

.btn {
    width: max-content;
    color: #ffffff;
    padding: 0.5em;
    align-self: flex-end;
    border: 0.15em solid #ffffff;
    background-color: #001733;
    border-radius: 0.5em;
    font-size: 1em;
    margin-bottom: 1em;
}
</style>
