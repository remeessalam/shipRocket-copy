import { useState, useRef, useEffect } from "react";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import OfferHeading from "./components/OfferHeading/OfferHeading";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import FourthPage from "./pages/FourthPage/FourthPage";
import FifthPage from "./pages/FifthPage/FifthPage";
import SixthPage from "./pages/SixthPage/SixthPage";
import SeventhPage from "./pages/SeventhPage/SeventhPage";
import EightPage from "./pages/EightPage/EightPage";
import NinthPage from "./pages/NinthPage/NinthPage";

function App() {
  const [showLandingHeader, setShowLandingHeader] = useState(true);
  const markerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle header based on the visibility of the marker
        setShowLandingHeader(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 20% of the marker is visible
      }
    );

    if (markerRef.current) {
      observer.observe(markerRef.current);
    }

    return () => {
      if (markerRef.current) {
        observer.unobserve(markerRef.current);
      }
    };
  }, []);
  console.log(showLandingHeader, "alsdkfjalksdf");
  return (
    <div className="relative h-[100vh] w-[100vw] overflow-x-hidden">
      <OfferHeading markerRef={markerRef} />

      <Header isHeaderChange={showLandingHeader} />

      <LandingPage isHeaderChange={showLandingHeader} />

      <SecondPage />

      <ThirdPage />

      <FourthPage />

      <FifthPage />

      <SixthPage />

      <SeventhPage />

      <EightPage />

      <NinthPage />
    </div>
  );
}

export default App;
