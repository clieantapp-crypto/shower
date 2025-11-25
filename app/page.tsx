import { Header } from "@/components/header"
import { StatsSection } from "@/components/stats-section"
import { CarListings } from "@/components/car-listings"
import { InfoSection } from "@/components/info-section"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <StatsSection />
      <CarListings />
      <InfoSection />
      <BottomNav />
    </main>
  )
}
