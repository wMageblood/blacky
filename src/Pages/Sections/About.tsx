import { AboutCard } from "../../components/AboutCards";
import paws from "../../assets/paws-big.png"

export const About = () => {
  return (
    <div id="nosotros" className="bg-linear-to-b from-[#F2F6F8] via-[#F4EEE0] to-[#F2F6F8] pt-16 mb-16 relative overflow-hidden" style={{ backgroundImage: `url(${paws})`, backgroundRepeat: "repeat", backgroundPosition: "-100px -50px" }}>
      <div className='my-10'>
        <p className='text-center tracking-widest font-bold text-[#f1e3e3] text-sm md:text-md filter-[drop-shadow(0px_0px_1px_black)_drop-shadow(0px_0px_0px_black)]'> NUESTROS VALORES </p>
        <h1 className='text-center text-[#101d21] text-3xl md:text-4xl font-bold tracking-tight font-Montserrat my-3'>Sobre OfisPet</h1>
      </div>
      <div className="w-[85%] md:w-[80%] xl:w-[60%] mx-auto mb-20 relative z-10">
        <AboutCard />
      </div>
    </div>
  )
};