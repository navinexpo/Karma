import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaRedditAlien } from "react-icons/fa"; // Install react-icons

function Footer() {
  return (
    <div
      className="bg-gradient-to-b from-[#0979691A] to-[#0979694D] text-[#023020] py-8 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="text-md mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-md">© 2025 Company Name. All rights reserved.</p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <ul>
              <li>Email: contact@company.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Company St., City, Country</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-125 transition-all">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-125 transition-all">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-125 transition-all">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-125 transition-all">
              <FaLinkedinIn />
            </a>
            <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-125 transition-all">
              <FaRedditAlien />
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
