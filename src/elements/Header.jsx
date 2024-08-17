import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import pfp from "../assets/userProfile.jpg";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { headerLinks } from "../helper/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const HandleLogout = () => {

    
    localStorage.removeItem("token", token);
        localStorage.removeItem("expiresIn", expiresIn);
        localStorage.removeItem('role', role);
        localStorage.removeItem('id', id);

  }

  return (
    <div className="h-[10vh] w-full flex justify-between items-center p-2 relative">
      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center">
        <GiHamburgerMenu
          size={25}
          color="black"
          className="cursor-pointer"
          onClick={toggleMenu}
        />
        <motion.div
          initial={{ x: isMenuOpen ? 0 : 600 }}
          animate={{ x: isMenuOpen ? 0 : 600 }}
          transition={{ duration: 0.5 }}
          className={`${
            isMenuOpen ? "opacity-1" : "opacity-0"
          } h-screen w-[80%] md:hidden fixed top-0 right-0 bg-white z-50 rounded-lg transition-all duration-700`}
        >
          {headerLinks.map((name) => (
            <Link
              to={name.link}
              className={`flex font-bold text-gray-600 pl-4 py-1 text-lg cursor-pointer hover:bg-gray-200 hover:rounded-lg ${
                location.pathname === name.link ? "bg-gray-200 rounded-lg" : ""
              }`}
              key={name.linkTitle}
              onClick={toggleMenu}
            >
              {name.linkTitle}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Logo */}
      <div className="hidden md:block">
        <h1 className="text-2xl text-blue-500 font-bold cursor-pointer">
          WanderMate
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex mr-20 items-center justify-between gap-10">
        {headerLinks.map((item) => (
          <li
            key={item.linkTitle}
            className={`text-black font-bold list-none cursor-pointer border-b-4 transition-all duration-300 ${
              location.pathname === item.link ? "border-blue-500" : "border-transparent"
            } hover:border-blue-500`}
          >
            <Link to={item.link}>{item.linkTitle}</Link>
          </li>
        ))}
      </ul>

      {/* Profile Image */}
      <div className="relative flex items-center">
        {/* Username */}
        <h1 className="font-bold mr-2">Pukar123</h1>
        <img
          style={{ clipPath: "circle(50% at 50% 50%)" }}
          className="h-12 w-12 cursor-pointer"
          src={pfp}
          alt="Profile"
          onClick={toggleProfileMenu}
        />
        {isProfileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-40 w-48 bg-white rounded-md shadow-lg z-50"
          >
            <Link
              to="/user/profile/1"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={toggleProfileMenu}
            >
              Profile
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={HandleLogout}
            >
              Logout
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
