import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

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
            <div className="relative group">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Programs <ChevronDown size={16} className="ml-1" />
              </button>

              {/* Dropdown Content */}
              {programsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-md rounded-md">
                  <div className="flex flex-col">
                    <Link to="/education" className="px-4 py-2 hover:bg-gray-100">Education</Link>
                    <Link to="/health" className="px-4 py-2 hover:bg-gray-100">HEALTH</Link>
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

            <button className="text-gray-700 hover:text-blue-600">Donate</button>
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            {/* Mobile Programs Dropdown */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                Programs
              </button>
              {programsOpen && (
                <div className="flex flex-col items-center mt-2 space-y-2">
                  <Link to="/education" className="text-gray-700 hover:text-blue-600">Education</Link>
                  <Link to="/health" className="text-gray-700 hover:text-blue-600">HEALTH®</Link>
                  <Link to="/iplay" className="text-gray-700 hover:text-blue-600">iPlay®</Link>
                  <Link to="/lavalove" className="text-gray-700 hover:text-blue-600">LavaLove®</Link>
                  <Link to="/operation-holiday" className="text-gray-700 hover:text-blue-600">Operation Holiday®</Link>
                  <Link to="/power-kitchens" className="text-gray-700 hover:text-blue-600">Power Kitchens®</Link>
                  <Link to="/project-feed" className="text-gray-700 hover:text-blue-600">Project F.E.E.D®</Link>
                  <Link to="/senior-connect" className="text-gray-700 hover:text-blue-600">Senior Connect®</Link>
                  <Link to="/crimson-project" className="text-gray-700 hover:text-blue-600">The Crimson Project®</Link>
                </div>
              )}
            </div>

            <button className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Donate</button>
            <button className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Media</button>
            <button className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Volunteer</button>
            <button className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
