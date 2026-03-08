export default function StatsGrid() {
  const stats = [
    { label: "Weekly km", value: "120" },
    { label: "Monthly km", value: "480" },
    { label: "Total rides", value: "38" },
    { label: "Ride streak", value: "7 days" },
  ];

  return (
    <div className="grid grid-cols-4 gap-8">

      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-[#0b0b0b] border border-[#1a1a1a] rounded-xl p-6"
        >
          <p className="text-white/50 text-sm">{stat.label}</p>

          <p className="text-3xl font-bold text-green-400 mt-1">
            {stat.value}
          </p>
        </div>
      ))}

    </div>
  );
}