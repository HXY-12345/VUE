<template>
    <div class="category">
        <!-- 插槽 -->
        <!-- <slot>默认内容</slot> -->
        <!-- 具名插槽 -->
         <!-- <slot name="s1">s1默认内容</slot>
         <slot name="s2"></slot> -->
         <!-- 作用域插槽 -->
          <slot name="s1" :games="games"></slot>
          <!-- <h4>prson:{{person}}</h4>
          <h4>rawPerson:{{ rawPerson }}</h4> -->
    </div>
</template>

<script setup lang="ts" name="Props-child">
      import { reactive, ref, toRaw} from 'vue';

        let games = reactive([
        {id:'01', name:'王者荣耀'},
        {id:'02', name:'我的世界'},
        {id:'03', name:'英雄联盟'},
        {id:'04', name:'守望先锋'},
        ])

        /* toRaw */
        // 响应式对象
        let person = reactive({name:'tony',age:18})
        // 原始对象
        let rawPerson = toRaw(person)

        console.log('person:',person);
        console.log('Rawperson',rawPerson);
        
        


</script>

<style scoped>
    .category{
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        padding: 10px;
        height: 250px;
        width: 300px;
    }

</style>