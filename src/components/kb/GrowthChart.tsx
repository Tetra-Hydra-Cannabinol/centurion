import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { GrowthDataPoint } from '../../data';

interface GrowthChartProps {
  data: GrowthDataPoint[];
}

export function GrowthChart({ data }: GrowthChartProps) {
  return (
    <div className="h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#243044" />
          <XAxis
            dataKey="date"
            stroke="#8899AA"
            style={{ fontSize: 11, fontFamily: 'JetBrains Mono' }}
          />
          <YAxis
            stroke="#8899AA"
            style={{ fontSize: 11, fontFamily: 'JetBrains Mono' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A2332',
              border: '1px solid #243044',
              borderRadius: '6px',
              color: '#E2E8F0',
            }}
            formatter={(value) => [`${Number(value).toLocaleString()} chunks`, '']}
          />
          <Area
            type="monotone"
            dataKey="chunks"
            stroke="#D4AF37"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#growthGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
