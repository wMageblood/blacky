import { Stethoscope, Activity, Bubbles, Bone } from "lucide-react";

const SERVICES_CARD = [
  { backgroundIcon: <Activity className='absolute text-[#a6e1ca]/25 w-50 h-50 top-2 right-6' />, icon: <Stethoscope />, title: 'Consultas', description: 'Agenda tu consulta para checar el estado salud de tu familiar peludo' },
  { backgroundIcon: <Bubbles className='absolute text-[#a6e1ca]/25 w-50 h-50 top-0 right-0' />, icon: <Bubbles />, title: 'Estética', description: 'Para ponerlos guapos y elegantes' },
  { backgroundIcon: <Bone className='absolute text-[#a6e1ca]/25 w-50 h-50 top-0 right-6' />, icon: <Bone />, title: 'Profilaxis Dental', description: 'Asegurate de agender tu limpieza dental para cuidar a nuestros amigos peludos' },
];

export default SERVICES_CARD;