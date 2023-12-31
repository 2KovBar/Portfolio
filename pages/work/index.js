//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className=" bg-primary/30 md:pt-32  md:flex md:items-center overflow-y-auto md:overflow-auto py-32 h-full">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:q-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 md:max-xl:mt-64 "
            >
              Examples of our <span className="text-accent"> work.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-xs md:max-w-full md:text-lg"
            >
              Our portfolio showcases a diverse range of projects we have
              successfully completed for our clients. Each project represents
              our expertise, creativity, and commitment to delivering
              high-quality solutions. These examples demonstrate our ability to
              deliver successful projects across different industries and
              domains. We take pride in our work and strive to exceed client
              expectations with every project we undertake.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
