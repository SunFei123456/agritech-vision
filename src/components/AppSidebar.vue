<script setup lang="ts">
import { LayoutDashboard, Database, Activity, Box, Settings, Search } from 'lucide-vue-next'
import { useRouter, useRoute } from 'vue-router'
import type { Component } from 'vue'

const router = useRouter()
const route = useRoute()

interface NavItem {
  icon: Component
  label: string
  path: string
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: '首页', path: '/' },
  { icon: Database, label: '数据总览', path: '/data-overview' },
  { icon: Settings, label: '数据管理', path: '/data-manage' },
  { icon: Activity, label: '数据分析', path: '/data-analysis' },
  { icon: Box, label: '模型预测', path: '/model-predict' },
]

const isActive = (path: string) => route.path === path

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="w-64 h-full flex flex-col bg-white/80 border-r border-slate-200 backdrop-blur-md relative z-40">
    <div class="p-6">
      <div class="relative">
        <input 
          type="text" 
          placeholder="搜索模块..." 
          class="w-full bg-slate-100 border border-slate-200 rounded-md py-2 pl-9 pr-3 text-sm text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-slate-400"
        />
        <Search class="absolute left-3 top-2.5 text-slate-400" :size="14" />
      </div>
    </div>

    <div class="flex-1 space-y-2 py-4">
      <div
        v-for="item in navItems"
        :key="item.label"
        :class="[
          'group flex items-center space-x-3 px-4 py-4 cursor-pointer transition-all duration-300 relative overflow-hidden',
          isActive(item.path) ? 'text-emerald-700 font-bold bg-emerald-50' : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-50'
        ]"
        @click="navigateTo(item.path)"
      >
        <!-- Active Indicator Background -->
        <template v-if="isActive(item.path)">
          <div class="absolute left-0 top-0 w-1 h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-transparent" />
        </template>
        
        <component 
          :is="item.icon" 
          :size="20" 
          :class="[
            isActive(item.path) ? 'text-emerald-600 drop-shadow-sm' : '',
            'transition-transform group-hover:scale-110'
          ]"
        />
        <span class="tracking-wide z-10">{{ item.label }}</span>
      </div>
      
      <div class="mt-8 border-t border-slate-200 pt-4">
        <div class="group flex items-center space-x-3 px-4 py-4 cursor-pointer transition-all duration-300 relative overflow-hidden text-slate-500 hover:text-emerald-600 hover:bg-slate-50">
          <Settings :size="20" class="transition-transform group-hover:scale-110" />
          <span class="font-medium tracking-wide z-10">系统设置</span>
        </div>
      </div>
    </div>
    
    <div class="p-4 text-xs text-slate-400 text-center font-tech">
      v2.5.0 build 202512
    </div>
  </div>
</template>
