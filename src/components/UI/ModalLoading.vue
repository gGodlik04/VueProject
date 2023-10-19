<template>
    <div class="modal">
        <div class="modal__content-loading">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModalLoading'
}
</script>
<style>  
    .modal__content-loading {
        color: #fff;
        margin: auto;
        font-size: 25px;
    }
</style>