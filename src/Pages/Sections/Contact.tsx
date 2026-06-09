import { contactDog } from "../../assets/images"
import { openWhatsapp } from "../../utility/openWhatsapp";
import { PhoneIncoming, ClockCheck, MapPinHouse } from "lucide-react";
import { GoogleMapLocation } from "../../components/iframes/GoogleMapLocation";

export const Contact = () => {
  return (
    <div id='contacto' className='mb-15'>
      <div className='my-10'>
        <p className='text-center tracking-widest font-bold text-[#cdb4db] filter-[drop-shadow(0px_0px_1px_black)_drop-shadow(0px_0px_0px_black)] text-sm'> CONTACTO </p>
        <h1 className='text-center text-[#101d21] text-3xl font-bold tracking-tight font-Montserrat'>¡Llámanos o envíanos un mensaje!</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 w-[85%] md:w-[80%] mx-auto md:gap-4 gap-2'>
        <div className='relative max-h-100'>
          <img className='shadow-soft-blur border border-contactGridBorder w-full h-full object-cover block md:rounded-tl-xl rounded-bl-none' src={contactDog}/>
          <button onClick={() => openWhatsapp('Hola, me gustaría agendar una cita.')} className='z-10 about-contact-button'>Agenda una cita</button>
        </div>
        <div className='col-span-1 md:col-span-2 w-full max-h-100'>
          <GoogleMapLocation />
        </div>
        <div className='about-grid-details md:rounded-bl-xl'>
          <h1 className='contact-title'>Télefonos:</h1>
          <PhoneIncoming className='contact-icon'/>
          <p className='contact-paragraph'>+52 33 3808 6856 (Whatsapp) <br/> +52 33 3805 3497 (No Whatsapp)</p>
        </div>
        <div className='about-grid-details'>
          <h1 className='contact-title'>Horario</h1>
          <ClockCheck className='contact-icon'/>
          <p className='contact-paragraph'>Lunes a Viernes de 09:00 a 19:00 <br/> Sábados de 09:00 a 16:00 </p>
        </div>
        <div className='about-grid-details rounded-br-xl rounded-bl-xl md:rounded-bl-none'>
          <h1 className='contact-title'>Dirección</h1>
          <MapPinHouse className='contact-icon'/>
          <p className='contact-paragraph'> Avenida General Ramón Corona 2411-C <br/> San Juan de Ocotán</p>
        </div>
      </div>
    </div>
  )
};