import { CONTACT_DETAILS } from "../constants/contactDetails";

export const ContactCards = () => {
  return (
    <div className='p-5'>
      {CONTACT_DETAILS.map(({ icon, title, description}) =>
        <div className='bg-[#e9e9e9] rounded-xl px-4 py-4 mb-6 shadow-soft-blur'>
          <button>{icon}</button>
          <h1 className='font-bold'>{title}</h1>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
};