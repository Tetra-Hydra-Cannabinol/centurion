import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import type { CategoryChunk } from '../../data';

interface ChunkDonutProps {
  data: CategoryChunk[];
}

export function ChunkDonut({ data }: ChunkDonutProps) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A2332',
              border: '1px solid #243044',
              borderRadius: '6px',
              color: '#E2E8F0',
            }}
            formatter={(value: number) => [`${value} chunks`, '']}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value) => <span className="text-xs text-dim">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
