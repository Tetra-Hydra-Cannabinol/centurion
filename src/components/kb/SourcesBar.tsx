import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { SourceStat } from '../../data';

interface SourcesBarProps {
  data: SourceStat[];
}

export function SourcesBar({ data }: SourcesBarProps) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#243044" />
          <XAxis
            type="number"
            stroke="#8899AA"
            style={{ fontSize: 10, fontFamily: 'JetBrains Mono' }}
          />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#8899AA"
            width={150}
            style={{ fontSize: 10, fontFamily: 'JetBrains Mono' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A2332',
              border: '1px solid #243044',
              borderRadius: '6px',
              color: '#E2E8F0',
            }}
            formatter={(value) => [`${value} chunks`, '']}
          />
          <Bar dataKey="chunks" fill="#2C5282" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
