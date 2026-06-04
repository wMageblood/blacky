import servicesDetailed from "../constants/servicesDetailed.tsx";
import filomeno from "../assets/filomeno.png";
import { openWhatsapp } from "../utility/openWhatsapp.ts";

export const ServicesDetailed = () => {
  return (
    <>
    <h1 className='text-3xl font-bold mt-10'>Nuestros servicios</h1>
      {servicesDetailed.map(({serviceName, serviceDescription, serviceIcon, message}, index) =>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#e8f5f0] px-4 py-6'>
          <div className={`col-span-2 ${index % 2 !== 0 ? "order-2" : ""} relative`}>
            <h1 className={`font-semibold ${index % 2 !== 0 ? "ml-3" : ""} tracking-tighter mb-5 text-2xl`}>{serviceName}</h1>
            <p className={`${index % 2 !== 0 ? "ml-3" : ""}`}>{serviceDescription}</p>
            <div className={`absolute ${index % 2 !== 0 ? "bottom-[0%] right-[1%]" : "bottom-[0%] left-[1%]"}`}>
              {serviceIcon}
            </div>
          </div>
          <div className={`${index % 2 !== 0 ? "order-1" : ""} relative`}>
            <img className='col-span-1 w-full h-full object-cover rounded-sm' src={filomeno}/>
            <div className={`absolute ${index % 2 !== 0 ? "md:bottom-[5%] md:left-[5%]" : "md:bottom-[5%] md:right-[5%]"}`}>
              <button onClick={() => openWhatsapp(message)} className='rounded-full bg-[#e9e9e9] hover:bg-[#b69f9f] transition duration-300 border border-black font-semibold px-4 py-1'>Reserva {serviceName}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};