import filomeno from "../assets/filomeno.png"
import {UserStar, SquareActivity, BicepsFlexed, FlagTriangleLeft, CandlestickChartIcon, BookCheck } from "lucide-react";

export const aboutData = [
  {
    title: 'Quienes somos?',
    description: 'Ofrecemos atención veterinaria integral para el cuidado de tu mascota, brindando servicios de calidad como consultas médicas, vacunación, estética, limpieza dental y guardería. Nuestro equipo trabaja con dedicación para garantizar la salud, bienestar y comodidad de cada animal, ofreciendo un trato profesional y cercano en todo momento. No trabajamos solo para ti, sino contigo, formando un equipo enfocado en el bienestar de nuestras mascotas.',
    image: filomeno,
    descriptionIcon: <UserStar className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9 p-2' />
  },
  {
    title: 'Cuidados especializados',
    description: 'Brindamos servicios de estética canina con atención profesional y personalizada, asegurando que tu mascota luzca limpia, saludable y feliz. Nuestro equipo se enfoca en ofrecer una experiencia cómoda y segura, utilizando productos de calidad y técnicas especializadas para el cuidado del pelaje, la piel y la higiene general de cada mascota.',
    image: filomeno,
    descriptionIcon: <SquareActivity className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9  p-2' />
  },
  {
    title: 'Qué nos motiva',
    description: 'Lo que nos motiva es el amor y la conexión especial que las personas tienen con sus mascotas. Ver a cada animal sano, feliz y bien cuidado nos impulsa a seguir mejorando cada día. Nos inspira la confianza de las familias que nos eligen y la oportunidad de ser parte del bienestar de sus compañeros de vida, trabajando siempre con dedicación, compromiso y pasión por lo que hacemos.',
    image: filomeno,
    descriptionIcon: <BicepsFlexed className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9  p-2' />
  },
  {
    title: 'Nuestro futuro',
    description: 'Nuestro futuro está enfocado en seguir creciendo como un espacio de confianza para el cuidado integral de las mascotas. Como empresa independiente, trabajamos con esfuerzo y dedicación para ofrecer siempre lo mejor a nuestros clientes y sus mascotas. Buscamos ampliar nuestros servicios, incorporar nuevas tecnologías y seguir mejorando la atención que brindamos día a día. Queremos seguir formando una comunidad donde cada familia reciba el apoyo y la orientación que necesita, siempre con el bienestar animal como nuestra mayor prioridad.',
    image: filomeno,
    descriptionIcon: <FlagTriangleLeft className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9  p-2' />
  },
  {
    title: 'Nuestros valores',
    description: 'Nuestros valores se basan en el respeto, la empatía y el compromiso con cada mascota y su familia. Sabemos que no todas las familias son iguales, por eso nos especializamos en brindar una atención personalizada y adaptada a las necesidades de cada una. Trabajamos con responsabilidad, dedicación y amor por lo que hacemos, priorizando siempre el bienestar animal y construyendo relaciones de confianza y cuidado a largo plazo.',
    image: filomeno,
    descriptionIcon: <CandlestickChartIcon className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9  p-2' />
  },
  {
    title: 'Un lugar para aprender',
    description: 'Te acompañamos en cada paso del cuidado de tu nueva mascota. Sabemos que tener un cachorro o un gatito en casa puede generar muchas dudas, por eso estamos aquí para orientarte sobre su alimentación, higiene, vacunas, comportamiento y todo lo esencial que necesitas saber. Nuestro objetivo es ayudarte a brindarles una vida saludable, feliz y bien cuidada desde el primer día.',
    image: filomeno,
    descriptionIcon: <BookCheck className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9  p-2' />
  },

];