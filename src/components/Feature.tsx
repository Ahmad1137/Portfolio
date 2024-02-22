import { DiResponsive } from "react-icons/di";
import { FaGlobe, FaBug } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Web Development"
            des="Start developing websites by gaining knowledge of HTML, CSS, Bootstrap, JavaScript, and React.js."
            icon={<CgWebsite />}
          />
          <Card
            title="API Integration"
            des="I  do easily integrate APIs to enhance your application's functionality and connectivity."
            icon={<TbApi />}
          />
          <Card
            title="Responsive Desing"
            des="I can create beautiful websites that adapt perfectly to any device with responsive web design expertise."
            icon={<DiResponsive />}
          />
          <Card
            title="Bug Fixing"
            des="I identify and resolve errors to ensure optimal performance and user experience of your website."
            icon={<FaBug />}
          />
          <Card
            title="Figma to React"
            des="I can Easily and accurately transform Figma designs into React.js"
            icon={<SiAntdesign />}
          />
          <Card
            title="Hosting Websites"
            des="Efficiently host your website with reliable services for seamless online accessibility."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
