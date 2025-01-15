import { useState } from "react";
import shiori from "../public/Projects/shiori-cover.jpg";
import hence from "../public/Projects/hence-cover.jpg";
import qadir from "../public/Projects/qadir-cover.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  const [display, setDisplay] = useState<string>("");

  return (
    <div className="p-3 grid grid-cols-3 gap-4 items-center *:w-52 *:h-64 *:rounded-lg">
      <Link
        to="/Shiori"
        style={{ backgroundImage: `url(${shiori})` }}
        className="bg-cover bg-center"
      >
        <div
          className="project-description"
          onMouseEnter={() => {
            setDisplay("shiori");
          }}
          onMouseLeave={() => {
            setDisplay("");
          }}
        >
          {display == "shiori" && (
            <div className="flex flex-col gap-2">
              <p>Shiori is a site that helps you plan and manage your trips</p>
              <p className="font-semibold">Click for details</p>
            </div>
          )}
        </div>
      </Link>

      <Link
        to="/Hence"
        style={{ backgroundImage: `url(${hence})` }}
        className="bg-cover bg-center"
      >
        <div
          className="project-description"
          onMouseEnter={() => {
            setDisplay("hence");
          }}
          onMouseLeave={() => {
            setDisplay("");
          }}
        >
          {display == "hence" && (
            <div className="flex flex-col gap-2">
              <p>
                Hence is a site that allows you to build personal calculators
              </p>
              <p className="font-semibold">Click for details</p>
            </div>
          )}
        </div>
      </Link>
      <Link
        to="/Qadir"
        style={{ backgroundImage: `url(${qadir})` }}
        className="bg-cover bg-center"
      >
        <div
          className="project-description"
          onMouseEnter={() => {
            setDisplay("qadir");
          }}
          onMouseLeave={() => {
            setDisplay("");
          }}
        >
          {display == "qadir" && (
            <div className="flex flex-col gap-2">
              <p>
                Qadir Corp is a robotic automation company and custamize and
                designs machines for clients
              </p>
              <p className="font-semibold">Click for details</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Projects;
