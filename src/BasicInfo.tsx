import { useState } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import DesignAnimation from "./DesignAnimation";
import { motion } from "framer-motion";
import { FiChevronLeft } from "react-icons/fi";
import personalLogo from "../public/Logos/Black_Linear_Fill_Black_Bg.png";
import twLogo from "../public/Logos/104-icon.png";
import linkedinLogo from "../public/Logos/linkedIn-icon.png";
import gitLogo from "../public/Logos/github-icon.png";
import gmailLogo from "../public/Logos/gmail-icon.webp";

type PageStatus = {
  status: "home" | "about" | "design" | "photo" | "project";
};

const BasicInfo = () => {
  const [flip, setFlip] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);
  const [page, setPage] = useState<PageStatus>({ status: "home" });

  const flipCard = (page: PageStatus) => {
    if (!animating) {
      setFlip(!flip);
      setAnimating(true);
      setPage(page);
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center *:w-full *:h-full"
      initial={false}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={
        flip
          ? { rotateY: 180, height: "100vh", width: "100vw" }
          : { rotateY: 360, height: "260px", width: "480px" }
      }
      transition={{ duration: 0.8 }}
      onAnimationComplete={() => {
        setAnimating(false);
      }}
    >
      <div className="backface-hidden absolute flex flex-row items-center justify-evenly gap-6 px-10 py-8 shadow-lg bg-neutral-50 rounded-2xl border border-neutral-200 hover:animate-wiggle text-neutral-600">
        <div className="flex flex-col justify-center gap-3 items-center h-full">
          <img
            className="rounded-2xl max-w-32 text-5xl"
            src={personalLogo}
            alt="Image of Zachariah Wang"
          />
          <div className="flex flex-row items-center justify-center gap-3 *:w-8">
            <a href="mailto:zachwangs@gmail.com" target="_blank">
              <img
                className="rounded-full hover:scale-105 duration-200"
                src={gmailLogo}
                alt="Link to Gmail"
              />
            </a>
            <a href="https://github.com/Zachariah-W" target="_blank">
              <img
                className="rounded-full hover:scale-105 duration-200"
                src={gitLogo}
                alt="Link to GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/zachariah-wang/"
              target="_blank"
            >
              <img
                className="rounded-full hover:scale-105 duration-200"
                src={linkedinLogo}
                alt="Link to LinkedIn"
              />
            </a>
            <a
              href="https://pda.104.com.tw/profile/share/3DhHfFtThh387yJ2ggoVmKqFNtmJLgtH"
              target="_blank"
            >
              <img
                className="rounded-full hover:scale-105 duration-200"
                src={twLogo}
                alt="Link to 104"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col item-center justify-center *:text-xl *:text-left *:font-semibold h-full *:rounded-lg *:w-full">
          <button
            className="hover:bg-neutral-200 p-2 hover:scale-105 active:scale-100 transition-all duration-150"
            onClick={() => {
              flipCard({ status: "about" });
            }}
          >
            About Me
          </button>
          <button
            className="hover:bg-neutral-200 p-2 hover:scale-105 active:scale-100 transition-all duration-150"
            onClick={() => {
              flipCard({ status: "project" });
            }}
          >
            Projects
          </button>
          <button
            className="hover:bg-neutral-200 p-2 hover:scale-105 active:scale-100 transition-all duration-150"
            onClick={() => {
              flipCard({ status: "design" });
            }}
          >
            Design & Animation
          </button>
        </div>
      </div>
      <div className="backface-hidden absolute flip-card-back p-3 sm:p-14 text-neutral-300 flex justify-center items-center bg-opacity-10">
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 shadow-xl p-5 overflow-y-auto flex items-center justify-center max-h-[700px]">
          <button
            className="top-4 left-4 text-neutral-300 flex justify-start rounded-full hover:bg-neutral-500 duration-300 text-2xl hover:scale-110"
            onClick={() => flipCard({ status: "home" })}
          >
            <FiChevronLeft />
          </button>
          {page.status == "about" && <AboutMe />}
          {page.status == "project" && <Projects />}
          {page.status == "design" && <DesignAnimation />}
        </div>
      </div>
    </motion.div>
  );
};

export default BasicInfo;
