import { GoogleMapLocation } from "../../components/iframes/GoogleMapLocation";
import { PhoneIncoming, ClockCheck, MapPinHouse } from "lucide-react";
import filomeno from "../../assets/filomeno.png"
import jose from "../../assets/jose.png"
import { openWhatsapp } from "../../utility/openWhatsapp";

export const Contact = () => {
  return (
    <div id='contacto' className='mb-15'>
      <div className='grid grid-cols-1 md:grid-cols-3 w-[85%] md:w-[60%] mx-auto md:gap-4 gap-2'>
        <div className='col-span-1 md:col-span-2 bg-[#efe8f5] border border-[#9d8aa7] flex justify-between px-4 py-6 shadow-soft-blur rounded-tl-xl rounded-tr-xl md:rounded-tr-none'>
          <span className='md:text-6xl text-4xl font-semibold tracking-tighter my-auto mx-auto font-Montserrat'>Contáctanos:</span>
        </div>
        <div className=''>
          <img className='shadow-soft-blur w-full h-full border border-[#9d8aa7] md:rounded-bl-none md:rounded-tr-xl md:rounded-tl-none md:rounded-br-none rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-none object-cover block rounded-xl' width={400} src={filomeno}/>
        </div>
        <div className='bg-[#cdb4db] border border-[#9d8aa7] px-4 py-6 relative overflow-hidden shadow-soft-blur'>
          <h1 className='tracking-tighter font-bold mb-2 text-xl font-Montserrat'>Télefonos:</h1>
          <PhoneIncoming className='z-0 absolute top-2 right-2 w-15 h-15 text-[#e9e9e9]'/>
          <p className='ml-5 relative z-10 font-Montserrat'>+52 33 3808 6856 (Whatsapp) <br/> +52 33 3805 3497 (No Whatsapp)</p>
        </div>
        <div className='bg-[#cdb4db] border border-[#9d8aa7] relative px-4 py-6 shadow-soft-blur'>
          <h1 className='tracking-tighter font-bold mb-2 text-xl font-Montserrat'>Horario</h1>
          <ClockCheck className='z-0 absolute top-2 right-2 w-15 h-15 text-[#e9e9e9]'/>
          <p className='ml-5 relative z-10 font-Montserrat'>Lunes a Viernes de 09:00 a 19:00 <br/> Sábados de 09:00 a 16:00. </p>
        </div>
        <div className='bg-[#cdb4db] border border-[#9d8aa7] relative p-6 shadow-soft-blur'>
          <h1 className='tracking-tighter font-bold mb-2 text-xl font-Montserrat'>Dirección</h1>
          <MapPinHouse className='z-0 absolute top-2 right-2 w-15 h-15 text-[#e9e9e9]'/>
          <p className='ml-5 relative z-10 font-Montserrat'> Avenida General Ramón Corona 2411-C San Juan de Ocotán.</p>
        </div>
        <div className='relative max-h-100'>
          <img className='shadow-soft-blur border border-[#9d8aa7] w-full h-full object-cover block md:rounded-bl-xl rounded-bl-none' src={jose}/>
          <button onClick={() => openWhatsapp('Hola, me gustaría agendar una cita.')} className='z-10 uppercase absolute px-8 py-2 mx-2 bg-[#efe8f5] border border-[#bb75e0] font-Montserrat text-[#7f5197] font-semibold rounded-sm hover:bg-[#bb75e0] hover:text-black transition duration-300 bottom-5 right-4'>Agenda una cita</button>
        </div>
        <div className='col-span-1 md:col-span-2 w-full max-h-100'>
          <GoogleMapLocation />
        </div>
      </div>
    </div>
  )
};