<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Search, Bell, User } from 'lucide-vue-next'

const time = ref(new Date())
let timer: number | null = null

onMounted(() => {
  timer = window.setInterval(() => {
    time.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
</script>

<template>
  <header class="relative w-full h-20 mb-4 flex items-start justify-between px-6 pt-2 z-50">
    <!-- Background Shapes -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <!-- Top Border Line with Glow -->
      <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_10px_#f59e0b]" />
      
      <!-- Center Trapezoid -->
      <div 
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-16 bg-[#1c1917] border-b-2 border-amber-500/50"
        style="clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%)"
      >
        <div class="absolute bottom-0 w-full h-[1px] bg-amber-400 shadow-[0_0_15px_#fbbf24]" />
      </div>
      
      <!-- Decorative Lines -->
      <div class="absolute top-4 left-1/2 -translate-x-[320px] w-24 h-[2px] bg-orange-600 -skew-x-12" />
      <div class="absolute top-4 right-1/2 translate-x-[320px] w-24 h-[2px] bg-orange-600 skew-x-12" />
    </div>

    <!-- Left Info -->
    <div class="flex items-center space-x-6 mt-2 relative z-10 text-amber-100/80 text-sm font-tech tracking-wide">
      <div class="flex items-center space-x-2">
        <span class="text-amber-400">天气</span>
        <span>晴天</span>
      </div>
      <div>
        {{ formatDate(time) }}
        <span class="ml-2">{{ time.toLocaleTimeString() }}</span>
      </div>
    </div>

    <!-- Center Title -->
    <div class="absolute left-1/2 -translate-x-1/2 top-1 z-20 text-center">
      <h1 class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-amber-200 font-tech tracking-widest drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
        农田智能管理平台
      </h1>
      <p class="text-[10px] text-amber-400/60 uppercase tracking-[0.5em] mt-1">智慧农田管理系统</p>
    </div>

    <!-- Right Info -->
    <div class="flex items-center space-x-6 mt-2 relative z-10 text-sm">
      <div class="text-amber-100/80 font-tech">
        运行时间 <span class="text-amber-400 text-lg mx-1 font-bold">266</span> 天
      </div>
      <div class="flex items-center space-x-2 text-green-400 font-bold">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span>状态: 安全</span>
      </div>
      
      <!-- User Actions -->
      <div class="flex items-center space-x-3 ml-4">
        <button class="p-2 rounded-full bg-stone-800 hover:bg-stone-700 border border-stone-600 text-amber-400 transition-colors">
          <Search :size="18" />
        </button>
        <button class="p-2 rounded-full bg-stone-800 hover:bg-stone-700 border border-stone-600 text-amber-400 transition-colors relative">
          <Bell :size="18" />
          <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-stone-900" />
        </button>
        <button class="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-900 to-stone-800 border border-orange-700 hover:from-orange-800 hover:to-stone-700 transition-all group">
          <div class="bg-orange-500 rounded-full p-0.5">
            <User :size="16" class="text-white" />
          </div>
          <span class="text-orange-100 group-hover:text-white transition-colors">Admin</span>
        </button>
      </div>
    </div>
  </header>
</template>
