<template>
    <div class="modal" @click="hideModal" v-if="show === true ">
        <div @click.stop class="modal__content-dialog">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
    name: 'ModalWindow',
    mixins: [toggleMixin]
}
</script>
<style>
    .modal {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(256,256,256, 0.5);
        position: fixed;
        display: flex;
    }
    
    .modal__content-dialog {
        margin: auto;
        background-color: #002451;
        border: 2px #fff solid;
        border-radius: 15px;
        padding: 1.5rem;
        min-height: 15rem;
        min-width: 30em;
    }
</style>