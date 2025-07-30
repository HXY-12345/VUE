<template>
    <div class="father-container">
        <h3>父组件</h3>
        <h4>汽车：{{ car }}</h4>
        <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
        <!-- 传递数据 -->
        <Child :car="car" :sendToy="getToy"/>
    </div>
</template>

<script setup lang="ts" name="Props-father">
    import Child from './Child.vue';
    import { ref } from 'vue';

    //数据
    let car = ref('奔驰')

    let toy = ref('')
    

    //方法
    function getToy(value:string){
        console.log('子传给父', value)
        toy.value = value
    }
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