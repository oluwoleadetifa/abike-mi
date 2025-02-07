import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/Button";

const images = [
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg",
  "/image4.jpeg",
  "/image5.jpeg",
  "/image6.jpeg",
  "/image7.jpeg",
];

export default function ValentinePage() {
  const [running, setRunning] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [isFinalImage, setIsFinalImage] = useState(false);

  useEffect(() => {
    if (!isFinalImage) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isFinalImage]);
  
  const moveNoButton = () => {
    setRunning(true);
    setNoPosition({
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150,
    });
  };
  
  const sayYay = () => {
    setMessage("YAAAYYY! 💖");
    setCurrentImage(images.length - 1); // Show the last image permanently
    setIsFinalImage(true);
  };
  
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden text-center bg-black">
      {/* Background Music */}
      <audio autoPlay loop>
        <source src="/background-music.mp3" type="audio/mp3" />
      </audio>
      
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentImage]}
          className="w-full h-full object-cover"
          alt="Slideshow"
        />
      </div>
      <div className="z-10 bg-white/80 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4">Will you be my Valentine? 💖</h1>
        {message ? (
          <h2 className="text-2xl font-bold text-pink-600">{message}</h2>
        ) : (
          <div className="flex space-x-4">
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-3 rounded-xl shadow-lg"
              onClick={sayYay}
            >
              Yes! 💕
            </Button>
            <motion.div
              animate={running ? { x: noPosition.x, y: noPosition.y } : {}}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                onMouseEnter={moveNoButton}
                className="bg-gray-500 text-white text-lg px-6 py-3 rounded-xl shadow-lg"
              >
                No 🙈
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
