import { ReactCompareSlider } from "react-compare-slider";
import { ServicesDetailed } from "../../components/ServicesDetailed.tsx"
import biggieBefore from "../../assets/biggie-before.png"
import biggieAfter from "../../assets/biggie-after.png"

export const Services = () => {
  return (
    <div className='mb-15 p-5'>
      <div className='w-[85%] mx-auto my-15'>
        <ServicesDetailed />
      </div>
        <h1 className='text-3xl tracking-tighter font-semibold text-center'>Antes y después</h1>
      <div className='flex justify-center h-130 px-6'>
        <div className='bg-[#f1e3e3] p-5 rounded-xl shadow-soft-blur'>
          <ReactCompareSlider
            itemOne={<img className='w-full h-full object-cover inset-shadow-md' src={biggieBefore} />}
            itemTwo={<img className='w-full h-full object-cover inset-shadow-md' src={biggieAfter} />}
          />
          </div>
      </div>
    </div>
  )
};