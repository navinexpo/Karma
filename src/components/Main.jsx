import Grass_1 from "../assets/Grass_1.png";
import Moank_1 from "../assets/Moank_1.png";

function Main() {
  return (
    <div
      id="main"
      className="flex flex-col md:flex-row items-center justify-between pt-5 w-[1280px] mx-auto" // Added pt-20 to avoid navbar overlap
    >
      {/* Left Box */}
      <div id="Left-Box" className="flex flex-col w-[800px] space-y-8">
        {/* Top Contained */}
        <div
          id="Left-Box-Top-contained"
          className="text-6xl font-bold text-[#2F3A47] text-center p-3"
        >
          Personalized 1:1 Consulting with Experts Across All Fields
        </div>

        {/* Bottom Contained */}
        <div
          id="Left-Box-bottom-contained"
          className="text-lg text-[#2F3A47] text-center p-3"
        >
          Karma.com connects you with top professionals for personalized
          consultations. From astrology and psychology to business insights and
          influencer strategies, get expert advice tailored to your goals.
          Unlock your potential today!
        </div>
      </div>

      {/* Right Box */}
      <div
        id="Right-Box"
        className="relative w-[500px] h-[600px] flex justify-center items-center"
      >
        <img
          src={Grass_1}
          alt="Grass"
          className="absolute rounded-lg shadow-sm w-[650px] h-[250px] bottom-[40px] right-[10px] p-4"
        />
        <img
          src={Moank_1}
          alt="Moank"
          className="absolute rounded-lg shadow-sm w-[600px] h-[500px] bottom-[30px] right-[10px] scale-x-[-1]" // Flip horizontally
        />
      </div>
    </div>
  );
}

export default Main;
