import { Stethoscope, Activity, Bubbles, Bone } from "lucide-react";

const SERVICES_CARD = [
  { backgroundIcon: <Activity className='absolute text-[#a6e1ca]/25 w-50 h-50 top-2 right-6' />, icon: <Stethoscope />, title: 'Consultas', description: 'Brindamos atención médica personalizada para ayudarte a mantener a tu mascota sana, feliz y acompañada en cada etapa de su vida.' },
  { backgroundIcon: <Bubbles className='absolute text-[#a6e1ca]/25 w-50 h-50 top-0 right-0' />, icon: <Bubbles />, title: 'Estética', description: 'Cuidamos la imagen y el bienestar de tu mascota con servicios de estética adaptados a sus necesidades.' },
  { backgroundIcon: <Bone className='absolute text-[#a6e1ca]/25 w-50 h-50 top-0 right-6' />, icon: <Bone />, title: 'Profilaxis Dental', description: 'Ayuda a prevenir enfermedades y cuida la salud de tu mascota con una limpieza dental profesional.' },
];

export default SERVICES_CARD;