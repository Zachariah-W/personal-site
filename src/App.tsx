import BasicInfo from "./BasicInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center items-center">
      <div className="shadow-xl bg-rain bg-neutral-800 rounded-2xl text-neutral-300 border border-neutral-700">
        <Routes>
          <Route path="/" element={<BasicInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
