<template>
    <div class="container">
        <h1 class="title">Страница с постами</h1>
        <Button class="post-form-add" @click="modalShow">Добавить пост</Button>
        <Modal v-model:show="modalVisible">
            <PostForm
            @create="createPost"
            />
        </Modal>
        <PostList 
        :posts="posts"
        @removePost="removePost"
        />
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import Modal from "./components/UI/Modal.vue";
import Button from "./components/UI/Button.vue";

export default {
    components: {
    PostForm, PostList,
    Modal,
    Button
},
    data() {
        return {
            posts: [
                { id: 1, title: "JavaScript", body: "Js language" },
                { id: 2, title: "Python", body: "Python language" },
                { id: 3, title: "React", body: "React library" },
            ],
            modalVisible: false,
        }
    },
    methods: {
       createPost(post) {
            this.posts.push(post);
            this.modalVisible = false;
       },
       removePost (post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
       },
       modalShow() {
        this.modalVisible = true;
       },
       fetchPosts() {
        
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

.title {
    text-align: center;
}

.post-form-add {
    text-align: center;
    margin-top: 25px;
    width: 15%;
}
</style>