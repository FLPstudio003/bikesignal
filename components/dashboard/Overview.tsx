import RiderHero from "./RiderHero";
import StatsGrid from "./StatsGrid";
import GaragePreview from "./GaragePreview";
import ServiceAlert from "./ServiceAlert";
import Leaderboard from "./Leaderboard";
import RecentRides from "./RecentRides";

export default function Overview() {
  return (
    <div className="space-y-16">

      <RiderHero />

      <StatsGrid />

      <GaragePreview />

      <ServiceAlert />

      <Leaderboard />

      <RecentRides />

    </div>
  );
}