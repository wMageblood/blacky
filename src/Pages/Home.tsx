import dog from "../assets/home-dog.png"
import blacky from "../assets/blacky.jpg"
import roberto from "../assets/roberto.png"
import { ServicesCard } from "../components/ServicesCard.tsx";

export const Home = () => {
  return (
    <div className='my-6'>
      <div className='flex relative text-white w-[85%] min-h-150 rounded-xl mx-auto px-5 py-5 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_3px,transparent_1px,transparent_50px)] bg-homeBackground'>
       <div className='text-center my-auto ml-25'>
        <h1 className='text-3xl font-bold my-5'>Por nuestras mascotas,<br/> para siempre.</h1>
        <h2 className=''>Servicios para tus mascotas en Zapopan.</h2>
       </div>
       <div className='flex'>
        <button className='absolute left-0 mx-5 bg-[#E9E9E9] rounded-full px-5 py-2 text-black font-bold'>Logo</button>
        <div className='flex absolute right-0 *:bg-[#E9E9E9] *:rounded-full *:text-black font-bold mx-5'>
          <button className='px-5 py-2 mx-2 hover:bg-rose-500 hover:text-white transition duration-300 shadow-3xl'>Ve nuestros servicios</button>
          <button className='px-8 py-2 mx-2 hover:bg-green-500 transition duration-300 shadow-3xl'>Crea una cita</button>
        </div>
       </div>
        <div className='absolute right-25 top-25'>
          <img src={dog} alt={'doggy dog dog'} />
        </div>
      </div>

      <div className='my-10 w-[85%] mx-auto'>
        <ServicesCard />
      </div>

      <div className='flex shadow-2xl relative rounded-sm w-[85%] min-h-112.5 mx-auto p-5 bg-[#f1e3e3]  bg-[repeating-linear-gradient(125deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_3px,transparent_3px,transparent_50px)]'>
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