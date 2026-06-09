import { UserStar, SquareActivity, BicepsFlexed, FlagTriangleLeft, CandlestickChartIcon, BookCheck } from "lucide-react";
import { shivaDog, ucomingDog, graynotGrayDog, supportDog, grayLookingDog, whatDog } from "../assets/images"

export const ABOUT_DATA = [
  {
    title: 'Conoce Ofis Pet',
    description: 'Ofrecemos atención veterinaria integral para el cuidado de tu mascota, brindando servicios de calidad como consultas médicas, vacunación, estética, limpieza dental y guardería. Nuestro equipo trabaja con dedicación para garantizar la salud, el bienestar y la comodidad de cada animal, ofreciendo un trato profesional y cercano en todo momento. No trabajamos solo para ti, sino también contigo, formando un equipo enfocado en el bienestar de nuestras mascotas.',
    image: shivaDog,
    descriptionIcon: <UserStar className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9 p-2' />
  },
  {
    title: 'Estética y bienestar',
    description: 'Brindamos servicios de estética canina con atención profesional y personalizada, para que tu mascota luzca limpia, saludable y feliz. Nos enfocamos en ofrecer una experiencia cómoda, segura y libre de estrés, utilizando productos de alta calidad y técnicas especializadas que contribuyen al cuidado del pelaje, la piel y el bienestar general de cada mascota.',
    image: ucomingDog,
    descriptionIcon: <SquareActivity className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9 p-2' />
  },
  {
    title: 'Lo que nos motiva',
    description: 'Es el amor y la conexión especial que las personas comparten con sus mascotas. Ver a cada animal sano, feliz y bien cuidado nos impulsa a mejorar cada día. Nos inspira la confianza de las familias que nos eligen y la oportunidad de contribuir al bienestar de sus compañeros de vida, trabajando siempre con dedicación, compromiso y pasión por lo que hacemos.',
    image: graynotGrayDog,
    descriptionIcon: <BicepsFlexed className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9 p-2' />
  },
  {
    title: 'La base de nuestro trabajo',
    description: 'Nuestros valores se fundamentan en el respeto, la empatía y el compromiso con cada mascota y su familia. Entendemos que cada familia es única, por lo que brindamos una atención personalizada y adaptada a sus necesidades específicas. Trabajamos con responsabilidad, dedicación y pasión por lo que hacemos, priorizando siempre el bienestar animal y construyendo relaciones duraderas basadas en la confianza, el cuidado y el respeto mutuo.',
    image: supportDog,
    descriptionIcon: <CandlestickChartIcon className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9 p-2' />
  },
  {
    title: 'Mirando hacia el futuro',
    description: 'Nuestro futuro está enfocado en consolidarnos como un espacio de confianza para el cuidado integral de las mascotas. Como empresa independiente, trabajamos con esfuerzo y dedicación para ofrecer siempre lo mejor a nuestros clientes y sus compañeros de vida. Aspiramos a ampliar nuestros servicios, incorporar nuevas tecnologías y fortalecer la calidad de la atención que brindamos cada día. Queremos construir una comunidad donde cada familia encuentre el apoyo, la orientación y la confianza que necesita, manteniendo siempre el bienestar animal como nuestra máxima prioridad.',
    image: grayLookingDog,
    descriptionIcon: <FlagTriangleLeft className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9 p-2' />
  },
  {
    title: 'Creciendo junto a tu mascota',
    description: 'Te acompañamos en cada etapa del cuidado de tu nueva mascota. Sabemos que la llegada de un cachorro o un gatito al hogar puede generar muchas dudas, por eso estamos aquí para orientarte sobre su alimentación, higiene, vacunación, comportamiento y todos los aspectos esenciales para su bienestar. Nuestro objetivo es brindarte las herramientas y el acompañamiento necesarios para que pueda disfrutar de una vida saludable, feliz y llena de cuidados desde el primer día.',
    image: whatDog,
    descriptionIcon: <BookCheck className='absolute top-2 left-2 rounded-full bg-[#f1e3e3] border border-[#c1bcb1] w-9 h-9 p-2' />
  },
];