
import TabsProject from "@/components/TabsProject"


const Project = () => {
    return (
        <section id='project' className='mt-20'>
        <div className="text-center">
            <h1 className="text-[23px] gardient-text capitalize">project</h1> 
            <h1 className="text-gray-300 text-[30px] font-semibold normal-case leading-9 sm:leading-normal">Work experiences, Project for practice</h1>  
        </div>
        <div className="mt-10 flex justify-center items-center">
            <TabsProject />
        </div>
        </section>
    )
  }
  export default Project