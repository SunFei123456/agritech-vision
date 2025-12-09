import type { RegionData, Notice, ChartDataPoint } from './types';

export const REGION_DATA: RegionData[] = [
  { id: 1, name: '北京昌平', lat: 40.2206, lng: 116.2312 },
  { id: 2, name: '北京顺义', lat: 40.1302, lng: 116.6544 },
  { id: 3, name: '河北廊坊', lat: 39.5380, lng: 116.7042 },
  { id: 4, name: '河北保定', lat: 38.8739, lng: 115.4646 },
  { id: 5, name: '山东德州', lat: 37.4360, lng: 116.3592 },
  { id: 6, name: '山东济南', lat: 36.6512, lng: 117.1201 },
  { id: 7, name: '河南郑州', lat: 34.7466, lng: 113.6253 },
  { id: 8, name: '江苏徐州', lat: 34.2044, lng: 117.2859 },
  { id: 9, name: '河南洛阳', lat: 34.6197, lng: 112.4540 },
  { id: 10, name: '江苏南京', lat: 32.0603, lng: 118.7969 },
];

export const NOTICES: Notice[] = [
  { id: 1, type: 'Policy', content: '2025 Smart Agriculture Subsidy Guidelines Released', date: '2025-11-15' },
  { id: 2, type: 'Feature', content: 'New Crop Growth Prediction Model v2.1 Update', date: '2025-11-16' },
  { id: 3, type: 'Alert', content: 'Rice stripe blight warning in southern plots', date: '2025-11-17' },
];

export const SOIL_CHART_DATA: ChartDataPoint[] = [
  { name: 'Zone A', value1: 300, value2: 700 },
  { name: 'Zone B', value1: 500, value2: 900 },
  { name: 'Zone C', value1: 650, value2: 450 },
  { name: 'Zone D', value1: 350, value2: 800 },
  { name: 'Zone E', value1: 250, value2: 600 },
  { name: 'Zone F', value1: 450, value2: 750 },
  { name: 'Zone G', value1: 600, value2: 950 },
  { name: 'Zone H', value1: 250, value2: 600 },
  { name: 'Zone I', value1: 550, value2: 720 },
];
