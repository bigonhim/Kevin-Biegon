import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import kevinPic from "../assets/company/kevinPic.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[60px] sm:top-[20px] lg:top-[20px] justify-center lg:justify-start
         max-w-7xl mx-auto flex flex-col md:flex-row items-center lg:gap-40 gap-8 `}
      >
        <div className="flex flex-row mt-8">
          <div className="flex flex-col justify-center items-center   ">
            <div className="w-5 h-5 rounded-full bg-[#2E3192]" />
            <div className="w-1 md:h-80 sm:h-50 h-40 violet-gradient" />
          </div>
          <div className="ml-2">
            <h4 className={`${styles.heroHeadText} text-white `}>
              Hello I'm <br></br>
              <span className="text-[#2E3192]">Kevin</span>
            </h4>
            <p className={`${styles.heroSubText}  text-white-100 `}>
              From Ideas to Impact <br />
              Let’s Build Something Great
            </p>
          </div>
        </div>
        <img
          className="rounded-full  w-72 h-72  md:w-96 md:h-96  border-2  "
          src={kevinPic}
        />
      </div>
      <div className=" none sm:absolute md:bottom-1  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
