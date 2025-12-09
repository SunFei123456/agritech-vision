<script setup lang="ts">
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { SOIL_CHART_DATA } from '../constants'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent, LegendComponent])

const option = computed(() => ({
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    backgroundColor: '#0f172a',
    borderColor: '#1e293b',
    textStyle: {
      color: '#e2e8f0'
    }
  },
  legend: {
    data: ['湿度', '质量'],
    textStyle: {
      color: '#94a3b8'
    },
    top: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: SOIL_CHART_DATA.map(item => item.name),
    axisLine: {
      lineStyle: {
        color: '#334155'
      }
    },
    axisLabel: {
      color: '#94a3b8',
      fontSize: 12
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#334155'
      }
    },
    axisLabel: {
      color: '#94a3b8',
      fontSize: 12
    },
    splitLine: {
      lineStyle: {
        color: '#1e293b',
        type: 'dashed'
      }
    }
  },
  series: [
    {
      name: '湿度',
      type: 'bar',
      data: SOIL_CHART_DATA.map(item => item.value1),
      barWidth: 12,
      itemStyle: {
        color: '#0ea5e9',
        borderRadius: [2, 2, 0, 0]
      }
    },
    {
      name: '质量',
      type: 'bar',
      data: SOIL_CHART_DATA.map(item => item.value2),
      barWidth: 12,
      itemStyle: {
        color: '#22d3ee',
        borderRadius: [2, 2, 0, 0]
      }
    }
  ]
}))
</script>

<template>
  <div class="w-full h-64 mt-4">
    <VChart :option="option" autoresize />
  </div>
</template>
