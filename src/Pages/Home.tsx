import ofis from "../assets/ofis.png"
import dog from "../assets/home-dog.png"
import blacky from "../assets/blacky.jpg"
import roberto from "../assets/roberto.png"
import { ServicesCard } from "../components/ServicesCard.tsx";
import { openWhatsapp } from "../utility/openWhatsapp.ts";
import { BACKGROUND_ICONS } from "../components/BackgroundIcons.tsx"



export const Home = () => {



  return (
    <div className='my-6'>
      <div className={`bg-[#019099] w-[85%] md:w-[60%] relative mx-auto p-4 overflow-hidden rounded-xl`}>
        <div className="absolute inset-0 grid grid-cols-6 place-items-center">
          {BACKGROUND_ICONS.map((Icon, index) => (
            <Icon
              key={index}
              className="w-12 h-12 text-red opacity-10"
            />
          ))}
        </div>
        <div className='flex justify-between relative z-2'>
          <img className='w-35' src={ofis}/>
          <div className=''>
            <button className='bg-[#E9E9E9] rounded-full px-4 py-2 font-semibold tracking-tighter transition duration-300 shadow-3xl mr-3 hover:bg-rose-400'>Servicios</button>
            <button onClick={() => openWhatsapp("Hola, me gustaría agendar una cita para mi mascota.")} className='bg-[#E9E9E9] rounded-full px-4 py-2 font-semibold tracking-tighter transition duration-300 shadow-3xl hover:bg-green-400'>Agenda Cita</button>
          </div>
        </div>
        <div className='flex justify-between z-2'>
          <div className='my-auto mx-auto text-center text-[#e9e9e9]'>
            <h1 className='text-3xl font-semibold tracking-tighter mb-5 filter-[drop-shadow(1px_1px_3px_black)_drop-shadow(0px_0px_0px_black)]'>Por nuestras mascotas, <br/> para siempre.</h1>
            <p className='text-xl filter-[drop-shadow(1px_1px_3px_black)_drop-shadow(0px_0px_0px_black)]'>Tu servicio de veterinaria en Zapopan.</p>
          </div>
          <div className='mr-15 z-1'>
            <img src={dog} alt={'doggy doggo dog dog'}/>
          </div>
        </div>
      </div>

      <div className='my-10 w-[85%] md:w-[60%] mx-auto'>
        <ServicesCard />
      </div>

      <div className='flex shadow-2xl relative rounded-sm w-[85%] md:w-[60%] min-h-112.5 mx-auto p-5 bg-[#f1e3e3]  bg-[repeating-linear-gradient(125deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_3px,transparent_3px,transparent_50px)]'>
        <div className=''>
          <h1 className='text-4xl font-semibold tracking-tighter mb-10'>Experiencias magnificas <br/> para tu mascota aseguradas.</h1>
          <p>
            En ofis pet nos aseguramos que tu mascota este siempre bien atendida, <br/> son tan importantes para nosotros como para ti. <br/> Cada hermosa mascota recibe la atención especial y dedicada de nuestra familia.
            <br/>Como una empresa independiente y familiar, <br/> es nuestro objetivo principal brindarles el mejor servicio posible, <br/> desde esteticas hasta cirugias.
          </p>
          <div className='mt-30'>
            <button className='px-5 py-2 mx-2 rounded-full border-2 border-black font-semibold bg-[#D95C5C] hover:bg-[#9E3434] hover:text-white hover:border-[#f1e3e3] transition duration-300'>Agenda consulta médica</button>
            <button className='px-8 py-2 my-4 md:my-0 mx-2 rounded-full border-2 border-black font-semibold bg-[#D95C5C] hover:bg-[#9E3434] hover:text-white hover:border-[#f1e3e3] transition duration-300'>Agenda estetica</button>
          </div>
        </div>
        <div className=''>
          <img className='float-1 absolute border-4 top-82 right-5 md:top-10 md:right-5 border-[#D95C5C] w-25 md:w-50 rounded-tr-4xl rounded-bl-4xl rounded-tl-xl rounded-br-xl' src={blacky} width={200}/>
          <img className='float-2 absolute border-4 bottom-22 right-30 md:bottom-5 md:right-60 border-[#D95C5C] w-23 md:w-48 rounded-tl-4xl rounded-br-4xl rounded-tr-xl rounded-bl-xl' src={roberto} width={184}/>
        </div>
      </div>
    </div>
  )
};