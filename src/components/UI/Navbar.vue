<template>
    <div class="navbar">
        <Button @click="$router.push('/')" class="navbar-main__buttons">Главная</Button>
        <Button @click="$router.push('/user-post')" class="navbar-main__buttons">Пользователи</Button>
        <Button @click="$router.push('/vuex-store')" class="navbar-main__buttons">Vuex store app</Button>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    
}
</script>
<style>
    .navbar {
        display: flex;
        padding: 10px;
        margin-top: 10px;
        justify-content: center;
        gap: 15px;
        width: 100%;
        background-color: blue;
        border: 2px solid rgb(36, 87, 228);
        border-radius: 5px;
    }

    .navbar-main__buttons {
        background-color: rgb(23, 40, 112);
        border: 3px solid rgb(13, 13, 160);
        border-radius: 5px;
    }
</style>