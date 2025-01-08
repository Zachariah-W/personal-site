import { useState } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Photoshop from "./Photoshop";
import DesignAnimation from "./DesignAnimation";
import { motion } from "framer-motion";

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
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => {
        setAnimating(false);
      }}
    >
      <div className="backface-hidden absolute flex flex-row items-center justify-evenly gap-6 px-10 py-8 bg-rain shadow-xl bg-neutral-800 rounded-2xl text-neutral-300 border border-neutral-800">
        <div className="flex flex-col justify-center gap-3 items-center h-full">
          <img
            className="rounded-2xl max-w-32"
            src="/src/assets/Black_Linear_Fill_Black_Bg.png"
            alt="Image of Zachariah Wang"
          />
          <div className="flex flex-row items-center justify-center gap-3 *:w-8">
            <a href="mailto:zachwangs@gmail.com">
              <img
                className="rounded-full hover:scale-105 duration-200"
                src="/src/assets/gmail-icon.webp"
                alt="Link to Gmail"
              />
            </a>
            <a href="https://github.com/Zachariah-W">
              <img
                className="rounded-full hover:scale-105 duration-200"
                src="/src/assets/github-icon.png"
                alt="Link to GitHub"
              />
            </a>
            <a href="www.linkedin.com/in/zachariah-wang">
              <img
                className="rounded-full hover:scale-105 duration-200"
                src="/src/assets/linkedin-icon.png"
                alt="Link to LinkedIn"
              />
            </a>
            <a href="https://pda.104.com.tw/profile/share/2130RPFEGwRUsf2thAD6BIjgfnviSI2J">
              <img
                className="rounded-full hover:scale-105 duration-200"
                src="/src/assets/104-icon.png"
                alt="Link to 104"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col item-center justify-center *:text-xl *:text-left *:font-semibold h-full *:rounded-lg *:w-full">
          <button
            className="hover:bg-neutral-700 p-2 hover:scale-105 active:scale-100 transition-all duration-150"
            onClick={() => {
              flipCard({ status: "about" });
            }}
          >
            About Me
          </button>
          <button
            className="hover:bg-neutral-700 p-2 hover:scale-105 active:scale-100 transition-all duration-150"
            onClick={() => {
              flipCard({ status: "project" });
            }}
          >
            Projects
          </button>
          <button
            className="hover:bg-neutral-700 p-2 hover:scale-105 active:scale-100 transition-all duration-150"
            onClick={() => {
              flipCard({ status: "photo" });
            }}
          >
            Photoshop
          </button>
          <button
            className="hover:bg-neutral-700 p-2 hover:scale-105 active:scale-100 transition-all duration-150"
            onClick={() => {
              flipCard({ status: "design" });
            }}
          >
            Design & Animation
          </button>
        </div>
      </div>
      <div className="backface-hidden absolute flip-card-back bg-transparent p-3 sm:p-14 text-neutral-300 flex justify-center items-center">
        <div className="bg-rain rounded-2xl border border-neutral-800 shadow-xl p-5 overflow-y-auto max-h-[630px]">
          {page.status == "about" && <AboutMe />}
          {page.status == "project" && <Projects />}
          {page.status == "photo" && <Photoshop />}
          {page.status == "design" && <DesignAnimation />}
        </div>
      </div>
    </motion.div>
  );
};

export default BasicInfo;
