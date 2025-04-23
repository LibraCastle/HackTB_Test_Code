<template>
    <div class="game-container">
      <h1>404 Not Found</h1>
      <p>但你可以玩个蒙提霍尔小游戏</p>
  
      <div v-if="!result">
        <p v-if="step === 0">点击一张牌寻找 Ace！</p>
        <p v-if="step === 1">我帮你翻了一张 Queen，要换牌吗？</p>
  
        <div class="cards">
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="card"
            :class="{ revealed: revealed[i], selected: selected === i }"
            @click="handleCardClick(i)"
          >
            <span v-if="revealed[i]">{{ card }}</span>
            <span v-else>❓</span>
          </div>
        </div>
  
        <div v-if="step === 1" class="actions">
          <button @click="switchCard">换一张</button>
          <button @click="revealResult">坚持原选</button>
        </div>
      </div>
  
      <div v-else>
        <h2>{{ result === 'A' ? '🎉 你找到了 Ace!' : '😢 你只找到了 Queen' }}</h2>
        <p>正确牌组： {{ cards.join(' - ') }}</p>
        <button @click="resetGame">再试一次</button>
        <button @click="goHome">返回首页</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const cards = ref([])
  const selected = ref(null)
  const revealed = ref([false, false, false])
  const step = ref(0)
  const result = ref(null)
  
  // 洗牌，可以DIY自己的洗牌算法
  function shuffleDeck() {
    const deck = ['A', 'Q', 'Q']
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[deck[i], deck[j]] = [deck[j], deck[i]]
    }
    return deck
  }
  
  function handleCardClick(index) {
    if (step.value !== 0 || selected.value !== null) return
    selected.value = index
    revealOneQueen()
  }
  
  function revealOneQueen() {
    step.value = 1
    const indices = [0, 1, 2].filter(i => i !== selected.value && cards.value[i] === 'Q')
    const toReveal = indices[Math.floor(Math.random() * indices.length)]
    revealed.value[toReveal] = true
  }
  
  function switchCard() {
    const remaining = [0, 1, 2].find(i => i !== selected.value && !revealed.value[i])
    selected.value = remaining
    revealResult()
  }
  
  function revealResult() {
    revealed.value = [true, true, true]
    result.value = cards.value[selected.value]
  }
  
  function resetGame() {
    cards.value = shuffleDeck()
    revealed.value = [false, false, false]
    selected.value = null
    result.value = null
    step.value = 0
  }
  
  function goHome() {
    window.location.href = '/'
  }
  
  resetGame()
  </script>
  
  <style scoped>
  .game-container {
    text-align: center;
    padding: 2rem;
    font-family: sans-serif;
  }
  .cards {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .card {
    width: 60px;
    height: 90px;
    border: 2px solid #333;
    margin: 0 10px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #f9f9f9;
    border-radius: 8px;
    transition: transform 0.3s;
  }
  .card.selected {
    border-color: blue;
    transform: scale(1.1);
  }
  .card.revealed {
    background: #fff3cd;
  }
  .actions {
    margin-top: 1rem;
  }
  .actions button {
    margin: 0 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  </style>
  