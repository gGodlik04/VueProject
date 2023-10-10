<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Button'
}
</script>
<style>
    .btn {
        width: max-content;
        color: #ffffff;
        padding: 0.5em;
        border: 0.15em solid #ffffff;
        background-color: #001733;
        border-radius: 0.5em;
        font-size: 1em;
    }
</style>