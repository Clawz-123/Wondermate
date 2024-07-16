import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import pfp from "../assets/userProfile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { headerLinks } from "../helper/data";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* Header */}
      <div className="h-[10vh] p-2 w-full flex justify-between items-center">
        <div className="">
          <GiHamburgerMenu
            size={25}
            color="black"
            className="cursor-pointer sm:hidden"
            onClick={toggleMenu} // Toggle the menu open/close
          />
          <motion.div
            initial={{ x: open ? 600 : 0 }}
            animate={{ x: open ? 0 : 600 }}
            transition={{ duration: 0.3 }}
            className={`z-40 h-screen w-[80%] sm:hidden fixed top-0 right-0 rounded-lg bg-white transition-all duration-300 ease-in-out ${
              open ? "block" : "hidden"
            }`}
          >
            {headerLinks.map((name) => (
              <Link
                to={name.link}
                className="flex font-bold text-gray-600 pl-4 py-1 text-lg cursor-pointer hover:bg-gray-200 hover:rounded-lg"
                key={name.linkTitle}
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                {name.linkTitle}
              </Link>
            ))}
          </motion.div>
        </div>
        <div>
          <img
            style={{ clipPath: "circle(50% at 50% 50%)" }}
            className="h-12 w-12 cursor-pointer"
            src={pfp}
            alt="Profile"
            // Do not toggle the menu open/close when clicking the profile image
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
