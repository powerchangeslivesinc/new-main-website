import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Health from "./pages/HEALTH";
import IPlay from "./pages/iPlay";
import LavaLove from "./pages/LavaLove";
import OperationHoliday from "./pages/Operation-Holiday";
import PowerKitchens from "./pages/Power-Kitchens";
import ProjectFeed from "./pages/Project-FEED";
import SeniorConnect from "./pages/Senior-Connect";
import CrimsonProject from "./pages/The-Crimson-Project";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />}/>
          <Route path="/education" element={<Education />} />
          <Route path="/health" element={<Health />} />
          <Route path="/iplay" element={<IPlay/>} />
          <Route path="/lavalove" element={<LavaLove />} />
          <Route path="/operation-holiday" element={<OperationHoliday />} />
          <Route path="/power-kitchens" element={<PowerKitchens />} />
          <Route path="/project-feed" element={<ProjectFeed />} />
          <Route path="/senior-connect" element={<SeniorConnect />} />
          <Route path="/crimson-project" element={<CrimsonProject />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
