<template>
    <div class="child-container">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <button @click="emitter.emit('send-toy',toy)">发送给Child2数据</button>
    </div>
</template>

<script setup lang="ts" name="Props-child">
    import emitter from '@/utils/emitter';
    import { ref } from 'vue';
    let toy = ref('奥特曼') 
</script>

<style scoped>
    /* 子组件外层为长的圆角矩形 */
    .child-container {
    width: 60%; /* 宽度可根据需要调整 */
    margin: 40px auto;
    padding: 32px 24px;
    background: #e3aec2;
    border-radius: 32px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>