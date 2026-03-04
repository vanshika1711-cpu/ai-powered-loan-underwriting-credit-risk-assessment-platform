interface Props {
  title: string;
  value: string;
  change?: string;
}

export default function StatsCard({ title, value, change }: Props) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition">
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
      {change && (
        <p className="text-xs text-green-400 mt-1">{change}</p>
      )}
    </div>
  );
}