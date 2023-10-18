<template>
    <div class="container">
        <Modal :show="true">
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

export default {
    components: {
    PostForm, PostList,
    Modal
},
    data() {
        return {
            posts: [
                { id: 1, title: "JavaScript", body: "Js language" },
                { id: 2, title: "Python", body: "Python language" },
                { id: 3, title: "React", body: "React library" },
            ],
        }
    },
    methods: {
       createPost(post) {
            this.posts.push(post);
       },
       removePost (post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
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
    margin-bottom: 1em;
}
</style>