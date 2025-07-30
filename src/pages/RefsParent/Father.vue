<template>
    <div class="father-container">
        <h3>父组件</h3>
        <h4>房子：{{ house }}套</h4>
        <button @click="changeToy">修改Child1的玩具</button>
        <button @click="changeComputer">修改Child2的电脑</button>
        <button @click="getAll($refs)">获取所有子组件的实例对象,更加书的数量</button>
        <Child1 ref="c1"/>
        <Child2 ref="c2"/>
    </div>
</template>

<script setup lang="ts" name="Props-father">
   import Child1 from './Child1.vue';
   import Child2 from './Child2.vue';
   import { ref } from 'vue';
   
   // 数据
   let house = ref(4)
   let c1 = ref()
   let c2 = ref()

   // 方法
   function changeToy(){
    c1.value.toy = '小猪佩奇'
   }

   function changeComputer(){
    c2.value.computer = '外星人'
   }

   function getAll(refs:{[key:string]:any}){
    
        for(let key in refs){
            refs[key].book += 3
        }
    }
    
    // 向外部提供数据
    defineExpose({house})
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