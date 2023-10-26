<template>
    <div class="container">
        <Navbar class="user__navbar"></Navbar>
        <h1 
            class="title"
        >
            Страница с постами
        </h1>
        <InputComponent
            class="app_search" 
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск..."
        />            
        <div class="app_buttons">
            <Button 
                class="post-form-add" 
                @click="modalShow"
            >
                Добавить пост
            </Button>
            <SelectPart 
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
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
            :posts="searchInSortedPosts"
            @removePost="removePost"
        />
        <ModalLoading v-model:show="isLoading"
            class="loading" 
            v-if="isLoading"
        >
            Идет загрузка...
        </ModalLoading>
        <div v-intersection="{loadMorePosts}" class="observer-block"></div>
        <div class="page-wrapper">
            <div 
                v-for="pageNumber in totalPage" 
                class="page__item"
                :class="{
                    'page-active': page === pageNumber
                }"
                :key="pageNumber"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

export default {
    components: {
    PostForm, PostList,
},
    data() {
        return {
            modalVisible: false,
        }
    },
    methods: {
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts',
            removePost: 'post/removePost',
        }),
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
            setPosts: 'post/setPosts',
        }),
       createPost(post) {
            this.posts.push(post);
            this.modalVisible = false;
       },
       modalShow() {
        this.modalVisible = true;
       },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({   
            posts: state => state.post.posts,
            isLoading: state => state.post.isLoading,
            selectedSort: state => state.post.selectedSort,
            sortOptions: state => state.post.sortOptions,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPage: state => state.post.totalPage,
        }),
        ...mapGetters({
            sortPosts: 'post/sortPosts',
            searchInSortedPosts: 'post/searchInSortedPosts'
        }),
    },  
    watch: {
        loadPage() {
            this.fetchPosts();
        }
    }
}
</script>

<style>
    body {
        height: 100vh;
        width: 100vw;
        background-color: #002451;
        color: #ffffff;
        padding: 0 5em 0 5em;
    }
    
    .loading {
        margin: 0;
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

    .app_search {
        margin-top: 25px;
    }

    .page-wrapper {
        display: flex;
        margin: 50px 0 50px 0;
        justify-content: center;
    }
    
    .page__item {
        margin-right: 10px;
        font-size: 20px;
        padding: 5px;
        border: 4px #fff solid;
        border-radius: 2px;
        text-align: center;
        min-width: 2em;
    }

    .page-active {
        background-color: #fff;
        border: 4px #000 solid;
        color: #000;
    }

    .observer-block {
        height: 10px;
    }

    .user__navbar {
        background-color: #002451;
        margin-bottom: 10px;
    }
</style>