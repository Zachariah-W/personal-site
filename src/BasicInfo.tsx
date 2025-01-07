import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Photoshop from "./Photoshop";
import DesignAnimation from "./DesignAnimation";

type PageStatus = {
  status: "home" | "about" | "design" | "photo" | "project";
};

const BasicInfo = () => {
  const [flip, setFlip] = useState<boolean>(false);
  const [page, setPage] = useState<PageStatus>({ status: "home" });
  const flipCard = (page: PageStatus) => {
    setPage(page);
    setFlip(!flip);
  };

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={flip}>
      <div className="flex flex-row items-center justify-evenly gap-6 py-10 px-10 card">
        <div className="flex flex-col justify-center gap-3 items-center h-full">
          <img
            className="rounded-2xl max-w-32"
            src="/src/assets/Black_Linear_Fill_Black_Bg.png"
            alt="Image of Zachariah Wang"
          />
          <div className="flex flex-row items-center justify-center gap-3 *:max-w-8">
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
      <div className="card card-back max-w-screen-lg p-2">
        {page.status == "about" && <AboutMe />}
        {page.status == "project" && <Projects />}
        {page.status == "photo" && <Photoshop />}
        {page.status == "design" && <DesignAnimation />}
      </div>
    </ReactCardFlip>
  );
};

export default BasicInfo;
