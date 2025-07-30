<template>
    <div class="grandchild-container">
        <h3>孙组件</h3>
        <h4>从祖组件获得的银子：{{ money }}万元</h4>
        <h4>从祖组件获得的汽车：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
        <button @click="updateMoney(1)">改变祖组件的银子</button>
    </div>
</template>

<script setup lang="ts" name="Props-child">
    import { inject } from 'vue';
     let car = inject('car',{brand:'未知',price:0})
     let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(param:number)=>{}})
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