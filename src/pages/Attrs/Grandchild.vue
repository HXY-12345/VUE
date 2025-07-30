<template>
    <div class="grandchild-container">
        <h3>孙组件</h3>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <h4>x: {{ x }}</h4>
        <button @click="updateA(a)">更新祖组件数据</button>
    </div>
</template>

<script setup lang="ts" name="Props-child">

   defineProps(['a','b','x','updateA'])

</script>

<style scoped>
    /* 孙组件外层为长的圆角矩形 */
    .grandchild-container {
    width: 60%; /* 宽度可根据需要调整 */
    margin: 40px auto;
    padding: 32px 24px;
    background: #dcedab;
    border-radius: 32px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>