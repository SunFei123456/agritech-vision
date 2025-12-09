<script setup lang="ts">
defineProps<{
  title?: string
  class?: string
}>()
</script>

<template>
  <div :class="['relative', $props.class]">
    <!-- Background with inner glow -->
    <div class="absolute inset-0 bg-slate-950/90 rounded-lg backdrop-blur-sm" />
    <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 rounded-lg" />
    
    <!-- Double border effect -->
    <div class="absolute inset-0 rounded-lg border border-amber-500/30" />
    <div class="absolute inset-[3px] rounded-lg border border-amber-500/10" />
    
    <!-- Corner decorations - circuit style -->
    <svg class="absolute top-0 left-0 w-12 h-12" viewBox="0 0 48 48" fill="none">
      <path d="M0 16 L0 4 L4 0 L16 0" stroke="#f59e0b" stroke-width="1.5" fill="none" />
      <circle cx="4" cy="4" r="2" fill="#f59e0b" />
      <path d="M8 0 L8 8 L0 8" stroke="#f59e0b" stroke-width="0.5" opacity="0.5" />
    </svg>
    <svg class="absolute top-0 right-0 w-12 h-12" viewBox="0 0 48 48" fill="none">
      <path d="M48 16 L48 4 L44 0 L32 0" stroke="#f59e0b" stroke-width="1.5" fill="none" />
      <circle cx="44" cy="4" r="2" fill="#f59e0b" />
      <path d="M40 0 L40 8 L48 8" stroke="#f59e0b" stroke-width="0.5" opacity="0.5" />
    </svg>
    <svg class="absolute bottom-0 left-0 w-12 h-12" viewBox="0 0 48 48" fill="none">
      <path d="M0 32 L0 44 L4 48 L16 48" stroke="#f59e0b" stroke-width="1.5" fill="none" />
      <circle cx="4" cy="44" r="2" fill="#f59e0b" />
      <path d="M8 48 L8 40 L0 40" stroke="#f59e0b" stroke-width="0.5" opacity="0.5" />
    </svg>
    <svg class="absolute bottom-0 right-0 w-12 h-12" viewBox="0 0 48 48" fill="none">
      <path d="M48 32 L48 44 L44 48 L32 48" stroke="#f59e0b" stroke-width="1.5" fill="none" />
      <circle cx="44" cy="44" r="2" fill="#f59e0b" />
      <path d="M40 48 L40 40 L48 40" stroke="#f59e0b" stroke-width="0.5" opacity="0.5" />
    </svg>

    <!-- Top/bottom accent lines -->
    <div class="absolute top-0 left-14 right-14 flex justify-center">
      <div class="h-[2px] w-1/3 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_#fbbf24]" />
    </div>
    <div class="absolute bottom-0 left-14 right-14 flex justify-center">
      <div class="h-[2px] w-1/4 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
    </div>

    <!-- Content -->
    <div class="relative z-10 p-5 h-full flex flex-col">
      <div v-if="title" class="flex items-center mb-4">
        <!-- Hexagon icon -->
        <div class="relative w-7 h-7 mr-3">
          <div class="absolute inset-0 bg-amber-500/20 rotate-45 rounded-sm" />
          <div class="absolute inset-1 bg-amber-400/40 rotate-45 rounded-sm" />
          <div class="absolute inset-2 bg-amber-400 rotate-45 rounded-sm shadow-[0_0_10px_#fbbf24]" />
        </div>
        <h3 class="text-lg font-bold text-amber-100 tracking-wide">
          {{ title }}
        </h3>
        <!-- Data flow decoration -->
        <div class="ml-4 flex-1 flex items-center space-x-1">
          <div class="flex-1 h-[1px] bg-gradient-to-r from-amber-500/40 to-transparent" />
          <div class="w-1 h-1 bg-amber-400 rounded-full animate-pulse" />
          <div class="w-8 h-[1px] bg-amber-400/60" />
          <div class="w-1 h-1 bg-amber-400 rounded-full" />
        </div>
      </div>
      <div class="flex-1 relative overflow-hidden">
        <slot />
      </div>
    </div>

    <!-- Subtle grid overlay -->
    <div 
      class="absolute inset-0 opacity-[0.03] pointer-events-none rounded-lg"
      :style="{
        backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }"
    />
  </div>
</template>
