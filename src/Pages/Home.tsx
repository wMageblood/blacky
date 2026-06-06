import dog from "../assets/home-dog.png"
import blacky from "../assets/blacky.jpg"
import roberto from "../assets/roberto.png"
import { ServicesCard } from "../components/ServicesCard.tsx";
import { openWhatsapp } from "../utility/openWhatsapp.ts";
import { BACKGROUND_ICONS } from "../components/BackgroundIcons.tsx"
import { Hospital, Star } from "lucide-react";
import mainBannerBg from "../assets/main-banner-bg.png";
import secondBannerBg from "../assets/second-banner-bg.png"

export const Home = () => {

  const ICON_COLORS = [
  "#E58A84",
  "#F09A95",
  "#EFA29D",
  "#D96F68",
  "#F4B6B2",
];

  return (
    <div id="inicio" className='my-6'>
      <div style={{ backgroundImage: `url(${mainBannerBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}} className={`border border-[#006065] w-[85%] md:w-[60%] relative grid grid-cols-1 md:grid-cols-2 mx-auto p-4 overflow-hidden rounded-xl`}>
        <div className='flex justify-between z-2'>
          <div className='my-auto mx-auto text-center text-[#e9e9e9]'>
            <h1 className='xl:text-4xl text-3xl font-semibold tracking-tighter mb-5 filter-[drop-shadow(1px_1px_3px_black)_drop-shadow(0px_0px_0px_black)]'>Por nuestras mascotas, <br/> para siempre.</h1>
            <p className='xl:text-xl md:text-md font-semibold filter-[drop-shadow(1px_0px_2px_black)_drop-shadow(0px_0px_0px_black)]'>Tu servicio de veterinaria en Zapopan.</p>
          </div>
        </div>
          <div className='ml-auto z-1 mt-10 md:mt-0'>
            <img src={dog} alt={'doggy doggo dog dog'}/>
          </div>
      </div>

      <div className='my-10 w-[85%] md:w-[62%] mx-auto'>
        <div className='my-10'>
          <p className='text-center tracking-widest font-bold text-[#019099] text-sm'> NUESTROS SERVICIOS </p>
          <h1 className='text-center text-[#101d21] text-3xl font-bold tracking-tight font-Montserrat'>Todo lo que tu mascota necesita.</h1>
        </div>
        <ServicesCard />
      </div>
      <div style={{ backgroundImage: `url(${secondBannerBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}  className='border border-[#e2aca8] relative shadow-soft-blur rounded-xl w-[85%] md:w-[60%] mx-auto py-20 px-15 mb-15'>
        <div className='grid grid-cols-1 md:grid-cols-2 z-1'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold tracking-tighter mb-10 font-Montserrat text-[#6b141f] z-1'>Experiencias magnificas <br/> para tu mascota, aseguradas.</h1>
            <p className='mb-5 font-Montserrat font-500 z-1'>
              En Ofis Pet creemos que cada mascota merece atención, cuidado y cariño de la más alta calidad. Como una empresa familiar e independiente, nos comprometemos a brindar un servicio cercano y profesional, desde estéticas y consultas hasta procedimientos especializados.
            </p>
            <div className='md:mb-auto flex flex-col w-fit items-stretch mt-5 text-sm z-1 mb-10'>
              <div className='flex w-fit group mb-[2px]'>
                <div className='flex items-center justify-center px-2 bg-[#fbc3c3] border mr-0.5 border-[#e2aca8] rounded-sm rounded-tr-none text-[#EA6568] rounded-br-none group-hover:bg-[#9e3434] transition duration-300'>
                  <Star />
                </div>
                <button className='px-5 py-2 uppercase group-hover:bg-[#9E3434] rounded-sm border border-[#e2aca8] mr-2 font-Montserrat tracking-tighter font-semibold bg-[#fbc3c3] hover:bg-[#9E3434] text-[#EA6568] group-hover:text-white hover:border-[#f1e3e3] transition duration-300'>Agenda estetica</button>
              </div>
              <div className='flex w-fit group'>
                <div className='flex items-center justify-center px-2 bg-[#fbc3c3] border mr-0.5 border-[#e2aca8] rounded-sm rounded-tr-none text-[#EA6568] rounded-br-none group-hover:bg-[#9e3434] transition duration-300'>
                  <Hospital />
                </div>
                <button className='px-5 py-2 uppercase group-hover:bg-[#9E3434] rounded-sm border border-[#e2aca8] mr-2 font-Montserrat tracking-tighter font-semibold bg-[#fbc3c3] hover:bg-[#9E3434] text-[#EA6568] group-hover:text-white hover:border-[#f1e3e3] transition duration-300'>Agenda consulta médica</button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-auto md:ml-10 gap-4 mt-5 md:mt-0'>
            <img className='float-1 shadow-soft-blur border-2 border-[#D95C5C] w-55 h-70 md:w-50 md:h-75 rounded-tr-4xl rounded-bl-4xl rounded-tl-xl rounded-br-xl' src={blacky}/>
            <img className='float-2 shadow-soft-blur border-2 border-[#D95C5C] w-55 h-70 md:w-48 md:h-75 md:mt-30 rounded-tl-4xl rounded-br-4xl rounded-tr-xl rounded-bl-xl' src={roberto}/>
          </div>
        </div>
      </div>
    </div>
  )
};