import { Stethoscope, Bubbles, Bone, Home, Syringe, Hospital } from "lucide-react";

const servicesDetailed = [
  {
    message: `Hola, quisiera agendar una Consulta Médica para mi hermosa y única mascota, ¿para cuando hay disponibilidad?`,
    serviceName: 'Consultas médicas',
    serviceDescription: 'Contamos con consultas generales para atender los problemas de salud de tu mascota. Así como contamos con el servicio de consulta dermatológica y oftalmologica para atender los problemas más específicos de tu mascota',
    serviceIcon: <Stethoscope className='w-15 h-15 text-[#114040]' />
  },
  {
    message: "Hola, me gustaría agendar una Estética para poner bien guapa a mi mascota, ¿cuando tendrían disponibilidad?",
    serviceName: 'Estética',
    serviceDescription: 'Brindamos servicios de estética canina con atención profesional y personalizada, asegurando que tu mascota luzca limpia, saludable y feliz. Nuestro equipo se enfoca en ofrecer una experiencia cómoda y segura, utilizando productos de calidad y técnicas especializadas para el cuidado del pelaje, la piel y la higiene general de cada mascota.',
    serviceIcon: <Bubbles className='w-15 h-15 text-[#114040]' />
  },
  {
    message: "Hola, mi mascota necesita una Limpieza Dental. ¿podría agendar una cita por favor?",
    serviceName: 'Limpiezas Dentales',
    serviceDescription: 'Ofrecemos servicios de limpieza dental diseñados para mantener la salud bucal de tu mascota en óptimas condiciones. A través de procedimientos seguros y realizados por profesionales capacitados, ayudamos a prevenir la acumulación de sarro, el mal aliento y posibles enfermedades dentales, contribuyendo al bienestar y calidad de vida de tu compañero.',
    serviceIcon: <Bone className='w-15 h-15 text-[#114040]' />
  },
  {
    message: "Hola, me gustaría dejar a mi mascota en un hotel 5 estrellas un par de días: ¿podrían darme información al respecto?",
    serviceName: 'Guardería',
    serviceDescription: 'Nuestra guardería ofrece un espacio seguro, cómodo y supervisado donde tu mascota puede permanecer durante cortos periodos de tiempo mientras realizas tus actividades. Nos aseguramos de que cada perro reciba atención, compañía y el cuidado necesario para que se sienta tranquilo, entretenido y como en casa durante su estancia.',
    serviceIcon: <Home className='w-15 h-15 text-[#114040]' />
  },
  {
    message: "Hola, necesitaria Vacunación y Desparasitación para mi mascota. ¿podrían darme información al respecto?",
    serviceName: 'Vacunación y Desparasitación',
    serviceDescription: 'Ofrecemos servicios de vacunación y desparasitación para proteger la salud de tu mascota en cada etapa de su vida. Nuestro equipo se encarga de aplicar tratamientos preventivos seguros y adecuados, ayudando a fortalecer su sistema inmunológico y a prevenir enfermedades comunes, parásitos internos y externos, garantizando así su bienestar y calidad de vida.',
    serviceIcon: <Syringe className='w-15 h-15 text-[#114040]' />
  },
  {
    message: "Hola, me gustaría programar una Cita/Procedimiento: ¿podrían informarme de como sería exactamente el proceso?",
    serviceName: 'Cirugías y Procedimientos',
    serviceDescription: 'Realizamos cirugías y procedimientos veterinarios con los más altos estándares de seguridad y cuidado. Nuestro equipo de profesionales evalúa cada caso de manera individual para ofrecer el tratamiento más adecuado, acompañando a tu mascota antes, durante y después del procedimiento para garantizar una recuperación segura y un bienestar óptimo.',
    serviceIcon: <Hospital className='w-15 h-15 text-[#114040]' />
  },

];

export default servicesDetailed;