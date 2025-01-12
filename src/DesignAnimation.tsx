import Animation from "./Animation";
import personalLogo from "./Animate/personal-logo-animation.json";
import qadirLogo from "./Animate/qadir-logo.json";
import writingIcon from "./Animate/writing-icon.json";
import sunMoon from "./Animate/sun-moon-icon.json";
import alarm from "./Animate/alarm-icon.json";
import folder from "./Animate/folder-icon.json";

const DesignAnimation = () => {
  return (
    <div className="grid grid-cols-6 gap-1 items-center">
      <Animation src={personalLogo} tempo={0.5} className="text-8xl" />
      <Animation src={qadirLogo} tempo={0.7} className="text-8xl" />
      <Animation src={writingIcon} tempo={0.7} className="text-7xl" />
      <Animation src={sunMoon} tempo={0.5} className="text-6xl" />
      <Animation src={alarm} tempo={0.5} className="text-6xl" />
      <Animation src={folder} tempo={0.8} className="text-7xl" />
    </div>
  );
};

export default DesignAnimation;
