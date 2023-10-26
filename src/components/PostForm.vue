<template>
    <form @submit.prevent>
            <h4 class="post-form__title">Создание поста</h4>
            <InputComponent
                v-focus
                v-model="post.title"
                type="text" 
                placeholder="Название" 
            />
            <InputComponent
                v-model="post.body"
                type="text" 
                placeholder="Название"
            />
            <Button
                class="form__button"
                @click="createPost"
            >
                Создать
            </Button>
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
        };
    },
    methods: {
        createPost() {
            if (this.post.body != '' && this.post.title != ''){
                this.post.id = Date.now();
                this.$emit('create', this.post);
                this.post = {
                    title: '',
                    body: '',
                };
            } else {
                alert ('Введите данные')
            }
        },
    },
}
</script>

<style>

form {
    display: flex;
    flex-direction: column;
}

.form__button {
    margin-bottom: 1em;
    align-self: flex-end;
}

.post-form__title {
    margin-bottom: 1em;
}
</style>
