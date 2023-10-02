<template>
    <div class="container">
        <form @submit.prevent>
            <h4 class="title">Создание поста</h4>
            <input  
                class="input" 
                @input="inputTitle"
                type="text" 
                placeholder="Название" 
                v-bind:value="title"
            >
            <input 
                class="input" 
                @input="inputBody"
                type="text" 
                placeholder="Название"
                v-bind:value="body"
            >
            <button 
                class="btn" 
                @click="createPost"
            >
                Создать
            </button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Название</strong> {{ post.title }}</div>
            <div><strong>Описание</strong> {{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: "JavaScript", body: "Js language" },
                { id: 2, title: "Python", body: "Python language" },
                { id: 3, title: "React", body: "React library" },
            ],
            title:'',
            body:'',
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
        },
        inputTitle(event) {
            this.title = event.target.value;
        },
        inputBody(event) {
            this.body = event.target.value;
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

body {
    background-color: #002451;
    color: #ffffff;
    padding: 0 5em 0 5em;
}

.container {
    margin-top: 50px;
}

.post {
    width: auto;
    padding: 1em;
    border: 0.2rem solid #ffffff;
    border-radius: 0.5em;
    margin-bottom: 1em;
    background-color: #001733;
}

.title {
    margin-bottom: 1em;
}

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