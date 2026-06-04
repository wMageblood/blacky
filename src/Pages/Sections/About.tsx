import { AboutCard } from "../../components/AboutCards";
import { PawBackground } from "../../components/PawBackground";

export const About = () => {
  return (
    <div className="bg-[#f1e3e3] pt-16 mb-16 relative overflow-hidden">
      <PawBackground />
      <div className="w-[85%] md:w-[60%] mx-auto mb-20 relative z-10">
        <AboutCard />
      </div>

    </div>
  )
};