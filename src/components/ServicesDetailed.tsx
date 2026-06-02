import servicesDetailed from "../constants/servicesDetailed.tsx";

export const ServicesDetailed = () => {
  return (
    <div className="relative">
      <h1 className='text-3xl tracking-tighter font-semibold mb-5'>Nuestros servicios:</h1>
      <div className="relative z-10">
        {servicesDetailed.map(
          ({ serviceName, serviceDescription, serviceIcon }) => (
            <div className="bg-[#d2daf0] hover:bg-[#abbcec] shadow-soft-blur transition duration-300 rounded-xl p-6 mb-5 bg-[repeating-linear-gradient(40deg,rgba(0,0,0,0.02)_0px,rgba(0,0,0,0.02)_3px,transparent_3px,transparent_50px)]">
              <div className='flex justify-between'>
                <button className="mt-5 px-4 py-2 rounded-full bg-[#4c6fe2]">
                  {serviceIcon}
                </button>
                <button className='mt-5 px-4 py-2 rounded-full font-semibold bg-[#65e0b1]'>
                  {`Reserva tu ${serviceName}`}
                </button>
              </div>
              <h3 className="mt-10 text-2xl font-semibold">
                {serviceName}
              </h3>
              <p className="mt-3">
                {serviceDescription}
              </p>
            </div>
          )
        )}
      </div>

    </div>
  );
};