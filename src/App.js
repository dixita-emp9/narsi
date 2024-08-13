import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import OverlayNav from './components/NavHeader';
import Home from './Home';
import AboutUs from "./AboutUs.js";
import Manufacturing from './Manufacturing';
import DesignAndBuild from "./DesignAndBuild";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import Projectsbycategory from "./ProjectByCategory.js";
import Projectsearch from "./ProjectSearch.js";
import FireDoors from "./FireDoors";
import Press from "./Press";
import AwardsAndTestimonials from "./AwardsAndTestimonials";
import Testimonials from "./Testimonials";
import Awards from "./Awards";
import Career from "./Career";
import { useEffect } from "react";


function App() {

  return (
    <div id="app" className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/designandbuild" element={<DesignAndBuild />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/firedoors" element={<FireDoors />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />} />
          <Route path="/Projectsbycategory/:category" element={<Projectsbycategory />} />
          <Route path="/Search/:name" element={<Projectsearch />} />
          <Route path="/press" element={<Press />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/awardsAndTestimonials" element={<AwardsAndTestimonials />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
