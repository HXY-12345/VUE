<template>
    <div class="father-container">
        <h3>父组件</h3>
        <h4>银子：{{ money }}万元</h4>
        <h4>汽车：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
        <Child/>
    </div>
</template>

<script setup lang="ts" name="Props-father">
   import Child from './Child.vue';
   import {ref, reactive, provide } from 'vue';

   let money = ref(100)
   let car = reactive({
    brand: '奔驰',
    price: 100
   }) 

   function updateMoney(value:number){
    money.value -= value
   }

   // 向后代提供数据
   provide('money', money)
   provide('car', car)
   provide('moneyContext',{money,updateMoney})

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