<template>
    <select 
        :value="modelValue"
        class="select" 
        @change="changeOption"
    >
        <option disabled value="">Выберите из списка</option>
        <option 
             v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
<script>
export default {
    name: 'SelectPart',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style>
    .select {
        background-color: #002451;
        border: 1px #fff solid;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        margin-top: 25px;
        height: 2.5rem;
    }
</style>