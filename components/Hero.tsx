import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Volume2, VolumeX } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-brand-dark">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
          style={{
            transform: `translate(-50%, -50%) translateY(${offset * 0.3}px) scale(${1 + offset * 0.0003})`,
          }}
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
          {/* If video fails to load, fallback image will show via poster */}
        </video>
      </div>
      
      {/* Lighter overlay for better video visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[1]" />
      
      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 z-30 p-3 bg-black/40 hover:bg-black/60 border border-white/30 rounded-full transition-all duration-300 group backdrop-blur-sm"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white group-hover:text-brand-accent transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-white group-hover:text-brand-accent transition-colors" />
        )}
      </button>

      {/* Main Typography - Minimal Design */}
      <div className="relative z-20 text-center flex flex-col items-center w-full px-4">
        {/* Simple, large title */}
        <h1 className="font-mega text-7xl md:text-9xl lg:text-[10rem] leading-none uppercase text-white tracking-tighter drop-shadow-2xl opacity-0 animate-[slideUp_1s_ease-out_forwards]">
          Nanded Snaps
        </h1>

        {/* Minimal tagline */}
        <p className="text-gray-300 text-center mt-6 font-light text-lg md:text-xl opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          Photography Studio
        </p>

        {/* Single CTA button */}
        <div className="mt-10 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
          <a href="#contact" className="bg-white/90 text-black px-10 py-4 font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 backdrop-blur-sm">
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
           <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-down {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(15px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;