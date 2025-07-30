<template>
    <div class="father-container">
        <h3>父组件</h3>
        <div class="mb-3">
            <!-- v-model用在HTML标签上 -->
            <label class="form-label">v-model:</label>
            <input type="text" class="form-control" v-model="username">
            <br>    
            <label class="form-label">数据->页面:</label>
            <input type="text" class="form-control" :value="username">   
            <br>  
            <label class="form-label">数据<=>页面:</label>
            <input type="text" class="form-control" :value="username" @input="username = (<HTMLInputElement>$event.target).value">
            <br>
            <!-- v-model用在组件标签上 -->
            <label class="form-label">自定义组件:</label>   
            <!-- <MyInput class="form-control" v-model="username"/> -->
            <MyInput 
                :modelValue="username" 
                @update:modelValue="username = $event" 
                class="form-control" />
            <!-- 或(前提是组件(UI组件库)中写好modelValue和update:modelValue) -->
            <MyInput v-model="username" class="form-control"/>
        </div>
    </div>
</template>

<script setup lang="ts" name="V-model-Father">
    import { ref } from 'vue';
    import MyInput from './MyInput.vue';

    //数据
    let username = ref('张三')
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