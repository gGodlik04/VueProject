export const PostModuleStore = {
    state: () => ({
        posts: [],
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
    }),
    getters: {
        sortPosts(state) {
            return [...state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        searchInSortedPosts(state, getters) {
            return getters.sortPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },
    mutations: {
        setPost(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isLoading = bool;
        },
        setSelectedSort(state, selectedSort) {
           state.selectedSort = selectedSort;
        },
        setSortOptions(state, sortOptions) {
            state.sortOptions = sortOptions;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setPage(state, page) {
            state.page = page;
        },
        setLimit(state, limit) {
            state.limit = limit;
        },
        setTotalPage(state, totalPage) {
            state.totalPage = totalPage;
        },
    },
    actions: {
        async fetchPosts(state, commit) {
            try {
                    commit('setLoading', true);
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    })
                    .then(res => {
                        commit('setTotalPage', Math.ceil(res.headers['x-total-count'] / state.limit));
                        commit('setPosts', res.data);    
                    });
            } catch (error) {
                console.log(error);
            } finally {
                commit('setLoading', false);
            }
           },
           async loadMorePosts(state, commit) {
            try {
                    commit('setPage', state.page++)
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: state.page,
                            _limit: state.limit
                        }
                    })
                    .then(res => {
                        commit('setTotalPage', Math.ceil(res.headers['x-total-count'] / this.limit));
                        commit('setPosts', [...this.posts, ...res.data]);
                    });
            } catch (error) {
                console.log(error);
            }
           },
    },
}