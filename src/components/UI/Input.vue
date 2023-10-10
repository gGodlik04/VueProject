<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
<script>
export default {
    name: "InputComponent", 
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput (event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style>
    .input {
        width: 100%;
        height: 3em;
        border: 0.2rem solid #ffffff;
        padding: 5px;
        background-color: #001733;
        border-radius: 0.5em;
        margin-bottom: 1em;
        color: #ffffff;
    }
</style>