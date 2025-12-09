<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  value: string
  icon: Component
  color: 'blue' | 'green' | 'orange' | 'cyan'
  subText: string
}>()

const colorClasses: Record<string, string> = {
  blue: 'from-blue-600 to-blue-900 text-blue-100',
  green: 'from-emerald-500 to-emerald-900 text-emerald-100',
  orange: 'from-orange-500 to-orange-900 text-orange-100',
  cyan: 'from-cyan-500 to-cyan-900 text-cyan-100',
}

const getIconColorClass = (color: string) => {
  const map: Record<string, string> = {
    blue: 'text-blue-600',
    green: 'text-emerald-500',
    orange: 'text-orange-500',
    cyan: 'text-cyan-500',
  }
  return map[color] || 'text-blue-600'
}
</script>

<template>
  <div class="relative group overflow-hidden rounded-md p-[1px] bg-gradient-to-br from-slate-700 to-slate-900">
    <div class="h-full bg-slate-900/90 backdrop-blur rounded-md p-4 relative overflow-hidden">
      <div :class="['absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity', getIconColorClass(color)]">
        <component :is="icon" :size="48" />
      </div>
      <h4 class="text-slate-400 text-sm uppercase tracking-wider mb-2 font-medium">{{ title }}</h4>
      <div :class="['text-3xl font-bold font-tech bg-clip-text text-transparent bg-gradient-to-r', colorClasses[color]]">
        {{ value }}
      </div>
      <div class="mt-2 text-xs text-slate-500">{{ subText }}</div>
      <!-- Bottom line -->
      <div :class="['absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r', colorClasses[color]]" />
    </div>
  </div>
</template>
