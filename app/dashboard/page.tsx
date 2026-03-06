export default function DashboardPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Prehľad
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-neutral-900 p-6 rounded-xl">
          <p className="text-neutral-400 text-sm">Týždeň</p>
          <p className="text-3xl font-bold">120 km</p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl">
          <p className="text-neutral-400 text-sm">Mesiac</p>
          <p className="text-3xl font-bold">480 km</p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl">
          <p className="text-neutral-400 text-sm">Celkom</p>
          <p className="text-3xl font-bold">0 km</p>
        </div>

      </div>

    </div>
  )
}