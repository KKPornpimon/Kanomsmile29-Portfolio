import { ProFrameworks, ProLanguage, ProLibraries, ProTools } from "@/utils/Skills"


const SkillsPage = () => {
  return (
    <div className="my-7 gardient-bg p-4 rounded-md">
        
        <div className="mx-auto my-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 mb-7 items-center lg:border lg:border-[var(--card1)] lg:rounded-md lg:p-2">
                <div className="text-start bg-[var(--bg)] rounded-xl py-2 px-4 w-[240px]">
                   <h3 className="capitalize font-bold text-[var(--highlight)]">programming language</h3> 
                </div>
                <div className="col-span-2 lg:col-span-3">
                    <div className="flex flex-wrap gap-y-2 gap-x-4">
                        {
                            ProLanguage.map((item, index) => {
                                return (
                                    <div key={index} className="text-center m-1 bg-[#fff] p-2 rounded-md flex-col items-center justify-center">
                                        <div className="w-10 sm:w-12 h-11 mx-auto">
                                            <img src={item.logo} alt={item.title} title={item.title} />
                                        </div>
                                        <div className="relative inset-x-0 bottom-[-6px]">
                                          <h2 className="uppercase pt-1 text-[var(--bg)] font-semibold text-[14px]">{item.title}</h2>  
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 mb-7 items-center lg:border lg:border-[var(--card1)] lg:rounded-md lg:p-2">
                <div className="text-start bg-[var(--bg)] rounded-xl py-2 px-4 w-[240px]">
                   <h3 className="capitalize font-bold text-[var(--highlight)]">programming libraries</h3> 
                </div>
                <div className="col-span-2 lg:col-span-3">
                    <div className="flex flex-wrap gap-y-2 gap-x-4">
                        {
                            ProLibraries.map((item, index) => {
                                return (
                                    <div key={index} className="text-center m-1 bg-[#fff] p-2 rounded-md flex-col items-center justify-center">
                                        <div className="w-10 sm:w-12 h-11 mx-auto">
                                            <img src={item.logo} alt={item.title} title={item.title} />
                                        </div>
                                        <div className="relative inset-x-0 bottom-[-6px]">
                                          <h2 className="uppercase pt-1 text-[var(--bg)] font-semibold text-[14px]">{item.title}</h2>  
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 mb-7 items-center lg:border lg:border-[var(--card1)] lg:rounded-md lg:p-2">
                <div className="text-start bg-[var(--bg)] rounded-xl py-2 px-4 w-[240px]">
                   <h3 className="capitalize font-bold text-[var(--highlight)]">programming frameworks</h3> 
                </div>
                <div className="col-span-2 lg:col-span-3">
                    <div className="flex flex-wrap gap-y-2 gap-x-4">
                        {
                            ProFrameworks.map((item, index) => {
                                return (
                                    <div key={index} className="text-center m-1 bg-[#fff] p-2 rounded-md flex-col items-center justify-center">
                                        <div className="w-10 sm:w-12 h-11 mx-auto">
                                            <img src={item.logo} alt={item.title} title={item.title} />
                                        </div>
                                        <div className="relative inset-x-0 bottom-[-6px]">
                                          <h2 className="uppercase pt-1 text-[var(--bg)] font-semibold text-[14px]">{item.title}</h2>  
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 mb-7 items-center lg:border lg:border-[var(--card1)] lg:rounded-md lg:p-2">
                <div className="text-start bg-[var(--bg)] rounded-xl py-2 px-4 w-[240px]">
                   <h3 className="capitalize font-bold text-[var(--highlight)]">programming tools</h3> 
                </div>
                <div className="col-span-2 lg:col-span-3">
                    <div className="flex flex-wrap gap-y-2 gap-x-4">
                        {
                            ProTools.map((item, index) => {
                                return (
                                    <div key={index} className="text-center m-1 bg-[#fff] p-2 rounded-md flex-col items-center justify-center">
                                        <div className="w-10 sm:w-12 h-11 mx-auto">
                                            <img src={item.logo} alt={item.title} title={item.title} />
                                        </div>
                                        <div className="relative inset-x-0 bottom-[-6px]">
                                          <h2 className="uppercase pt-1 text-[var(--bg)] font-semibold text-[14px]">{item.title}</h2>  
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* {
                SkillsLogo.map((item, index) => {
                    return (
                        <div key={index} className="w-12 sm:w-14 h-auto flex items-center justify-center my-2 mx-4">
                            <img src={item.logo} alt={item.title} title={item.title} />
                        </div>
                        
                    )
                })
            } */}
        </div>
        
    </div>
  )
}
export default SkillsPage