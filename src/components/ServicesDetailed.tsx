import SERVICES_DETAILED from "../constants/servicesDetailed.tsx";
import { openWhatsapp } from "../utility/openWhatsapp.ts";

export const ServicesDetailed = () => {
  return (
    <>
      <div className='mb-10 text-center'>
        <h1 className='text-3xl mb-5 font-bold mt-10 font-Montserrat tracking-tighter'>Nuestros servicios</h1>
        <p className='font-Montserrat'>Cuidado integral pensado para cada etapa de la vida de tu mascota, <br/> con un equipo profesional que la trata como en casa.</p>
      </div>
      {SERVICES_DETAILED.map(({serviceName, serviceDescription, serviceIcon: Icon, message, serviceImage}, index) => (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 md:mb-8 mb-16 gap-1'>
          <div className={`flex flex-col h-full font-Montserrat px-10 py-2 bg-white border border-[#d7e0e1] shadow-soft-blur ${index % 2 !== 0 ? "md:order-2 md:rounded-br-xl md:rounded-tr-xl md:rounded-tl-none rounded-tl-xl rounded-tr-xl" : "md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none rounded-bl-none rounded-tr-xl rounded-tl-xl"}`}>
            <h1 className='my-5 text-2xl font-semibold'>{serviceName}</h1>
            <p className='pb-5 text-sm'>{serviceDescription}</p>

            <div className='flex group w-fit items-stretch mb-5 mt-auto'>
              <div className='flex items-center justify-center px-2 bg-[#E1F3EF] border mr-0.5 border-[#004444] rounded-sm rounded-tr-none rounded-br-none group-hover:bg-[#004444] transition duration-300'>
                {Icon}
              </div>
              <button onClick={() => openWhatsapp(message)} className='bg-[#e1f3ef] group-hover:bg-[#004444] group-hover:text-white px-3 py-1 text-sm uppercase font-semibold tracking-tighter text-[#004444] transition duration-600 rounded-sm border border-[#004444] rounded-tl-none rounded-bl-none'>Agenda {serviceName}</button>
            </div>
          </div>

          <div className='h-full'>
            <img className={`shadow-soft-blur object-cover w-full h-full ${index % 2 !== 0 ? "md:rounded-bl-xl md:rounded-br-none md:rounded-tl-xl rounded-bl-xl rounded-br-xl" : "md:rounded-tr-xl md:rounded-br-xl md:rounded-bl-none rounded-bl-xl rounded-br-xl"}`} src={serviceImage} />
          </div>
        </div>
      ))}
    </>
  );
};