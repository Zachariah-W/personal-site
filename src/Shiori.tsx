import { useState } from "react";
import { motion } from "framer-motion";
import add from "../public/Projects/shiori-wf/add-edit-wf.jpg";
import data from "../public/Projects/shiori-wf/data-wf.jpg";
import home from "../public/Projects/shiori-wf/home-wf.jpg";
import landing from "../public/Projects/shiori-wf/landing-wf.jpg";
import trip from "../public/Projects/shiori-wf/trip-wf.jpg";
import banner from "../public/Projects/shiori-banner.svg";
import demoVideo from "../public/Projects/shiori-demo.mp4";
import tsLogo from "../public/Projects/Tools/ts-logo.png";
import jsLogo from "../public/Projects/Tools/js-logo.png";
import framerLogo from "../public/Projects/Tools/framer-logo.png";
import tailwindLogo from "../public/Projects/Tools/tailwind-logo.png";
import reactLogo from "../public/Projects/Tools/react-logo.png";
import lottieLogo from "../public/Projects/Tools/lottielab-logo.jpg";
import firebaseLogo from "../public/Projects/Tools/firebase-logo.png";
import figmaLogo from "../public/Projects/Tools/figma-logo.png";
import searchDemo from "../public/Projects/shiori-searchBar-demo.mp4";
import graphDemo from "../public/Projects/shiori-graph-demo.mp4";

const Shiori = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [add, data, home, landing, trip];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex flex-col items-center gap-4 overflow-y-auto h-full rounded-lg w-full mx-4 *:text-neutral-300 bg-rain bg-neutral-800 shadow-2xl">
      <img src={banner} alt="shiori banner" className="w-full shadow-2xl" />
      {/* Basic Info and Tech Stack */}
      <div className=" flex flex-row justify-between items-center mx-8">
        <div className="w-2/3 text-neutral-800 bg-neutral-200 rounded-xl p-3 shadow-xl shadow-neutral-800">
          <h2 className="text-xl font-bold">About Shiori</h2>
          <p>
            Shiori is a simple and user-friendly trip planner and manager that
            helps user organize and document your trips. Users can plan their
            trips, add events, and capture your memories all in one place,
            making it easier for user to look up for trips in the past.
          </p>
        </div>
        <div className="flex flex-col gap-5 text-neutral-800 p-4 bg-neutral-200 shadow-xl shadow-neutral-800 rounded-xl">
          <h2 className="text-xl font-bold">Tools used</h2>
          <div className="flex flex-rows gap-2 justify-start items-center *:bg-center *:w-10 *:h-10 *:rounded-md *:shadow-md">
            <img src={tsLogo} />
            <img src={jsLogo} />
            <img src={figmaLogo} />
            <img src={tailwindLogo} />
            <img src={firebaseLogo} />
            <img src={reactLogo} />
            <img src={lottieLogo} />
            <img src={framerLogo} />
          </div>
        </div>
      </div>
      {/* Demo Video Display */}
      <div className="flex flex-row gap-4 mx-8 p-3 *:w-1/2 rounded-xl bg-neutral-200 shadow-xl shadow-neutral-800">
        <div className="flex flex-col *:rounded-xl max-w-screen-sm gap-5">
          <div className="flex flex-row justify-between *:rounded-xl items-center">
            <h1 className=" text-neutral-800 text-6xl font-bold">
              Interactions
            </h1>
            <video autoPlay loop muted className="max-h-16">
              <source src={searchDemo} type="video/mp4" />
            </video>
          </div>
          <video loop muted autoPlay>
            <source src={graphDemo} type="video/mp4" />
          </video>
        </div>
        <video className="max-w-screen-sm rounded-xl" autoPlay loop muted>
          <source src={demoVideo} type="video/mp4" />
        </video>
      </div>
      {/* Features */}
      <div className=" w-full mt-3 px-8">
        <div className="flex flex-row justify-between bg-neutral-200 text-neutral-800 rounded-xl px-2 items-center shadow-xl shadow-neutral-800">
          <h2 className="text-7xl font-semibold h-full w-1/3 text-center">
            Features
          </h2>
          <ul className="*:mb-2 text-md w-2/3 pl-5 text-left border border-l-neutral-800 py-3">
            <li>
              <span className="font-semibold">Create New Trips</span>
              <br /> Users can add trips with essential details such as title,
              location, dates, events, and images.
            </li>
            <li>
              <span className="font-semibold">Event Tracking</span>
              <br /> Users can add events while creating trips, allowing them to
              document their experiences and feelings in greater detail.
            </li>
            <li>
              <span className="font-semibold">Trip Overview</span>
              <br /> View all trips on the home screen with basic information
              such as trip title, location, and banner images. To view the
              details of a trip, users simply need to click on the trip, and
              they will be redirected to the trip information page.
            </li>
            <li>
              <span className="font-semibold">Trip Management</span>
              <br /> Users can edit or delete any elements of a trip in case
              they make a mistake or want to add more information later.
            </li>
            <li>
              <span className="font-semibold">Travel Data Insights</span>
              <br /> Users can view their travel data by clicking the "Data"
              button at the top. Information such as the number of countries
              visited and the top visited countries will be displayed.
            </li>
            <li>
              <span className="font-semibold">Google Authentication</span>
              <br /> Users' data is stored securely based on their email
              accounts, ensuring their information remains safe. This also
              allows users to access their trips anywhere and anytime, as long
              as they can log in to Gmail.
            </li>
          </ul>
        </div>
      </div>
      {/* Documentationn */}
      <div className="w-full items-center flex justify-center py-28 bg-neutral-200">
        <h1 className="text-neutral-800 font-bold text-7xl">
          Documentation and Design
        </h1>
      </div>
      <div className="w-full px-8 flex flex-col items-center gap-6 pt-2">
        <div className="bg-neutral-200 rounded-md p-3 flex flex-col w-1/2 *:text-neutral-800">
          <h2 className="text-xl font-semibold">Target Audience</h2>
          <p>
            The target audience for Shiori is mainly towards the ealderly
            people.
          </p>
        </div>
        <div className="flex flex-col items-center w-full rounded-xl bg-neutral-200 py-6">
          <h2 className="text-neutral-800 mb-4 font-bold text-5xl border border-b-neutral-800 w-full text-center pb-3">
            Wireframes
          </h2>
          <div className="relative w-full h-96 overflow-hidden flex justify-center">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="rounded-xl shadow-md"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ width: "40%", position: "absolute" }}
              />
            ))}
          </div>
          <div className="flex flex-row gap-3">
            <button
              className="text-white bg-neutral-800 rounded-lg py-2 px-4"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              className="text-white bg-neutral-800 rounded-lg py-2 px-4"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shiori;
