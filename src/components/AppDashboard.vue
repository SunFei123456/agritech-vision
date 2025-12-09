<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Activity, Wifi, Leaf, Droplets } from 'lucide-vue-next'
import TechBorder from './TechBorder.vue'
import TechBorderAlt1 from './TechBorderAlt1.vue'
import TechBorderAlt2 from './TechBorderAlt2.vue'
import ChartSection from './ChartSection.vue'
import StatCard from './StatCard.vue'
import { REGION_DATA, NOTICES } from '../constants'
import type { MapPin } from '../types'

import farmlandMap  from '../assets/1.jpg' 

const mapPins: MapPin[] = [
  { x: '20%', y: '40%', status: 'ok' },
  { x: '50%', y: '30%', status: 'warn' },
  { x: '70%', y: '60%', status: 'ok' },
  { x: '35%', y: '70%', status: 'alert' }
]

const getPinClasses = (status: string) => {
  if (status === 'ok') return 'border-cyan-400 bg-cyan-900/50 text-cyan-400'
  if (status === 'warn') return 'border-orange-400 bg-orange-900/50 text-orange-400'
  return 'border-red-500 bg-red-900/50 text-red-500 animate-bounce'
}

const noticeContainer = ref<HTMLElement | null>(null)
let scrollInterval: ReturnType<typeof setInterval> | null = null

const startAutoScroll = () => {
  if (scrollInterval) return
  scrollInterval = setInterval(() => {
    if (noticeContainer.value) {
      const container = noticeContainer.value
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        container.scrollTop = 0
      } else {
        container.scrollTop += 1
      }
    }
  }, 50)
}

const stopAutoScroll = () => {
  if (scrollInterval) {
    clearInterval(scrollInterval)
    scrollInterval = null
  }
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})

const getRankClass = (index: number) => {
  if (index === 0) return 'bg-orange-500 text-white shadow-orange-500/50 shadow-lg'
  if (index === 1) return 'bg-yellow-500 text-white'
  if (index === 2) return 'bg-blue-500 text-white'
  return 'bg-slate-700 text-slate-400'
}
</script>

<template>
  <div class="flex-1 p-6 grid grid-cols-12 gap-6 h-full overflow-y-auto">
    <!-- Main Center Area (Stats + Map + Chart) -->
    <div class="col-span-12 lg:col-span-9 flex flex-col space-y-6">
      
      <!-- Stats Row -->
      <div class="grid grid-cols-4 gap-4">
        <StatCard 
          title="监测总量" 
          value="125%" 
          :icon="Activity" 
          color="blue" 
          sub-text="活跃监测节点总数"
        />
        <StatCard 
          title="设备在线" 
          value="7.4%" 
          :icon="Wifi" 
          color="green" 
          sub-text="设备连接率"
        />
        <StatCard 
          title="土壤质量" 
          value="9.5" 
          :icon="Leaf" 
          color="orange" 
          sub-text="营养成分指数"
        />
        <StatCard 
          title="土壤湿度" 
          value="50.0" 
          :icon="Droplets" 
          color="cyan" 
          sub-text="平均湿度水平"
        />
      </div>

      <!-- Central Map Visualization -->
      <TechBorderAlt1 title="系统概览" class="flex-1 min-h-[400px]">
        <div class="relative w-full h-full rounded overflow-hidden group">
          <!-- Placeholder for 3D Map Image -->
          <div class="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-950/50">
            <!-- Grid floor -->
            <div 
              class="absolute inset-0" 
              :style="{ 
                backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)', 
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg) scale(2)',
                transformOrigin: 'top center'
              }"
            />
          </div>
          
          <img 
            :src="farmlandMap"
            alt="Farmland Map" 
            class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay hover:opacity-70 transition-opacity duration-500"
          />

          <!-- Interactive Markers -->
          <div 
            v-for="(pin, i) in mapPins"
            :key="i"
            class="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform"
            :style="{ left: pin.x, top: pin.y }"
          >
            <div class="relative flex flex-col items-center">
              <div 
                :class="[
                  'w-8 h-8 rounded-full border-2 flex items-center justify-center backdrop-blur-sm',
                  getPinClasses(pin.status)
                ]"
              >
                <div class="w-2 h-2 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
              </div>
              <div class="w-0.5 h-8 bg-current opacity-50" />
              <div class="w-4 h-1 rounded-full bg-current opacity-30 blur-[2px]" />
            </div>
          </div>

          <!-- Map Overlay Stats -->
          <div class="absolute top-4 right-4 bg-slate-900/80 border border-slate-700 p-3 rounded backdrop-blur">
            <div class="text-xs text-slate-400 mb-1">活跃区域</div>
            <div class="text-xl font-bold text-white">42 / 50</div>
          </div>
        </div>
      </TechBorderAlt1>

      <!-- Bottom Chart -->
      <TechBorderAlt2 title="土壤监测数据对比" class="h-[320px]">
        <ChartSection />
      </TechBorderAlt2>
    </div>

    <!-- Right Sidebar (Rankings & Notices) -->
    <div class="col-span-12 lg:col-span-3 flex flex-col space-y-6">
      
      <!-- Regional Distribution -->
      <TechBorder title="监测点分布" class="flex-1">
        <div class="space-y-3 overflow-y-auto max-h-[600px] pr-2">
          <div 
            v-for="(region, index) in REGION_DATA" 
            :key="region.id" 
            class="flex items-center space-x-3 text-sm p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors cursor-pointer"
          >
            <div :class="['w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs shrink-0', getRankClass(index)]">
              {{ index + 1 }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-slate-200 font-medium mb-1">{{ region.name }}</div>
              <div class="flex items-center space-x-4 text-xs">
                <span class="text-cyan-400 font-tech">
                  <span class="text-slate-500">纬度:</span> {{ region.lat.toFixed(4) }}°
                </span>
                <span class="text-orange-400 font-tech">
                  <span class="text-slate-500">经度:</span> {{ region.lng.toFixed(4) }}°
                </span>
              </div>
            </div>
          </div>
        </div>
      </TechBorder>

      <!-- System Notices -->
      <TechBorder title="系统公告" class="h-[250px]">
        <div 
          ref="noticeContainer"
          class="space-y-3 overflow-y-auto h-full scrollbar-hide"
          @mouseenter="stopAutoScroll"
          @mouseleave="startAutoScroll"
        >
          <div 
            v-for="notice in NOTICES" 
            :key="notice.id" 
            class="group cursor-pointer"
          >
            <div class="flex items-start space-x-3 mb-1">
              <div class="mt-1">
                <div class="w-2 h-2 bg-cyan-500 rotate-45 group-hover:bg-orange-500 transition-colors" />
              </div>
              <div class="flex-1">
                <div class="text-xs text-cyan-300 font-bold mb-0.5">[{{ notice.type }}]</div>
                <div class="text-sm text-slate-300 leading-tight group-hover:text-white transition-colors">{{ notice.content }}</div>
                <div class="text-[10px] text-slate-600 mt-1 font-tech">{{ notice.date }}</div>
              </div>
            </div>
            <div class="h-[1px] w-full bg-slate-800 mt-2" />
          </div>
        </div>
      </TechBorder>
    </div>
  </div>
</template>
