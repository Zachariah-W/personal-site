import BasicInfo from "./BasicInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="w-screen h-screen bg-neutral-900 flex justify-center items-center"
      style={{ perspective: "1000px" }}
    >
      <Routes>
        <Route path="/" element={<BasicInfo />} />
      </Routes>
    </div>
  );
}

export default App;
