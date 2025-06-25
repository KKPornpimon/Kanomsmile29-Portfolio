import { ExperiencesData } from "@/utils/Experiences"


const Experiences = () => {
  return (
    <section id="experience">
        <div className="text-center pt-10 pb-7">
            <h1 className="text-[23px] gardient-text capitalize">experiences</h1> 
            <h1 className="text-gray-300 text-[30px] font-semibold capitalize">Where I’ve been employed</h1>  
        </div>

        <div>
          <ul className="timeline relative w-full mt-12 ">
            {
              ExperiencesData.map((item, index) => {
                return (
                  <li key={index} className="wrapper relative z-[3] w-[90%] md:w-[50%] py-5 md:py-2 my-9">
                    <div className="text-box relative z-[3] rounded-md bg-gray-300 py-3 ps-7 pe-3">
                      <span className="circle">
                        {
                          item.logo ? (
                            <img 
                              src={item.logo}
                              alt={item.place} 
                              className="absolute top-0 rounded-full flex items-center justify-center"
                            />
                          ) : (
                            <div className="absolute top-0 rounded-full flex items-center justify-center bg-white w-10 h-10"></div>
                          )
                        }
                      </span>
                      <span className="arrow"></span>
                      <h2 className="text-[17px] font-semibold pb-2"> {item.position} / <span className="inline-block text-emerald-800"> {item.place} </span> </h2>
                      <small className="locate-time"> {item.date} / {item.location} </small>
                      <div className="desc">
                        <ul className="list-disc text-gray-700">
                          {
                            item.detail.map((detail, index) => {
                              return (
                                <li className="text-[15px] sm:text-base" key={index}> {detail} </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </li>
                )
              })
            }

                        
          </ul>
        </div>

    </section>
  )
}
export default Experiences