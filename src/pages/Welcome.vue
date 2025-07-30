<template>
  <div class="welcome-bg d-flex flex-column justify-content-center align-items-center w-100 min-vh-100">
    <div class="welcome-card shadow-lg p-5 rounded-4 text-center">
      <h1 class="display-4 mb-3 fw-bold text-gradient">欢迎来到VUE3组件通信部分的学习</h1>
      <p class="lead mb-4 text-secondary">开启你的高效学习之旅！！！</p>
      <button @click="toProps" class="btn btn-primary btn-lg px-5 py-2 shadow-sm">立即开始</button>
    </div>
  </div>
</template>

<script setup lang="ts">
    import router  from '@/router';
    function toProps(){
        router.push({
            path: '/Props'
        })
    }

</script>

<style scoped>
/* 背景科技感渐变 */
.welcome-bg {
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
}

/* 卡片科技感边框和透明效果 */
.welcome-card {
  background: rgba(255, 255, 255, 0.10);
  border: 1.5px solid rgba(255,255,255,0.18);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
}

/* 渐变文字科技感 */
.text-gradient {
  background: linear-gradient(90deg, #00c6ff, #0072ff, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 按钮悬停科技感 */
.btn-primary {
  background: linear-gradient(90deg, #0072ff 0%, #00c6ff 100%);
  border: none;
  transition: box-shadow 0.2s, transform 0.2s;
}
.btn-primary:hover {
  box-shadow: 0 4px 24px rgba(0,198,255,0.25);
  transform: translateY(-2px) scale(1.04);
}
</style>
