import { createStore } from "vuex";
import { PostModuleStore } from "./PostModule";

export default createStore({
    modules: {
        post: PostModuleStore,
    }
})