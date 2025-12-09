<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
</script>

<template>
  <div class="flex flex-col h-screen w-screen bg-slate-50 text-slate-900 overflow-hidden relative">
    <!-- Global Background Grid -->
    <div 
      class="absolute inset-0 pointer-events-none z-0"
      :style="{
        backgroundImage: 'linear-gradient(rgba(203, 213, 225, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(203, 213, 225, 0.4) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }"
    />
    
    <!-- Global Glow Spots -->
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/40 blur-[100px] rounded-full pointer-events-none" />
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-200/40 blur-[100px] rounded-full pointer-events-none" />

    <!-- Main Content -->
    <AppHeader />
    
    <div class="flex flex-1 overflow-hidden relative z-10">
      <AppSidebar />
      <router-view />
    </div>
  </div>
</template>
