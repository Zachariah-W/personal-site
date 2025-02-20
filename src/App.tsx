import BasicInfo from "./BasicInfo";
import Hence from "./Hence";
import Livelink from "./Livelink";
import Qadir from "./Qadir";
import Shiori from "./Shiori";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="relative w-screen h-screen bg-neutral-50 p-3 flex justify-center items-center"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 grid-rows-12 overflow-hidden -z-10">
        {Array.from({ length: 144 }).map((_, index) => (
          <div
            key={index}
            className="bg-neutral-50 border border-neutral-100 hover:bg-neutral-200 transition-all duration-500 ease-out delay-500 hover:delay-0"
          />
        ))}
      </div>

      <Routes>
        <Route path="/" element={<BasicInfo />} />
        <Route path="/Shiori" element={<Shiori />} />
        <Route path="/Hence" element={<Hence />} />
        <Route path="/Livelink" element={<Livelink />} />
        <Route path="/Qadir" element={<Qadir />} />
      </Routes>
    </div>
  );
}

export default App;
