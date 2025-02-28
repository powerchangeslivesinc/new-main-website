import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Power Changes Lives
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Programs <ChevronDown size={16} className="ml-1" />
              </button>
              {programsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md">
                  <div className="flex flex-col">
                    <Link to="/education" className="px-4 py-2 hover:bg-gray-100">Education</Link>
                    <Link to="/health" className="px-4 py-2 hover:bg-gray-100">HEALTH®</Link>
                    <Link to="/iplay" className="px-4 py-2 hover:bg-gray-100">iPlay®</Link>
                    <Link to="/lavalove" className="px-4 py-2 hover:bg-gray-100">LavaLove®</Link>
                    <Link to="/operation-holiday" className="px-4 py-2 hover:bg-gray-100">Operation Holiday®</Link>
                    <Link to="/power-kitchens" className="px-4 py-2 hover:bg-gray-100">Power Kitchens®</Link>
                    <Link to="/project-feed" className="px-4 py-2 hover:bg-gray-100">Project F.E.E.D®</Link>
                    <Link to="/senior-connect" className="px-4 py-2 hover:bg-gray-100">Senior Connect®</Link>
                    <Link to="/crimson-project" className="px-4 py-2 hover:bg-gray-100">The Crimson Project®</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Donate Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDonateOpen(!donateOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Donate <ChevronDown size={16} className="ml-1" />
              </button>
              {donateOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md">
                  <div className="flex flex-col">
                    <Link to="/donate" className="px-4 py-2 hover:bg-gray-100">Donate Online</Link>
                    <a href="LavaLoveDonationsList11012021.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 hover:bg-gray-100">
                      Donate Products
                    </a>
                    <a href="LavaLoveDonationsList11012021.pdf" className="px-4 py-2 hover:bg-gray-100">
                      DIY Hygiene Kits
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button className="text-gray-700 hover:text-blue-600">Media</button>
            <button className="text-gray-700 hover:text-blue-600">Volunteer</button>
            <button className="text-gray-700 hover:text-blue-600">About</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
