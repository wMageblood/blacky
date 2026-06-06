import { PhoneIncoming, CalendarCheck } from "lucide-react";
import { openWhatsapp } from "../utility/openWhatsapp";

export const NavigationBar = () => {
  return (
    <header className="md:w-[60%] w-[85%] mx-auto mt-5">
      <nav className="grid-cols-3 h-16 items-center justify-between mx-auto hidden xl:grid">
        <div className='justify-start'>
          <h1>Logo</h1>
        </div>

        <ul className="flex gap-6 justify-center *:font-Geist *:tracking-tighter *:font-semibold">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className='flex justify-end'>
          <div className='flex border border-[#101d21] rounded-md px-2 py-1 items-center justify-center mr-2 group hover:border-[#019099] hover:bg-[#019099] transition duration-100'>
            <PhoneIncoming className='text-[#101d21] group-hover:text-white group-hover:bg-[019099]' />
            <button onClick={() => {
              window.location.href = "tel:+523338086856"
            }} className='font-Geist font-semibold px-3 py-1 rounded-sm text-[#101d21] group-hover:text-white group-hover:bg-[019099]'>Llámanos</button>
          </div>
          <div className='flex bg-[#019099] rounded-md px-2 py-1 items-center justify-center group hover:bg-[#f2f6f8] border border-[#019099] transition duration-100 hover:border-[#101d21]'>
            <CalendarCheck className='text-[#f2f6f8] group-hover:text-[#101d21] group-hover:bg-[#f2f6f8]  transition duration-100' />
            <button onClick={() => openWhatsapp('Hola, me gustaría agendar una cita')} className='font-Geist font-semibold px-3 py-1 rounded-sm text-[#f2f6f8] group-hover:text-[#101d21] group-hover:bg-[#f2f6f8]  transition duration-100'>Agenda Cita</button>
          </div>
        </div>
      </nav>
    </header>
  )
};