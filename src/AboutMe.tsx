import tsLogo from "../public/Projects/Tools/ts-logo.png";
import jsLogo from "../public/Projects/Tools/js-logo.png";
import framerLogo from "../public/Projects/Tools/framer-logo.png";
import tailwindLogo from "../public/Projects/Tools/tailwind-logo.png";
import reactLogo from "../public/Projects/Tools/react-logo.png";
import lottieLogo from "../public/Projects/Tools/lottielab-logo.jpg";
import firebaseLogo from "../public/Projects/Tools/firebase-logo.png";
import figmaLogo from "../public/Projects/Tools/figma-logo.png";
import xdLogo from "../public/Projects/Tools/xd-logo.png";
import aiLogo from "../public/Projects/Tools/Ai-logo.png";
import psLogo from "../public/Projects/Tools/ps-logo.png";
import gitLogo from "../public/Logos/github-icon.png";
import affinityLogo from "../public/Projects/Tools/affinity-logo.png";
import htmlLogo from "../public/Projects/Tools/html-logo.png";
import cssLogo from "../public/Projects/Tools/css-logo.svg";
import personalImage from "../public/Photos/big-ben-image.jpg";

const AboutMe = () => {
  return (
    <div>
      <div className="max-w-screen-md flex flex-row justify-center items-center gap-5 px-5">
        <div>
          <h1 className="font-bold text-2xl pb-3">My name is Zachariah Wang</h1>
          <p className="text-lg">
            I am a student majoring in Web Design and Engineering and minoring
            in Graphic Design at Santa Clara University. My passion lies in
            UI/UX design, where I enjoy crafting user experiences that are clean
            and simple to create a sense of approachability and elegance.
            Originally from Taiwan, I moved to the United States in 2022 to
            further my education and explore new creative opportunities, and I
            believe that my background and international experiences will allow
            me to bring a unique and thoughtful approach to my designs.
          </p>
        </div>
        <img
          src={personalImage}
          alt="Photo of Zachariah Wang"
          className="w-1/2 rounded-lg "
        />
      </div>
      <div className="max-w-screen-md px-5">
        <h1 className="font-bold text-2xl pb-3">Technical Skills</h1>
        <div className="flex flex-rows gap-2 justify-start items-center *:bg-center *:w-10 *:h-10 *:rounded-md *:shadow-md">
          <img src={aiLogo} />
          <img src={psLogo} />
          <img src={xdLogo} />
          <img src={figmaLogo} />
          <img src={lottieLogo} />
          <img src={htmlLogo} />
          <img src={cssLogo} />
          <img src={tailwindLogo} />
          <img src={jsLogo} />
          <img src={tsLogo} />
          <img src={reactLogo} />
          <img src={gitLogo} />
          <img src={firebaseLogo} />
          <img src={framerLogo} />
          <img src={affinityLogo} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
