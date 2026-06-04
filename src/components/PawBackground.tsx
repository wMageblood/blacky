import { PAWS } from "../constants/paws"

export const PawBackground = () => {

  return (

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PAWS.map((classes, index) => (
        <div key={index} className={`absolute ${classes}`}>
          <div className="relative w-40 h-40">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#d6c4c4] rounded-full" />
            <div className="absolute top-5 left-8 w-10 h-10 bg-[#d6c4c4] rounded-full" />
            <div className="absolute top-4 left-20 w-10 h-10 bg-[#d6c4c4] rounded-full" />
            <div className="absolute top-16 left-0 w-10 h-10 bg-[#d6c4c4] rounded-full" />
            <div className="absolute top-16 left-28 w-10 h-10 bg-[#d6c4c4] rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
};