
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="bg-gradient-to-b from-[#0979691A] to-[#0979694D] min-h-screen mx-4" // Tailwind classes for gradient and margin
    >
      <Navbar />
      <Main />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
