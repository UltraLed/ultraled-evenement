import "./styles/global.css";
import "./styles/App.css";
import "./styles/Home.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Prestations from "./pages/Prestations.jsx";
import Realisations from "./pages/Realisations.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import RealisationDetail from "./pages/RealisationDetail";

// Pages de détails prestations 
import Sonorisation from "./pages/prestation-details/Sonorisation";
import DJAnimation from "./pages/prestation-details/DJAnimation";
import Eclairage from "./pages/prestation-details/Eclairage";
import EclairageScenique from "./pages/prestation-details/EclairageScenique";
import PetitComite from "./pages/prestation-details/sonorisation/PetitComite";
import SalleMoyenne from "./pages/prestation-details/sonorisation/SalleMoyenne";
import GrandeSalle from "./pages/prestation-details/sonorisation/GrandeSalle";
import Concert from "./pages/prestation-details/sonorisation/Concert";

export default function App() {
  return (
    <>
      <Header />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/realisations/:id" element={<RealisationDetail />} />

          {/* Pages détaillées des prestations */}
          <Route path="/prestation/sonorisation" element={<Sonorisation />} />
          <Route path="/prestation/dj-animation" element={<DJAnimation />} />
          <Route path="/prestation/eclairage" element={<Eclairage />} />
          <Route path="/prestation/eclairage-scenique" element={<EclairageScenique />} />
          <Route path="/prestation/sonorisation/petit-comite" element={<PetitComite />} />
          <Route path="/prestation/sonorisation/salle-moyenne" element={<SalleMoyenne />} />
          <Route path="/prestation/sonorisation/grande-salle" element={<GrandeSalle />} />
          <Route path="/prestation/sonorisation/concert" element={<Concert />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}