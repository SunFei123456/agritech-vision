export interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  trend?: string;
  color: 'blue' | 'green' | 'orange' | 'cyan';
}

export interface RegionData {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export interface Notice {
  id: number;
  type: 'Policy' | 'Feature' | 'Alert';
  content: string;
  date: string;
}

export interface ChartDataPoint {
  name: string;
  value1: number;
  value2: number;
}

export interface MapPin {
  x: string;
  y: string;
  status: 'ok' | 'warn' | 'alert';
}
