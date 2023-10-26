<template>
    <Navbar></Navbar>
    <h1 class="nav_title">Hell0, m' so 9lad to see y (*-*)</h1>
    <div class="container">
        <div class="nav-wrapper">
            <router-link to="/user-post">
                <h1 class="nav__items">User page with posts</h1>
            </router-link>
            <router-link to="">
                <h1 class="nav__items">Page with something else</h1>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

    .nav-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .nav__items {
        text-align: center;
        min-width: 400px;
        max-width: 400px;
        padding: 10px;
        border: 4px solid #320087;
        background-color: rgb(36, 87, 228);
        box-shadow: 3px 3px 10px 1px #cfc7c7;
        color: #fff;
        border-radius: 5px;
        margin-top: 40px;
        transition: 1s;
    }
    
    .nav__items:hover {
        scale: 1.05;
        font-size: 25px;
        box-shadow: none;
    }

    .nav_title {
        margin-top: 25px;
        text-align: center;
        padding: 10px;
        border: 4px solid #320087;
        background-color: rgb(36, 87, 228);
        box-shadow: 0px 10px 1000px #fff;
        color: #fff;
        border-radius: 5px;
    }
    
    a{
        text-decoration: none;
        align-self: center;
    }
</style>