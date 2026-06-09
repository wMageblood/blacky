import { Hospital, Star } from "lucide-react";
import { openWhatsapp } from "../utility/openWhatsapp.ts";
import { ServicesCard } from "../components/ServicesCard.tsx";
import { mainDog, blacky, secondBannerDog, blueBackground, pinkBackground } from "../assets/images/index.ts";

export const Home = () => {

  return (
    <div id="inicio" className='my-6'>
      <div style={{ backgroundImage: `url(${blueBackground})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} className={`border border-mainBannerBorder w-[85%] md:w-[80%] xl:w-[60%] relative grid grid-cols-1 md:grid-cols-2 mx-auto p-4 overflow-hidden rounded-xl`}>
        <div className='flex justify-between z-2'>
          <div className='my-auto mx-auto text-center text-[#e9e9e9]'>
            <h1 className='xl:text-4xl text-3xl font-semibold tracking-tighter mb-5 filter-[drop-shadow(1px_1px_3px_black)_drop-shadow(0px_0px_0px_black)]'>Por nuestras mascotas, <br/> para siempre.</h1>
            <p className='xl:text-xl md:text-md font-semibold filter-[drop-shadow(1px_0px_2px_black)_drop-shadow(0px_0px_0px_black)]'>Tu servicio de veterinaria en Zapopan.</p>
          </div>
        </div>
          <div className='ml-auto z-1 mt-10 md:mt-0'>
            <img src={mainDog} alt={'doggy doggo dog dog'}/>
          </div>
      </div>

      <div className='my-10 w-[85%] md:w-[82%] xl:w-[61%] mx-auto'>
        <div className='my-10'>
          <p className='text-center tracking-widest font-bold text-mainColorSubTitle text-sm'> NUESTROS SERVICIOS </p>
          <h1 className='text-center text-[#101d21] text-3xl font-bold tracking-tight font-Montserrat'>Todo lo que tu mascota necesita.</h1>
        </div>
        <ServicesCard />
      </div>
      <div style={{ backgroundImage: `url(${pinkBackground})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}  className='border border-secondBannerBorder relative shadow-soft-blur rounded-xl w-[85%] md:w-[80%] xl:w-[60%] mx-auto py-20 px-15'>
        <div className='grid  grid-cols-1 md:grid-cols-2 z-1'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold tracking-tighter mb-10 font-Montserrat text-secondBannerTitle z-1'>Experiencias magnificas <br/> para tu mascota, aseguradas.</h1>
            <p className='mb-5 font-Montserrat font-500 z-1'>
              En Ofis Pet creemos que cada mascota merece atención, cuidado y cariño de la más alta calidad. Como una empresa familiar e independiente, nos comprometemos a brindar un servicio cercano y profesional, desde estéticas y consultas hasta procedimientos especializados.
            </p>
            <div className='flex flex-col md:mt-auto w-fit items-stretch mt-5 text-sm z-1 mb-10'>
              <div className='flex w-fit group mb-0.5'>
                <div className='home-red-button-support'>
                  <Star />
                </div>
                <button onClick={() => openWhatsapp('Hola, me gustaría agendar una estética')} className='home-red-button'>Agenda estética</button>
              </div>
              <div className='flex w-fit group'>
                <div className='home-red-button-support'>
                  <Hospital />
                </div>
                <button onClick={() => openWhatsapp('Hola, me gustaría agendar una Consulta Médica')} className='home-red-button'>Agenda consulta médica</button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-auto md:ml-10 gap-4 mt-5 md:mt-0'>
            <img className='float-1 home-pink-banner-image-one' src={blacky}/>
            <img className='float-2 home-pink-banner-image-two' src={secondBannerDog}/>
          </div>
        </div>
      </div>
    </div>
  )
};