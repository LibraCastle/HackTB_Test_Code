<template>
  <div id="app">
    <header>
      <h1>🎴 找到 Ace 游戏</h1>
      <nav>
        <router-link to="/">首页</router-link> |
        <router-link to="/not-a-real-page">测试 404 页面</router-link>
      </nav>
    </header>

    <main>
      <!-- 路由页面会在这里渲染 -->
      <router-view />
    </main>

    <footer>
      <p>© 2025 小游戏实验站</p>
    </footer>
  </div>
</template>

<script setup>
// Vue 3 语法，无需额外 JS
</script>

<style scoped>
#app {
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
}

header {
  margin-bottom: 2rem;
}

nav a {
  margin: 0 10px;
  color: #42b983;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

footer {
  margin-top: 4rem;
  color: #999;
  font-size: 0.9rem;
}
</style>
