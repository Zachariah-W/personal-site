import banner from "./Projects/shiori-banner.svg";
import demoVideo from "./Projects/shiori-demo.mp4";

const Shiori = () => {
  return (
    <div className="flex flex-col items-center gap-4 overflow-y-auto h-full rounded-lg w-full mx-4 *:text-neutral-300 bg-rain bg-neutral-800 shadow-lg">
      <img src={banner} alt="shiori banner" className="w-full" />
      <div className="w-full"></div>
      <p className="max-w-screen-sm">
        Shiori is a simple and user-friendly trip planner and manager that helps
        you organize and document your trips. You can plan your trips, add
        events, and capture your memories all in one place.
      </p>
      <video className="max-w-screen-sm rounded-xl" autoPlay loop muted>
        <source src={demoVideo} type="video/mp4" />
      </video>
      <div className="w-full">
        <h2 className="text-xl font-semibold text-left w-full">Tech Stack</h2>
        <p className="text-left w-full">
          React, TypeScript, Framer Motion, Tailwind CSS, Lottie, FireBase,
          Figma
        </p>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold text-left w-full">Features</h2>
        <ul className="list-disc pl-5 text-left">
          <li>
            Create New Trips: Add a trip with essential details like title,
            location, dates, and images
          </li>
          <li>
            Event Tracking: Add events during your trip to document activities,
            with titles and descriptions
          </li>
          <li>
            Trip Overview: See all trips on the home screen with basic
            information. Click on a trip for detailed views
          </li>
          <li>Trip Management: Edit or delete trips as needed</li>
          <li>Travel Data Insights: Track your travel data and history</li>
          <li>
            Google Authentication: Log in using your Google account to securely
            access and manage your trips
          </li>
        </ul>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold text-left w-full">Links</h2>
        <div className="flex flex-row w-full items-center gap-4">
          <a
            className="w-1/2 rounded-lg p-2 hover:bg-neutral-800 hover:bg-opacity-80 border border-transparent hover:border-neutral-700 hover:shadow-md h-20"
            href="#"
          >
            <h2 className="font-semibold">Shiori Link</h2>
            <p className="text-neutral-400 text-sm">
              A site that helps you plan and manage your trips
            </p>
          </a>
          <a
            className="w-1/2 rounded-lg p-2 hover:bg-neutral-800 hover:bg-opacity-80 border border-transparent hover:border-neutral-700 hover:shadow-md h-20"
            href="#"
          >
            <h2 className="font-semibold">GitHub</h2>
            <p className="text-neutral-400 text-sm">
              Shiori's github repository
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shiori;
