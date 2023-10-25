<template>
    <h1 class="title">Hell0, m' so 9lad to see y (*-*)</h1>
    <div class="container">
        <div class="nav-wrapper">
            <h1 class="nav__items">User page with posts</h1>
            <h1 class="nav__items">Page with something else</h1>
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
        padding: 10px;
        border: 4px solid #320087;
        background-color: rgb(36, 87, 228);
        color: #fff;
        border-radius: 5px;
        margin-top: 40px;
        align-self: center;
    }

    .title {
        margin-top: 25px;
        text-align: center;
        padding: 10px;
        border: 4px solid rgb(36, 87, 228);
        background-color: #320087;
        color: #fff;
        border-radius: 5px;
    }
</style>