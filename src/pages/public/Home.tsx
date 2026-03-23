import Hero from "../../components/Hero";
import CommunityImpact from "../../components/CommunityImpact";
import Initiatives from "../../components/Initiatives";
import JoinCommunity from "../../components/JoinCommunity";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      <main className="pt-24">
        <Hero />
        <CommunityImpact />
        <Initiatives />
        <JoinCommunity />
      </main>
    </div>
  );
}
