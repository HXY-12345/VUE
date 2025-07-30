<template>
    <div class="father-container">
        <h3>参考之前的Pinia</h3>
    </div>
</template>

<script setup lang="ts" name="Props-father">
   
</script>

<style scoped>
    /* 父组件外层为长的圆角矩形 */
    .father-container {
    width: 80%; /* 宽度可根据需要调整 */
    margin: 40px auto;
    padding: 32px 24px;
    background: #93bce5;
    border-radius: 32px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>