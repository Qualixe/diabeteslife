import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import HeroButton from "./Button";

export default function VideoGallery() {
  const video = {
    id: 1,
    title: "Doctor Consulting a Patient",
    src: "/WorldDiabetesDay.mp4",
    poster: "/WorldDiabetesDay.avif",
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const openModal = () => {
    setSelectedVideo(video);
    setTimeout(() => modalVideoRef.current?.play(), 200);
  };

  const closeModal = () => {
    modalVideoRef.current?.pause();
    setSelectedVideo(null);
  };

  return (
    <section className="w-full bg-transparent py-5  px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto text-center space-y-12">
        {/* Heading */}
   

        {/* Single Large Video Card */}
        <div
          onClick={openModal}
          className="group relative mx-auto w-full max-w-4xl rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500"
        >
          {/* Video Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            <video
              src={video.src}
              poster={video.poster}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            ></video>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/40 backdrop-blur-md rounded-full p-4 md:p-8 transition-transform duration-400  shadow-xl animate-zoom-in-out">
                <Play className="text-white w-6 h-6 lg:w-10 lg:h-10 sm:w-12 sm:h-12 animate-pulse" />
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute  top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-10 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <video
              ref={modalVideoRef}
              src={selectedVideo.src}
              controls
              muted={false}
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}


    </section>
  );
}
