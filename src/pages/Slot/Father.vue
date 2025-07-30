<template>
    <div class="father-container">
        <h3>父组件</h3>
        <h4>{{ msg }}</h4>
        <input type="text" v-model="msg">
        <br>
        <div class="content">
            <Category>
                <template v-slot:s1="param">
                    <h2>热门游戏</h2>
                    <ul>
                        <li v-for="g in param.games" :key="g.id">{{ g.name }}</li>
                    </ul>
                </template>              
            </Category>

            <Category>
                <template v-slot:s1="param">
                    <h2>热门游戏</h2>
                    <ol>
                        <li v-for="g in param.games" :key="g.id">{{ g.name }}</li>
                    </ol>
                </template>              
            </Category>

            <Category>
                <template v-slot:s1="param">
                    <h2>热门游戏</h2>
                    <ul>
                        <h3 v-for="g in param.games" :key="g.id">{{ g.name }}</h3>
                    </ul>
                </template>              
            </Category>

            <!-- <Category>
                <template v-slot:s1>
                    <h2>今日美食</h2>
                    <img :src="imgUrl" alt="图片">
                </template>
            </Category> -->

            <!-- <Category>
                <template #s1>
                    <h2>热门电影</h2>
                    <video :src="vidUrl" controls></video>
                </template>          
            </Category> -->
        </div>

    </div>
</template>

<script setup lang="ts" name="Props-father">
   import Category from './Category.vue';
   import { ref, customRef } from 'vue';
   import useMsg from '@/hooks/useMsg';

   let {msg} = useMsg('Hello',2000)



//    let imgUrl = 'https://img95.699pic.com/photo/60002/4108.jpg_wh860.jpg'
//    let vidUrl = 'https://vjs.zencdn.net/v/oceans.mp4'
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
    /* align-items: center; */
    }

    .content{
        display: flex;
        justify-content: space-evenly;
    }

    img,video{
        width: 100%;
    }

    h2 {
        background-color: beige;
        text-align: center;
        font-size: 30px;
        font-weight: 800;
    }
</style>