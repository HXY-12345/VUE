<template>
    <div class="child-container">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <button @click="emit('send-toy',toy)">传给父</button>
       
    </div>
</template>

<script setup lang="ts" name="Props-child">
    import { ref, onMounted } from 'vue';

    //数据
    let toy = ref('奥特曼')

    // 声明事件
    const emit = defineEmits(['send-toy'])

    // onMounted(()=>{
    //     setTimeout(() => {
    //         emit('haha')
    //     }, 3000);
    // })
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