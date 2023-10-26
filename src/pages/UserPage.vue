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
            v-model="searchQuery"
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
            :posts="searchInSortedPosts"
            @removePost="removePost"
        />
        <ModalLoading v-model:show="isLoading"
            class="loading" 
            v-if="isLoading"
        >
            Идет загрузка...
        </ModalLoading>
        <div ref="observerBlock" class="observer-block"></div>
        <!-- <div class="page-wrapper">
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
        </div> -->
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
            ],
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPage: 0,
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
    //    changePage(pageNumber) {
    //         this.fetchPosts();
    //         this.page = pageNumber;
    //    },
       async fetchPosts() {
        try {
                this.isLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })
                .then(res => {
                    this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit)
                    this.posts = res.data;    
                });
        } catch (error) {
            console.log(error);
        } finally {
            this.isLoading = false;
        }
       },
       async loadMorePosts() {
        try {
                this.page++;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                })
                .then(res => {
                    this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...res.data];
                });
        } catch (error) {
            console.log(error);
        }
       },
    },
    mounted() {
        this.fetchPosts();
        const options = {
            rootMargin: "0px",
            threshold: 0.1,
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && this.page < this.totalPage) {
                this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observerBlock);
    },
    computed: {
        sortPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        searchInSortedPosts() {
            return this.sortPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },  
    watch: {
        // loadPage() {
        //     this.fetchPosts();
        // }
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