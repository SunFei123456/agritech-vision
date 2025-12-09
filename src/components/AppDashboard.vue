<script setup lang="ts">
import { Settings, BarChart3, FileText, Bell, Users, Database, Map, Zap } from 'lucide-vue-next'
import TechBorder from './TechBorder.vue'
import TechBorderAlt1 from './TechBorderAlt1.vue'
import TechBorderAlt2 from './TechBorderAlt2.vue'
import { REGION_DATA } from '../constants'
import type { MapPin } from '../types'

import farmlandMap  from '../assets/1.jpg' 

const mapPins: MapPin[] = [
  { x: '20%', y: '40%', status: 'ok' },
  { x: '50%', y: '30%', status: 'warn' },
  { x: '70%', y: '60%', status: 'ok' },
  { x: '35%', y: '70%', status: 'alert' }
]

const getPinClasses = (status: string) => {
  if (status === 'ok') return 'border-emerald-500 bg-emerald-100/80 text-emerald-700 shadow-sm'
  if (status === 'warn') return 'border-amber-500 bg-amber-100/80 text-amber-700 shadow-sm'
  return 'border-red-500 bg-red-100/80 text-red-700 animate-bounce shadow-sm'
}

// 功能区按钮配置
const functionButtons = [
  { name: '数据分析', icon: BarChart3, color: 'from-blue-500 to-blue-700', hoverColor: 'hover:shadow-blue-500/50' },
  { name: '报表管理', icon: FileText, color: 'from-emerald-500 to-emerald-700', hoverColor: 'hover:shadow-emerald-500/50' },
  { name: '告警中心', icon: Bell, color: 'from-orange-500 to-orange-700', hoverColor: 'hover:shadow-orange-500/50' },
  { name: '用户管理', icon: Users, color: 'from-purple-500 to-purple-700', hoverColor: 'hover:shadow-purple-500/50' },
  { name: '数据库', icon: Database, color: 'from-cyan-500 to-cyan-700', hoverColor: 'hover:shadow-cyan-500/50' },
  { name: '地图服务', icon: Map, color: 'from-indigo-500 to-indigo-700', hoverColor: 'hover:shadow-indigo-500/50' },
  { name: '系统设置', icon: Settings, color: 'from-slate-500 to-slate-700', hoverColor: 'hover:shadow-slate-500/50' },
  { name: '快速操作', icon: Zap, color: 'from-amber-500 to-amber-700', hoverColor: 'hover:shadow-amber-500/50' },
]

const getRankClass = (index: number) => {
  if (index === 0) return 'bg-emerald-500 text-white shadow-emerald-500/30 shadow-lg'
  if (index === 1) return 'bg-emerald-400 text-white'
  if (index === 2) return 'bg-emerald-300 text-white'
  return 'bg-slate-200 text-slate-500'
}
</script>

<template>
  <div class="flex-1 p-6 grid grid-cols-12 gap-6 h-full overflow-y-auto">
    <!-- Main Center Area (Stats + Map + Chart) -->
    <div class="col-span-12 lg:col-span-9 flex flex-col space-y-6">
      
      <!-- Central Map Visualization -->
      <TechBorderAlt1 title="系统概览" class="flex-1 min-h-[400px]">
        <div class="relative w-full h-full rounded overflow-hidden group">
          <!-- Placeholder for 3D Map Image -->
          <div class="absolute inset-0 bg-gradient-to-b from-slate-100 to-emerald-50/50">
            <!-- Grid floor -->
            <div 
              class="absolute inset-0" 
              :style="{ 
                backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)', 
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
          <div class="absolute top-4 right-4 bg-white/80 border border-slate-200 p-3 rounded backdrop-blur shadow-sm">
            <div class="text-xs text-slate-500 mb-1">活跃区域</div>
            <div class="text-xl font-bold text-slate-800">42 / 50</div>
          </div>
        </div>
      </TechBorderAlt1>

      <!-- 功能区 -->
      <TechBorderAlt2 title="功能区" class="h-[340px]">
        <div class="grid grid-cols-4 gap-4 h-full py-2">
          <button
            v-for="btn in functionButtons"
            :key="btn.name"
            class="group relative flex flex-col items-center justify-center rounded-xl p-3 transition-all duration-300 cursor-pointer overflow-hidden border border-slate-200 bg-white hover:border-emerald-500/50 hover:bg-emerald-50/50 shadow-sm hover:shadow-md"
          >
            <!-- Hover Gradient Background (Hidden by default, fades in) -->
            <div 
              :class="[
                'absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br', 
                btn.color
              ]" 
            />
            
            <!-- Icon Container -->
            <div 
              :class="[
                'w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 shadow-sm',
                'bg-gradient-to-br border border-white/50 relative z-10',
                btn.color
              ]"
            >
              <component :is="btn.icon" class="w-5 h-5 text-white" />
              <!-- Gloss effect on icon -->
              <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
            </div>

            <!-- Text -->
            <span class="text-slate-600 text-sm font-medium tracking-wide group-hover:text-emerald-700 transition-colors relative z-10 font-tech">
              {{ btn.name }}
            </span>
            
            <!-- Corner Decorations -->
            <div class="absolute top-1 left-1 w-1 h-1 bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
            <div class="absolute top-1 right-1 w-1 h-1 bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
            <div class="absolute bottom-1 left-1 w-1 h-1 bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
            <div class="absolute bottom-1 right-1 w-1 h-1 bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
          </button>
        </div>
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
            class="flex items-center space-x-3 text-sm p-2 rounded-lg bg-slate-100 hover:bg-emerald-50 transition-colors cursor-pointer border border-transparent hover:border-emerald-200"
          >
            <div :class="['w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs shrink-0', getRankClass(index)]">
              {{ index + 1 }}
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-slate-700 font-medium mb-1">{{ region.name }}</div>
              <div class="flex items-center space-x-4 text-xs">
                <span class="text-emerald-600 font-tech">
                  <span class="text-slate-500">纬度:</span> {{ region.lat.toFixed(4) }}°
                </span>
                <span class="text-emerald-600 font-tech">
                  <span class="text-slate-500">经度:</span> {{ region.lng.toFixed(4) }}°
                </span>
              </div>
            </div>
          </div>
        </div>
      </TechBorder>

    </div>
  </div>
</template>
