import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100 * window.innerHeight / 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
        className="fixed bottom-10 right-10 z-[99] bg-blue-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-black  p-4 rounded-full shadow-md transition duration-300 cursor-pointer"
        onClick={scrollToTop}
      >
        <FaArrowUp className="inline-block text-black hover:text-gray-400 text-2xl hover:scale-125 transition-all 300ms " />
        
      </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
