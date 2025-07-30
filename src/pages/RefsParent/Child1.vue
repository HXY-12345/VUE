<template>
    <div class="child-container">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>书：{{ book }}本</h4>
        <button @click="minusHouse($parent)">拿父的房产</button>
    </div>
</template>

<script setup lang="ts" name="Props-child">
    import { ref } from 'vue';

    // 数据
    let toy = ref('奥特曼')
    let book = ref(3)

    // 方法
    function minusHouse(parent:any){
        parent.house -= 1
    }

    // 把数据交给外部
    defineExpose({toy,book})


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