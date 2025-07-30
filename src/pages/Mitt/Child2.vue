<template>
    <div class="child-container">
        <h3>子组件2</h3>
        <h4>电脑：{{ computer }}</h4>
        <h4>收到Child1的数据：{{ toy }}</h4>
    </div>
</template>

<script setup lang="ts" name="Props-child">
    import { onUnmounted, ref } from 'vue';
    import emitter from '@/utils/emitter';

    let computer = ref('联想')
    let toy = ref('')

    // 给emitter绑定send-toy事件
    emitter.on('send-toy',(value:any)=>{
        toy.value = value
    })

    // 在组件卸载时解绑send-toy事件
    onUnmounted(()=>{
        emitter.off('send-toy')
    })
</script>

<style scoped>
    /* 子组件外层为长的圆角矩形 */
    .child-container {
    width: 60%; /* 宽度可根据需要调整 */
    margin: 40px auto;
    padding: 32px 24px;
    background: #b0f3ce;
    border-radius: 32px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>