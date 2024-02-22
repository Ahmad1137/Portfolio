import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl text-center md:text-4xl font-bold">
            ACHIEVEMENTS
          </h2>
        </div>
        <div className="mt-6 lgl:mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Foundations (2018)."
            subTitle="Basics of computer."
            result="Success"
            des="Computer Foundations introduces basic computer skills like typing and understanding hardware/software concepts. It's perfect for beginners aiming to gain confidence in the digital world."
          />
          <ResumeCard
            title="SQL (04/2022)."
            subTitle=""
            result="Success"
            des="Sololearn - MySQL Database certification shows you've got the know- how to create, query, and run a MySQL databse"
          />
          <ResumeCard
            title="Cracking the Coding interview (07/2023 - 09/2023)"
            subTitle="Problem Solving"
            result="Success"
            des="Direction skills - Knowledge of problem solving and coding skills needed
                for interviews and practical tasks. Knowledge of data structures and
                algorithms."
          />
          <ResumeCard
            title="Leetcode (Rank 683,827)"
            subTitle="Problem's Solving"
            result="Success"
            des="Problem Solved :108 (https://leetcode.com/Ahmii1122/)."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
