import aboutImage from "../../../assets/images/hero.webp";
import videoThumb from "../../../assets/Videos/videoplayback.mp4";
import { FaPlay, FaPause } from "react-icons/fa";
import { useRef, useState } from "react";

const AboutImage = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative pr-12  pb-10 lg:pb-20">

      {/* Dots */}
      <div className="absolute left-0 bottom-0 grid grid-cols-12 gap-7 z-0">
        {[...Array(72)].map((_, index) => (
          <span key={index} className="w-1 h-1 rounded-full bg-gray-400/40" />
        ))}
      </div>

      {/* Main Image */}
      <img
        src={aboutImage}
        alt="About"
        className="w-full rounded-sm object-cover shadow-lg relative z-10"
      />

      {/* Video Box */}
      <div className="group absolute right-2 bottom-2 sm:right-[-30px] sm:bottom-[-8px] 
        w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 
        rounded-sm overflow-hidden shadow-2xl z-20">

        <video
          ref={videoRef}
          src={videoThumb}
          preload="none"
          className="w-full h-full object-cover"
        />

        <div
          className={`
            absolute inset-0 bg-black/30 flex items-center justify-center transition
            ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
          `}
        >
          <button
            onClick={togglePlay}
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 
            rounded-full bg-white text-black flex items-center justify-center"
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutImage;
