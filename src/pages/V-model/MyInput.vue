<template>
    <input type="text" 
    :value="modelValue" 
    @input="emit('update:modelValue',(<HTMLInputElement>$event.target).value)"
    >
</template>

<script setup lang="ts" name="MyInput">
    defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])
</script>

<style scoped >
    input {
        border: 2px;
        background-image: linear-gradient(30deg,skyblue,purple,white);
        height: 30px;
        font-size: 25;
    }
</style>