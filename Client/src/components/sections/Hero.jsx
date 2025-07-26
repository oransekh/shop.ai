import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroimages } from "../../assets/assets";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous image
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroimages.length - 1 : prev - 1));
  };

  // Go to next image
  const nextImage = () => {
    setCurrentIndex((prev) => (prev === heroimages.length - 1 ? 0 : prev + 1));
  };

  //  Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // move forward automatically
    }, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroimages[currentIndex]}
        alt="Hero Banner"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/30"></div> */}

      {/* Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full transition"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 rounded-full transition"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
