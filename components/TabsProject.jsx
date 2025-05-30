import { MotionTabs } from "@/utils/Framer_motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { transition, varients } from "@/utils/Framer_varients";
import CardExpeience from "./CardExpeience";
import CardProjectMe from "./CardProjectMe";

const TabsProject = () => {
  return (
    <MotionTabs 
      defaultValue="work" 
      className="w-[100%] leading-7 flex justify-center items-center "

      initial='initial'
      animate='animate'
      variants={varients.moveUp}
      transition={transition.moveUp}

    >
      {/* Tabs Menu */}
      <TabsList className={`mb-2`}>
        <TabsTrigger value="work" className={`tab-trigger hover:border-b-3 hover:inset-3 hover:border-emerald-400`}> 
          <label htmlFor="work" className="px-3 text-[18px] cursor-pointer"> Work </label>  
        </TabsTrigger>
        <TabsTrigger value="project" className={`tab-trigger hover:border-b-3 hover:inset-3 hover:border-emerald-400`}>
          <label htmlFor="project" className="px-3 text-[18px] cursor-pointer"> Project </label>
        </TabsTrigger>
      </TabsList>

      {/* Tabs Content */}
      <TabsContent value="work" className={`tab-content`}>
        <h2 className="text-[23px] font-semibold">Work Experiance</h2>
        <div>
          <CardExpeience />
        </div>
      </TabsContent>
      <TabsContent value="project" className={`tab-content`}>
        <h2 className="text-[23px] font-semibold">My Project</h2>
        <div>
          <CardProjectMe />
        </div>
        
      </TabsContent>
    </MotionTabs>
  );
};
export default TabsProject;
