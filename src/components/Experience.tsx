import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl  md:text-4xl text-center font-bold">
            Work Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-4 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front End Developer"
            subTitle="Progists -(01/09/2023 - 30/11/2023)"
            result="Lahore"
            des="I developed and maintained responsive web applications using
HTML, CSS, Bootstrap and JavaScript to ensure a seamless user experience across various devices. Utilized JavaScript to enhance user interactivity and d improve overall site functionality."
          />
          <ResumeCard
            title="ReactJS Developer"
            subTitle="Stepinnsolution - (01/12/2023 - Present)"
            result="Lahore"
            des=" Based in Lahore, my role involves leveraging ReactJS to build interactive user interfaces and enhance overall user experience. For a glimpse of my expertise, feel free to explore my GitHub repositories."
          />
          <ResumeCard
            title="Personal Experience"
            subTitle="Learning - (2020 - 2024)"
            result="Lahore"
            des="I've developed a project equivalent to the MERN stack that specifically includes a recipe hub for culinary inspiration and sharing. Also, I've built a PHP-based plant store using Stripe integration for ease of use and security. Discover an environment of tastes and colors by visiting these applications. You can find more details on my repositories at GitHub.
"
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
