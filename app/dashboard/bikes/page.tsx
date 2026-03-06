export default function BikesPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Bicykle
      </h1>

      <button className="bg-green-500 px-4 py-2 rounded-lg mb-6">
        + Pridať bicykel
      </button>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-neutral-900 p-6 rounded-xl">
          <h2 className="font-bold text-xl">Canyon Aeroad</h2>
          <p className="text-neutral-400">Road bike</p>
          <p className="mt-2 text-green-400">12 340 km</p>
        </div>

      </div>

    </div>
  )
}