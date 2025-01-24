import Serve_bg from "../assets/Serve_bg.png"; // Your actual background image import
import Social_1 from "../assets/Social_1.png";
import Astro_1 from "../assets/Astro_1.png";
import Psych_1 from "../assets/Psych_1.png";

function Services() {
  return (
    <div
      className="relative w-[1100px] h-[600px] bg-cover bg-center m-6 mx-auto rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${Serve_bg})`, // Your actual background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Services Heading */}
      <div className="absolute top-10 left-10 text-5xl text-[#023020] font-bold">
        Services
      </div>

      {/* Container for Boxes */}
      <div className="flex flex-col items-center pt-32 space-y-8">
        <div className="flex justify-center space-x-8 m-4">
          {/* Box 1 */}
          <div className="flex flex-col items-center p-4 rounded-lg border-2 border-[#097969] shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#097969] glow w-[250px] h-[450px]">
            <img
              src={Social_1}
              alt="Social Media"
              className="w-[200px] h-[200px] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-[#023020]">Social Media</h2>
              <p className="text-md text-[#097969] mt-2">
                Connect with a broader audience and expand your reach through
                our social media strategies.
              </p>
              <button className="mt-4 py-2 px-6 rounded-full bg-[#2F3A47] text-white hover:bg-opacity-80 transition-all">
                Check Availability
              </button>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center p-4 rounded-lg border-2 border-[#097969] shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#097969] glow w-[250px] h-[450px]">
            <img
              src={Astro_1}
              alt="Astrology"
              className="w-[200px] h-[200px] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-[#023020]">Astrology</h2>
              <p className="text-md text-[#097969] mt-2">
                Discover deeper insights into your life, future, and personal
                growth with our astrology consultations.
              </p>
              <button className="mt-4 py-2 px-6 rounded-full bg-[#2F3A47] text-white hover:bg-opacity-80 transition-all">
                Check Availability
              </button>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center p-4 rounded-lg border-2 border-[#097969] shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#097969] glow w-[250px] h-[450px]">
            <img
              src={Psych_1}
              alt="Psychology"
              className="w-[200px] h-[200px] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-[#023020]">Psychology</h2>
              <p className="text-md text-[#097969] mt-3">
                Enhance your mental well-being with personalized psychology
                sessions tailored to your needs.
              </p>
              <button className="mt-4 py-2 px-6 rounded-full bg-[#2F3A47] text-white hover:bg-opacity-80 transition-all">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
