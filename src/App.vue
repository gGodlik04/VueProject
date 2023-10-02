<template>
    <div class="container">
        <PostForm/>
        <PostList 
            :posts="posts"
            @create="createPost"
        />
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

export default {
    components: {
        PostForm, PostList,
    },
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
       createPost(post) {
        console.log(post);
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