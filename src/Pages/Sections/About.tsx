import { AboutCard } from "../../components/AboutCards";
import paws from "../../assets/paws-big.png"

export const About = () => {
  return (
    <div id="nosotros" className="bg-linear-to-b from-[#F2F6F8] via-[#F4EEE0] to-[#F2F6F8] pt-16 mb-16 relative overflow-hidden" style={{ backgroundImage: `url(${paws})`, backgroundRepeat: "repeat", backgroundPosition: "-100px -50px" }}>
      <div className="w-[85%] md:w-[60%] mx-auto mb-20 relative z-10">
        <AboutCard />
      </div>

    </div>
  )
};