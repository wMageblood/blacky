import dog from "../assets/doggogood.png"
import blacky from "../assets/blacky.jpg"
import roberto from "../assets/roberto.png"
import { ServicesCard } from "../components/ServicesCard.tsx";
import { openWhatsapp } from "../utility/openWhatsapp.ts";
import { Hospital, Star } from "lucide-react";
import mainBannerBg from "../assets/blue-giant-bg.png";
import secondBannerBg from "../assets/pink-giant-bg.png"

export const Home = () => {

  return (
    <div id="inicio" className='my-6'>
      <div style={{ backgroundImage: `url(${mainBannerBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} className={`border border-[#006065] w-[85%] md:w-[80%] xl:w-[60%] relative grid grid-cols-1 md:grid-cols-2 mx-auto p-4 overflow-hidden rounded-xl`}>
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

      <div className='my-10 w-[85%] md:w-[82%] xl:w-[61%] mx-auto'>
        <div className='my-10'>
          <p className='text-center tracking-widest font-bold text-[#019099] text-sm'> NUESTROS SERVICIOS </p>
          <h1 className='text-center text-[#101d21] text-3xl font-bold tracking-tight font-Montserrat'>Todo lo que tu mascota necesita.</h1>
        </div>
        <ServicesCard />
      </div>
      <div style={{ backgroundImage: `url(${secondBannerBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}  className='border border-[#e2aca8] relative shadow-soft-blur rounded-xl w-[85%] md:w-[80%] xl:w-[60%] mx-auto py-20 px-15'>
        <div className='grid  grid-cols-1 md:grid-cols-2 z-1'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold tracking-tighter mb-10 font-Montserrat text-[#6b141f] z-1'>Experiencias magnificas <br/> para tu mascota, aseguradas.</h1>
            <p className='mb-5 font-Montserrat font-500 z-1'>
              En Ofis Pet creemos que cada mascota merece atención, cuidado y cariño de la más alta calidad. Como una empresa familiar e independiente, nos comprometemos a brindar un servicio cercano y profesional, desde estéticas y consultas hasta procedimientos especializados.
            </p>
            <div className='flex flex-col md:mt-auto w-fit items-stretch mt-5 text-sm z-1 mb-10'>
              <div className='flex w-fit group mb-0.5'>
                <div className='flex items-center justify-center px-2 bg-[#F4B6B2] border mr-0.5 border-[#D98982] rounded-sm rounded-tr-none text-[#B83845] rounded-br-none group-hover:bg-[#9e3434] transition duration-300 group-hover:text-white'>
                  <Star />
                </div>
                <button onClick={() => openWhatsapp('Hola, me gustaría agendar una estética')} className='px-5 py-2 uppercase group-hover:bg-[#9E3434] rounded-sm border border-[#D98982] rounded-bl-none rounded-tl-none mr-2 font-Montserrat tracking-tighter font-semibold bg-[#F4B6B2] hover:bg-[#9E3434] text-[#B83845] group-hover:text-white transition duration-300'>Agenda estética</button>
              </div>
              <div className='flex w-fit group'>
                <div className='flex items-center justify-center px-2 bg-[#F4B6B2] group-hover:text-white border mr-0.5 border-[#D98982] rounded-sm rounded-tr-none text-[#B83845] rounded-br-none group-hover:bg-[#9e3434] transition duration-300'>
                  <Hospital />
                </div>
                <button onClick={() => openWhatsapp('Hola, me gustaría agendar una Consulta Médica')} className='px-5 py-2 uppercase group-hover:bg-[#9E3434] rounded-sm border border-[#D98982] rounded-bl-none rounded-tl-none mr-2 font-Montserrat tracking-tighter font-semibold bg-[#F4B6B2] hover:bg-[#9E3434] text-[#B83845] group-hover:text-white transition duration-300'>Agenda consulta médica</button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-auto md:ml-10 gap-4 mt-5 md:mt-0'>
            <img className='float-1 shadow-soft-blur border-2 border-[#D95C5C] w-55 h-70 md:w-50 md:h-75 xl:w-60 xl:h-85 xl:ml-2 rounded-tr-4xl rounded-bl-4xl rounded-tl-xl rounded-br-xl' src={blacky}/>
            <img className='float-2 shadow-soft-blur border-2 border-[#D95C5C] w-55 h-70 md:w-48 md:h-75 xl:w-60 xl:h-85 xl:ml-auto md:mt-15 rounded-tl-4xl rounded-br-4xl rounded-tr-xl rounded-bl-xl' src={roberto}/>
          </div>
        </div>
      </div>
    </div>
  )
};