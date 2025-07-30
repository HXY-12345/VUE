<template>
    <div class="father-container">
        <h3>父组件</h3>
        <h4>a:{{ a }}</h4>
        <h4>b:{{ b }}</h4>
        <h4>c:{{ c }}</h4>
        <h4>d:{{ d }}</h4>
        <Child :a="a" :b="b" :c="c" :d="d" v-bind="{x: 100, y: 200}" :updateA="updateA"/>
    </div>
</template>

<script setup lang="ts" name="Props-father">
   import Child from './Child.vue';
   import { ref } from 'vue';

   let a = ref(1)
   let b = ref(1)
   let c = ref(1)
   let d = ref(1)

   function updateA(value:number){
        a.value = value
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