export default function GaragePreview() {
  const bikes = [
    { name: "Specialized Stumpjumper", km: 1200 },
    { name: "Trek Marlin 7", km: 650 },
  ];

  return (
    <div className="bg-[#0b0b0b] border border-[#1a1a1a] rounded-xl p-8">

      <h2 className="text-xl font-bold mb-6">
        Moja garáž
      </h2>

      <div className="space-y-4">

        {bikes.map((bike, i) => (
          <div
            key={i}
            className="flex justify-between border border-[#1a1a1a] rounded-lg p-4"
          >
            <span>{bike.name}</span>

            <span className="text-green-400">
              {bike.km} km
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}