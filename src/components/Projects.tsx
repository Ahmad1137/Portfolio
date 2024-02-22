import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectOne,
  projectThree,
  projectTwo,
  projectfour,
  projectfive,
  projectsix,
} from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Color Palette"
            des="This pure JavaScript project features a versatile palette inspired by nature's vibrant and calming hues, perfect for any creative endeavor, from warm sunset tones to cool forest shades"
            src={projectOne}
          />
          <ProjectsCard
            title="E-commerce Website"
            des="Craft a dynamic e-commerce website using the Fake Store API and pure JavaScript for seamless shopping experiences."
            src={projectTwo}
          />
          <ProjectsCard
            title="Todo App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
          <ProjectsCard
            title="React-Router"
            des="Create a responsive website with React Router DOM support and integration with the GitHub API, providing smooth browsing and easy access to your repositories and user data"
            src={projectfour}
          />
          <ProjectsCard
            title="Auto Password"
            des="Generate secure passwords up to 100 characters long, with options for numbers and characters, and easily copy them to your clipboard with our efficient auto password generator"
            src={projectfive}
          />
          <ProjectsCard
            title="Currency Converter"
            des="Instantly convert currencies with accuracy using real-time exchange rates fetched from an API in my currency converter project"
            src={projectsix}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
