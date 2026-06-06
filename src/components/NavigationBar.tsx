import ofis from "../assets/ofis.png"

export const NavigationBar = () => {
  return (
    <header className="sticky mt-5 rounded-sm top-0 z-50 bg-white shadow-sm md:w-[60%] w-[85%] mx-auto">
      <nav className="flex h-16 items-center justify-between mx-auto">
        <p>Logo</p>

        <ul className="flex gap-6">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className=''>
          <button className='font-Montserrat tracking-tighter font-semibold px-3 py-1 rounded-xl bg-[#]'>Llámanos</button>
          <button className='font-Montserrat tracking-tighter font-semibold px-3 py-1 rounded-sm bg-[#019099] text-[#f2f6f8]'>Agenda Cita</button>
        </div>
      </nav>
    </header>
  )
};