import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";


const LandingPage = () => {
  return ( 
    <div className="h-full bg-zinc-950">
      <LandingNavbar />
      <LandingHero />
    </div>
   );
}
 
export default LandingPage;
