<template>
    <div class="dialog" v-if="show === true ">
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modalWindow',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
<style>
    .dialog {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(256,256,256, 0.5);
        position: fixed;
        display: flex;
    }

    .dialog__content {
        margin: auto;
        background-color: #002451;
        border-radius: 15px;
        padding: 1.5rem;
        min-height: 15rem;
        min-width: 30em;
    }
</style>