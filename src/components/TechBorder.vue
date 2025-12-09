<script setup lang="ts">
defineProps<{
  title?: string
  class?: string
}>()

const borderColor = '#fbbf24' // amber-400
const secondaryColor = 'rgba(251, 191, 36, 0.3)'
</script>

<template>
  <div :class="['relative', $props.class]">
    <!-- Background Layer with transparency and blur -->
    <div class="absolute inset-0 bg-[#1c1917]/40 backdrop-blur-sm rounded-lg border border-stone-800/50" />
    
    <!-- Corner 1: Top-Left -->
    <div class="absolute top-0 left-0 w-24 h-24 pointer-events-none overflow-hidden rounded-tl-lg z-10">
      <svg width="100%" height="100%" viewBox="0 0 96 96" fill="none">
        <path :d="`M 2 94 V 20 L 20 2 H 94`" :stroke="borderColor" stroke-width="2" fill="none" stroke-linecap="square" />
        <path :d="`M 8 94 V 24 L 24 8 H 94`" :stroke="secondaryColor" stroke-width="1" fill="none" />
        <path :d="`M 2 40 H 8 M 2 55 H 8 M 2 70 H 8`" :stroke="borderColor" stroke-width="2" />
        <path :d="`M 40 2 V 8 M 55 2 V 8 M 70 2 V 8`" :stroke="borderColor" stroke-width="2" />
        <rect x="0" y="0" width="8" height="8" :fill="borderColor" />
      </svg>
    </div>

    <!-- Corner 2: Top-Right -->
    <div class="absolute top-0 right-0 w-24 h-24 pointer-events-none overflow-hidden rounded-tr-lg z-10">
      <svg width="100%" height="100%" viewBox="0 0 96 96" fill="none">
        <path :d="`M 94 94 V 20 L 76 2 H 2`" :stroke="borderColor" stroke-width="2" fill="none" stroke-linecap="square" />
        <path :d="`M 88 94 V 24 L 72 8 H 2`" :stroke="secondaryColor" stroke-width="1" fill="none" />
        <path :d="`M 94 40 H 88 M 94 55 H 88 M 94 70 H 88`" :stroke="borderColor" stroke-width="2" />
        <path :d="`M 56 2 V 8 M 41 2 V 8 M 26 2 V 8`" :stroke="borderColor" stroke-width="2" />
        <rect x="88" y="0" width="8" height="8" :fill="borderColor" />
      </svg>
    </div>

    <!-- Corner 3: Bottom-Right -->
    <div class="absolute bottom-0 right-0 w-24 h-24 pointer-events-none overflow-hidden rounded-br-lg z-10">
      <svg width="100%" height="100%" viewBox="0 0 96 96" fill="none">
        <path :d="`M 94 2 V 76 L 76 94 H 2`" :stroke="borderColor" stroke-width="2" fill="none" stroke-linecap="square" />
        <path :d="`M 88 2 V 72 L 72 88 H 2`" :stroke="secondaryColor" stroke-width="1" fill="none" />
        <path :d="`M 94 56 H 88 M 94 41 H 88 M 94 26 H 88`" :stroke="borderColor" stroke-width="2" />
        <path :d="`M 56 94 V 88 M 41 94 V 88 M 26 94 V 88`" :stroke="borderColor" stroke-width="2" />
        <rect x="88" y="88" width="8" height="8" :fill="borderColor" />
      </svg>
    </div>

    <!-- Corner 4: Bottom-Left -->
    <div class="absolute bottom-0 left-0 w-24 h-24 pointer-events-none overflow-hidden rounded-bl-lg z-10">
      <svg width="100%" height="100%" viewBox="0 0 96 96" fill="none">
        <path :d="`M 2 2 V 76 L 20 94 H 94`" :stroke="borderColor" stroke-width="2" fill="none" stroke-linecap="square" />
        <path :d="`M 8 2 V 72 L 24 88 H 94`" :stroke="secondaryColor" stroke-width="1" fill="none" />
        <path :d="`M 2 56 H 8 M 2 41 H 8 M 2 26 H 8`" :stroke="borderColor" stroke-width="2" />
        <path :d="`M 40 94 V 88 M 55 94 V 88 M 70 94 V 88`" :stroke="borderColor" stroke-width="2" />
        <rect x="0" y="88" width="8" height="8" :fill="borderColor" />
      </svg>
    </div>

    <!-- Title & Content Container -->
    <div class="relative z-0 p-6 h-full flex flex-col">
      <div v-if="title" class="flex items-center mb-5 relative">
        <!-- Animated Title Underline -->
        <div class="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-amber-900/0 via-amber-500/30 to-amber-900/0" />
        <div class="absolute -bottom-2 left-0 w-1/4 h-[1px] bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
        
        <!-- Title Start Decor -->
        <div class="mr-3 flex items-center justify-center w-5 h-5 border border-amber-500/30 rounded bg-stone-950/50">
          <div class="w-1.5 h-1.5 bg-amber-400 rounded-sm shadow-[0_0_5px_#fbbf24]" />
        </div>
        
        <h3 class="text-xl font-bold text-white tracking-[0.15em] font-tech uppercase drop-shadow-md">
          {{ title }}
        </h3>
        
        <!-- Title End Decor (Status Dots) -->
        <div class="ml-auto flex space-x-1.5 opacity-60">
          <div class="w-1 h-3 bg-amber-800 skew-x-12" />
          <div class="w-1 h-3 bg-amber-600 skew-x-12" />
          <div class="w-1 h-3 bg-amber-400 skew-x-12 animate-pulse" />
        </div>
      </div>
      <div class="flex-1 relative overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>
