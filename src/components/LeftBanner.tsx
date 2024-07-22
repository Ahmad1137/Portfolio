import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaReact, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import Ahmadresume from "../assets/images/Ahmad resume.pdf";
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Software Engineer.", "ReactJS Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20 gap-14-lg">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-blue-700 capitalize">Ahmad Abdullah</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorStyle="|"
            cursorColor="#00008B
"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I am an energetic and hardworking person who has been able to achieve
          success in both academic and professional realms. After completing my
          graduation in computer science, I have taken my knowledge of computer
          science and software development specializing in React with Tailwind
          and Redux-toolkit as a Frontend services development. Being a student
          of computer science , I am familiar with C++ and OOP. To broaden my
          professional horizon , I am looking for more courses which will
          enhance my skill set and coupled with real practical experience , I am
          seeking a position with a dynamic and modern organisation.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ahmad-abdullah-software-engineering/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/Ahmad1137" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
        <div className="bannerIcon  w-auto-lg w-52 mt-5  animate-bounce">
          <a
            type="button"
            href={Ahmadresume}
            className="px-6"
            download="Ahmad Resume"
          >
            Download Cv
          </a>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJsSquare />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>

            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
