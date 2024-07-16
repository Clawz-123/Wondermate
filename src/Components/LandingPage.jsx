import BGImg from "../assets/bg8.jpg";
import HeaderImage from "../assets/headerImg5.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { landingFooterLinks, landingHeaderLinks } from "../helper/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="h-screen w-full flex flex-col justify-between"
        style={{
          background: `linear-gradient(rgba(0, 255, 255, 0.4), rgba(0, 128, 128, 0.5)), url(${BGImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center">
          <GiHamburgerMenu
            size={25}
            color="white"
            className="cursor-pointer sm:hidden mt-7"
            onClick={() => {
              setOpen(!open);
            }}
          />

          <div className="hidden sm:flex">
            <h1
              className="text-2xl text-yellow-500 font-bold cursor-pointer"
              style={{
                textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              Explore.
            </h1>
          </div>
          
          <ul className="hidden sm:flex items-end">
            {landingHeaderLinks.slice(0, 4).map((item) => (
              <li
                key={item.id}
                className="text-white list-none p-4 cursor-pointer hover:border-b-4 hover:border-yellow-400"
              >
                {item.title}
              </li>
            ))}
          </ul>

          <img
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
            }}  
            className="h-36 w-24 object-cover sm:h-36 sm:w-24 md:h-45 md:w-32 lg:h-55 lg:w-40 transition-all duration-300"
            src={HeaderImage}
            alt="image"
          />
        </div>
        <motion.div
          initial={{ x: open ? 600 : 0 }}
          animate={{ x: open ? 0 : 600 }}
          transition={{ duration: 0.3 }}
          className={`z-40 h-screen w-[80%] sm:hidden fixed top-0 right-0 rounded-lg bg-white transition-all duration-300 ${
            open ? "block" : "hidden"
          }`}
        >
          {landingHeaderLinks.map((item) => (
            <Link
              className="flex font-bold text-gray-600 pl-4 py-1 text-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg"
              key={item.id}
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
        </motion.div>

        <div className="w-full text-center text-white">
          <p
            className="text-lg font-bold md:text-xl lg:text-xl bg-gradient-to-b from-gray-400 to-gray-800 text-white bg-clip-text"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            The Countries of Himalayas
          </p>
          <h1
            className="font-bold text-7xl md:text-8xl lg:text-9xl"
            style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="text-yellow-500">NEP</span>AL
          </h1>
        </div>
        <div className="w-full flex justify-between">
          <div className="h-full">
            <p
              className="leading-6 pl-6 md:pl-12 pb-6 text-white"
              style={{ lineHeight: 2 }}
            >
              Visit Nepal, You will never regret it. <br />
              This is something incredible, <br /> fantastic, mesmerizing and a
              lifetime experience.
            </p>
          </div>
          <div className="h-full flex items-end">
            <ul className="h-16 flex gap-1 sm:gap-3 flex-wrap pl-2 pb-5 backdrop-blur-sm lg:justify-between lg:items-end lg:gap-1">
              {landingFooterLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-white  list-none hover:border-b-4 hover:border-yellow-400"
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
