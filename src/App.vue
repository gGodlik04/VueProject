<template>
    <div class="container">
        <h1 
            class="title"
        >
            Страница с постами
        </h1>
        <div class="app_buttons">
            <Button 
                class="post-form-add" 
                @click="modalShow"
            >
                Добавить пост
            </Button>
            <SelectPart 
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <ModalWindow v-model:show="modalVisible">
            <PostForm
            @create="createPost"
            />
        </ModalWindow>
        <PostList 
            v-if="!isLoading"
            :posts="posts"
            @removePost="removePost"
        />
        <div 
            class="loading" 
            v-if="isLoading"
        >
            Идет загрузка...
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from 'axios';

export default {
    components: {
    PostForm, PostList,
},
    data() {
        return {
            posts: [],
            modalVisible: false,
            isLoading: false,
            selectedSort: '',
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ]
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
       async fetchPosts() {
        try {
                this.isLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;    
        } catch (error) {
            console.log(e);
        } finally {
            this.isLoading = false;
        }
       },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        }
    },  
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
    width: 70%;
    margin-left: auto;
    margin-right: auto;
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

.app_buttons {
    display: flex;
    justify-content: space-between;
}
</style>