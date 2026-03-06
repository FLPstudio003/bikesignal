export default function LoyaltyPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Leaderboard
      </h1>

      <div className="bg-neutral-900 rounded-xl p-6">

        <div className="flex justify-between border-b border-neutral-800 py-3">
          <p>1. Martin</p>
          <p>210 km</p>
        </div>

        <div className="flex justify-between border-b border-neutral-800 py-3">
          <p>2. Tomáš</p>
          <p>180 km</p>
        </div>

        <div className="flex justify-between py-3">
          <p>3. Peter</p>
          <p>140 km</p>
        </div>

      </div>

    </div>
  )
}