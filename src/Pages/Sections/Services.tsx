import { ReactCompareSlider } from "react-compare-slider";
import { ServicesDetailed } from "../../components/ServicesDetailed.tsx"
import biggieBefore from "../../assets/biggie-before.png"
import biggieAfter from "../../assets/biggie-after.png"
import robertBefore from "../../assets/robertBefore.png"
import robertAfter from "../../assets/robertAfter.png"
import roboAfter from "../../assets/roboAfter.png"
import roboBefore from "../../assets/roboBefore.png"
import beforeAfter from "../../assets/beforeAfter.png"

export const Services = () => {
  return (
    <div id="servicios" className='my-15'>
      <div className='mx-auto w-[85%] md:w-[80%]'>
        <ServicesDetailed />
      </div>
        <div className='my-10'>
          <p className='text-center tracking-widest font-bold text-[#019099] text-sm'> COMPARACIÓN </p>
          <h1 className='text-center text-[#101d21] text-3xl font-bold tracking-tight font-Montserrat'>Antes y después.</h1>
        </div>
      <div className='flex justify-center h-auto px-6 w-[85%] md:w-[80%] mx-auto'>
        <div className='bg-white p-5 rounded-xl shadow-soft-blur border border-[#d7e0e1]'>
          {/* <ReactCompareSlider
            itemOne={<img className='w-full h-full object-cover inset-shadow-md' src={biggieBefore} />}
            itemTwo={<img className='w-full h-full object-cover inset-shadow-md' src={biggieAfter} />}
          /> */}
        <img src={beforeAfter}/>
        </div>
      </div>
    </div>
  )
};