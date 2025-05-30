import { SkillsLogo } from "@/utils/Skills"

const SkillsPage = () => {
  return (
    <div className="my-7 gardient-bg p-4 rounded-md">
        
        <div className="flex flex-wrap">
            {
                SkillsLogo.map((item, index) => {
                    return (
                        <div key={index} className="w-12 sm:w-14 h-auto flex items-center justify-center my-2 mx-4">
                            <img src={item.logo} alt={item.title} title={item.title} />
                        </div>
                        
                    )
                })
            }
        </div>
        
    </div>
  )
}
export default SkillsPage