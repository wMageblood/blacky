import { aboutData } from "../constants/aboutCard";

export const AboutCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {aboutData.map(({title, description, image}) =>
      <div className='bg-[#f1e3e3] shadow-soft-blur rounded-t-xl rounded-b-xl'>
        <img className='rounded-t-xl flex' src={image} />
        <h1 className='p-4 text-2xl font-semibold tracking-tighter'>{title}</h1>
        <p className='px-4 py-1 pb-4'>{description}</p>
      </div>
      )}
    </div>
  )
};