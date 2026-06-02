import servicesCard from "../constants/servicesCard.tsx";

export const ServicesCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {servicesCard.map(({backgroundIcon, icon, title, description}) =>
        <div className='bg-[#e8f5f0] relative overflow-hidden group hover:bg-[#114040] hover:text-white hover:shadow-blur transition duration-300 rounded-xl mx-3 my-3 md:my-0 p-6'>
          <button className='group-hover:text-black mt-5 px-4 py-2 rounded-full bg-[#a6e1ca]'>{icon}</button>
          <h3 className='mt-10 text-2xl font-semibold relative z-10'>{title}</h3>
          <p className='mt-3 relative z-10'>{description}</p>
          <div className="md:block absolute right-5 top-4 md:right-5 md:top-5 opacity-40 pointer-events-none">
            {backgroundIcon}
          </div>
        </div>
      )}
    </div>
  )
};