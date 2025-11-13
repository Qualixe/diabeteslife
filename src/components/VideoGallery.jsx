import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { createPortal } from "react-dom";

export default function VideoGallery() {
  const video = {
    id: 1,
    title: "Doctor Consulting a Patient",
    src: "/WorldDiabetesDayFinal2025.mp4",
    poster: "/WorldDiabetesDay.avif",
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const openModal = () => {
    setSelectedVideo(video);
    setTimeout(() => modalVideoRef.current?.play(), 200);
    document.body.style.overflow = "hidden"; // Prevent scroll
  };

  const closeModal = () => {
    modalVideoRef.current?.pause();
    setSelectedVideo(null);
    document.body.style.overflow = ""; // Restore scroll
  };

  const modal = selectedVideo ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Fullscreen backdrop */}
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/70 backdrop-blur-[12px] transition-all duration-500"
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      ></div>

      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 z-20 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <video
          ref={modalVideoRef}
          src={selectedVideo.src}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="max-w-[1200px] mx-auto text-center space-y-8">
        <div
          onClick={openModal}
          className="group relative mx-auto w-full max-w-4xl rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500"
        >
          <div className="relative aspect-video overflow-hidden">
            <video
              src={video.src}
              poster={video.poster}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            ></video>

            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/40 backdrop-blur-md rounded-full p-4 md:p-8 transition-transform duration-400 shadow-xl animate-zoom-in-out">
                <Play className="text-white w-6 h-6 lg:w-10 lg:h-10 sm:w-12 sm:h-12 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {selectedVideo && createPortal(modal, document.body)}
    </>
  );
}
