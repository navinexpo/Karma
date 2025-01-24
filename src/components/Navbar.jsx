import { useState, useEffect } from "react";
import Karma_logo from "../assets/Karma_logo1.png"; // Import the logo image

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling
          ? "shadow-[0_4px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          : "shadow-none"
      } bg-transparent fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src={Karma_logo} // Use the imported logo image
            alt="Karma Logo"
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
          />
          <span className="text-4xl font-bold text-[#097969] hover:text-[#2F3A47] drop-shadow-md transition-all duration-300 ease-in-out">
            Karma
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {["Home", "Services", "Blog", "Contact", "Why Us"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-[#097969] font-bold transition-all duration-300 ease-in-out px-3 py-1 rounded-full hover:text-[#2F3A47] hover:text-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
