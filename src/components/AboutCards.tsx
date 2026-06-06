import { aboutData } from "../constants/aboutCard";

export const AboutCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
      {aboutData.map(({title, description, descriptionIcon: Icon, image}) =>
      <div className='bg-[#f1e3e3] shadow-soft-blur rounded-t-xl rounded-b-xl border border-[#c1bcb1]'>
        <div className='relative'>
          <img className='rounded-t-xl flex' src={image} />
          {Icon}
        </div>
        <h1 className='p-4 text-2xl font-semibold tracking-tighter font-Montserrat'>{title}</h1>
        <p className='px-4 py-1 pb-4 text-sm font-Montserrat font-500'>{description}</p>
      </div>
      )}
    </div>
  )
};