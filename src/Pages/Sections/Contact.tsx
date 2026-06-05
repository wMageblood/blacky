import { GoogleMapLocation } from "../../components/iframes/GoogleMapLocation";
import { PhoneIncoming, ClockCheck, MapPinHouse } from "lucide-react";
import filomeno from "../../assets/filomeno.png"
import jose from "../../assets/jose.png"
import { openWhatsapp } from "../../utility/openWhatsapp";

export const Contact = () => {
  return (
    <div className='mb-15'>
      <div className='grid grid-cols-1 md:grid-cols-3 *:rounded-xl w-[85%] md:w-[60%] mx-auto gap-6'>
        <div className=' col-span-1 md:col-span-2 bg-[#efe8f5] flex justify-between px-4 py-6 shadow-soft-blur'>
          <span className='text-6xl font-semibold tracking-tighter my-auto mx-auto'>Contáctanos:</span>
        </div>
        <div className='shadow-soft-blur'>
          <img className='w-full h-full object-cover block rounded-xl' width={400} src={filomeno}/>
        </div>
        <div className='bg-[#cdb4db] px-4 py-6 relative overflow-hidden shadow-soft-blur'>
          <h1 className='tracking-tighter font-bold mb-2 text-xl'>Télefonos:</h1>
          <PhoneIncoming className='z-0 absolute top-2 right-2 w-15 h-15 text-[#e9e9e9]'/>
          <p className='ml-5 relative z-10'>+52 33 3808 6856 (Whatsapp) <br/> +52 33 3805 3497 (No Whatsapp)</p>
        </div>
        <div className='bg-[#cdb4db] relative px-4 py-6 shadow-soft-blur'>
          <h1 className='tracking-tighter font-bold mb-2 text-xl'>Horario</h1>
          <ClockCheck className='z-0 absolute top-2 right-2 w-15 h-15 text-[#e9e9e9]'/>
          <p className='ml-5 relative z-10'>Lunes a Viernes de 09:00 a 19:00 <br/> Sábados de 09:00 a 16:00. </p>
        </div>
        <div className='bg-[#cdb4db] relative p-6 shadow-soft-blur'>
          <h1 className='tracking-tighter font-bold mb-2 text-xl'>Dirección</h1>
          <MapPinHouse className='z-0 absolute top-2 right-2 w-15 h-15 text-[#e9e9e9]'/>
          <p className='ml-5 relative z-10'> Avenida General Ramón Corona 2411-C San Juan de Ocotán.</p>
        </div>
        <div className='relative max-h-100 shadow-soft-blur'>
          <img className='w-full h-full object-cover block rounded-xl' src={jose}/>
          <button onClick={() => openWhatsapp('Hola, me gustaría agendar una cita.')} className='z-10 absolute px-8 py-2 mx-2 bg-[#E9E9E9] font-semibold rounded-md hover:bg-green-500 transition duration-300 shadow-3xl bottom-5 right-4'>Crea una cita</button>
        </div>
        <div className='col-span-1 md:col-span-2 w-full max-h-100 shadow-soft-blur'>
          <GoogleMapLocation />
        </div>
      </div>
    </div>
  )
};