import React, { useState, useEffect, useRef } from 'react';

// Array of sample images from Pexels
const carouselImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
    alt: "Medical professionals examining scan results"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/4226765/pexels-photo-4226765.jpeg",
    alt: "Healthcare professional with digital tablet"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg",
    alt: "Doctor reviewing medical information"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/3952219/pexels-photo-3952219.jpeg",
    alt: "Medical consultation"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg",
    alt: "Healthcare technology"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/5214953/pexels-photo-5214953.jpeg",
    alt: "Medical research and analysis"
  }
];

export const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-slide every 2 seconds when not hovering
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovering]);

  // Handle mouse events
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Calculate indices for visible images
  const getPrevIndex = () => 
    currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
  const getNextIndex = () => 
    currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="relative overflow-hidden px-4">
      <div 
        ref={carouselRef}
        className="flex justify-center items-center h-[400px] gap-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Previous Image */}
        <div className="w-[200px] h-[300px] transition-all duration-500 opacity-50 scale-75">
          <img
            src={carouselImages[getPrevIndex()].url}
            alt={carouselImages[getPrevIndex()].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Current Image */}
        <div className="w-[300px] h-[400px] transition-all duration-500">
          <img
            src={carouselImages[currentIndex].url}
            alt={carouselImages[currentIndex].alt}
            className={`w-full h-full object-cover rounded-lg shadow-xl transform transition-transform duration-300 ${
              isHovering ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>

        {/* Next Image */}
        <div className="w-[200px] h-[300px] transition-all duration-500 opacity-50 scale-75">
          <img
            src={carouselImages[getNextIndex()].url}
            alt={carouselImages[getNextIndex()].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-pink-500 w-4' 
                : 'bg-gray-300 hover:bg-pink-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};