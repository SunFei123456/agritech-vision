<script setup lang="ts">
defineProps<{
  title?: string
  class?: string
}>()
</script>

<template>
  <div :class="['relative group', $props.class]">
    <!-- Main background -->
    <div class="absolute inset-0 bg-white/80 backdrop-blur-md rounded border border-emerald-500/10" />
    
    <!-- Glowing border lines -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Top border with glow -->
      <div class="absolute top-0 left-4 right-4 h-[1px]">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm" />
      </div>
      <!-- Bottom border -->
      <div class="absolute bottom-0 left-4 right-4 h-[1px]">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      </div>
      <!-- Left border -->
      <div class="absolute left-0 top-4 bottom-4 w-[1px]">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent" />
      </div>
      <!-- Right border -->
      <div class="absolute right-0 top-4 bottom-4 w-[1px]">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent" />
      </div>
    </div>

    <!-- Corner brackets -->
    <div class="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-emerald-400 rounded-tl" />
    <div class="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-emerald-400 rounded-tr" />
    <div class="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-emerald-400 rounded-bl" />
    <div class="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-emerald-400 rounded-br" />

    <!-- Corner dots -->
    <div class="absolute -top-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse" />
    <div class="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse" />
    <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse" />
    <div class="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse" />

    <!-- Content -->
    <div class="relative z-10 p-5 h-full flex flex-col">
      <div v-if="title" class="flex items-center mb-4">
        <!-- Title icon -->
        <div class="relative mr-3">
          <div class="w-6 h-6 border border-emerald-400/50 rotate-45 flex items-center justify-center">
            <div class="w-2 h-2 bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          </div>
        </div>
        <h3 class="text-lg font-bold text-emerald-800 tracking-wider uppercase">
          {{ title }}
        </h3>
        <!-- Decorative line -->
        <div class="ml-4 flex-1 h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
        <!-- Status indicator -->
        <div class="ml-3 flex items-center space-x-1">
          <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          <span class="text-[10px] text-emerald-600/70 uppercase tracking-widest">Live</span>
        </div>
      </div>
      <div class="flex-1 relative overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>
