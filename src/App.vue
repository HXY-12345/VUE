<script setup lang="ts">
// 此处暂时无需脚本逻辑
</script>

<template>
  <div class="container-fluid h-100">
    <div class="row h-100 g-0">
      <!-- 左侧导航栏 -->
      <nav class="col-2 bg-light d-flex flex-column align-items-start p-4 border-end shadow-sm" style="min-height: 100vh;">
        <!-- 欢迎页 -->
        <RouterLink to="/welcome" active-class="active" class="nav-link  mb-3 p-3 rounded w-100">📌 首页</RouterLink>
        <!-- 导航项1 -->
        <RouterLink to="/props" active-class="active" class="nav-link mb-3 p-3 rounded w-100">⚙️ 1.Props</RouterLink>

        <!-- 导航项2 -->
        <RouterLink to="/custom-event" active-class="active" class="nav-link mb-3 p-3 rounded w-100">🔍 2.Custom-event(自定义事件)</RouterLink>
        
        <!-- 导航项3 -->
        <RouterLink to="/mitt" active-class="active" class="nav-link mb-3 p-3 rounded w-100">🛒 3.Mitt</RouterLink>
        
        <!-- 导航项4 -->
        <RouterLink to="/v-model" active-class="active" class="nav-link mb-3 p-3 rounded w-100">👤 4.v-model</RouterLink>
        
        <!-- 导航项5 -->
        <RouterLink to="/attrs" active-class="active" class="nav-link mb-3 p-3 rounded w-100">⚙️ 5.$attrs</RouterLink>

        <!-- 导航项6 -->
        <RouterLink to="/ref-parent" active-class="active" class="nav-link mb-3 p-3 rounded w-100">🔍 6.$refs和$parent</RouterLink>
      
        <!-- 导航项7 -->
        <RouterLink to="/provide-inject" active-class="active" class="nav-link mb-3 p-3 rounded w-100">🛒 7.provide&inject</RouterLink>

        <!-- 导航项8 -->
        <RouterLink to="/pinia" active-class="active" class="nav-link mb-3 p-3 rounded w-100">👤 8.Pinia</RouterLink>

        <!-- 导航项9 -->
        <RouterLink to="/slot" active-class="active" class="nav-link mb-3 p-3 rounded w-100">⚙️ 9.slot</RouterLink>
      </nav>
      <!-- 右侧展示区 -->
      <main class="col-10 d-flex align-items-center justify-content-center bg-white">
        <Router-View></Router-View>
        <!-- <div class="text-center p-5">
          <h2 class="mb-4">这里是展示区</h2>
          <p class="text-muted">请选择左侧的导航项进行操作。</p>
          
        </div> -->
      </main>
    </div>
  </div>
</template>

<style scoped>
/* 全局样式 */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 导航栏悬停效果 */
.nav-link {
  color: #333;
}
.nav-link:hover {
  background-color: #f0f0f0;
  transform: translateX(5px);
}
.nav-link.active {
  background-color: #e9ecef;
  font-weight: bold;
}
</style>
