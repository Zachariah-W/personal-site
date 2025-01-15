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
          <h2 className="text-7xl font-semibold h-full w-1/2 text-center">
            Features
          </h2>
          <ul className="*:mb-2 text-md w-1/2 pl-5 text-left border border-l-neutral-800 py-3">
            <li>
              <span className="font-semibold">Create New Trips</span>
              <br /> Add a trip with essential details like title, location,
              dates, and images
            </li>
            <li>
              <span className="font-semibold">Event Tracking</span>
              <br /> Add events during your trip to document activities, with
              titles and descriptions
            </li>
            <li>
              <span className="font-semibold">Trip Overview</span>
              <br /> See all trips on the home screen with basic information.
              Click on a trip for detailed views
            </li>
            <li>
              <span className="font-semibold">Trip Management</span>
              <br /> Edit or delete trips as needed
            </li>
            <li>
              <span className="font-semibold">Travel Data Insights</span>
              <br /> Track your travel data and history
            </li>
            <li>
              <span className="font-semibold">Google Authentication</span>
              <br /> Log in using your Google account to securely access and
              manage your trips
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
      <div className="mx-8 flex flex-row items-center justify-between">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Shiori;
