import { useState } from "react";
import { topDestinations, hotels, travelPackages } from "../helper/data";
import Header from "../elements/Header";
import headermig from "../assets/headerImg9.jpg";
import { IoSearch } from "react-icons/io5";
import topdestination from "../assets/bg.jpg";
import Cards from "../elements/Cards";
import topHotels from "../assets/bg2.jpg"
import topTravelPackages from "../assets/bg5.jpg"

const Home = () => {
  const [showTopDestinations, setShowTopDestinations] = useState(false);
  const [showTopHotels, setShowTopHotels] = useState(false)
  const [showTopTravelPackages, setShowTopTravelPackages] = useState(false)


  return (
    <>
      <div className="p-2">
        {/* Header */}
        <Header />
        {/* Hero component */}
        <div
          className="h-[40vh] relative sm:h-[40vh] md:h-[65vh] lg:h-[75vh] w-full mt-8 transition-all duration-300 ease-in-out rounded-lg "
          style={{
            background: `url(${headermig})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="h-[11%] w-[50%] md:w-[35%] lg:w-[40%] flex justify-center bg-white items-center absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] rounded-lg ">
            <input
              className="h-[90%] w-[80%] md:w-[65%] lg:w-[90%] text-xs md:text-sm lg:text-base"
              type="text"
              placeholder="  Search Your Places, Destination..."
            />
            <div className="h-5 w-5 sm:h-7 sm:w-7 md:h-10 md:w-10 lg:h-11 lg:w-11 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer">
              <IoSearch className="lg:block hidden" size={22} color="white" />
              <IoSearch className="hidden md:block lg:hidden" size={18} color="white" />
              <IoSearch className="hidden sm:block md:hidden" size={16} color="white" />
              <IoSearch className="block sm:hidden" size={12} color="white" />
            </div>
          </div>
        </div>
        {/* Destination */}
        <div className="h-full w-full flex flex-col">
          {/* body headers */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            <div className="flex gap-2 items-center pt-8">
              <img className="h-8 w-8 rounded-full" src={topdestination} alt="image" />
              <h1
                className="font-bold cursor-pointer"
                onClick={() => setShowTopDestinations(!showTopDestinations)}
              >
                Top Destinations
              </h1>
            </div>
            {/* cards */}
            {showTopDestinations && <Cards data={topDestinations} />}
          </div>
        </div>

        {/* Top Hotels */}
        <div className="h-full w-full flex flex-col">
          {/* body headers */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            <div className="flex gap-2 items-center pt-8">
              <img className="h-8 w-8 rounded-full" src={topHotels} alt="image" />
              <h1
                className="font-bold cursor-pointer"
                onClick={() => setShowTopHotels(!showTopHotels)}
              >
                Top Hotels
              </h1>
            </div>
            {/* cards */}
            {showTopHotels && <Cards data={hotels} />}
          </div>
        </div>
          {/* Top Travel Packages */}
          <div className="h-full w-full flex flex-col">
          {/* body headers */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            <div className="flex gap-2 items-center pt-8">
              <img className="h-8 w-8 rounded-full" src={topTravelPackages} alt="image" />
              <h1
                className="font-bold cursor-pointer"
                onClick={() => setShowTopTravelPackages(!showTopTravelPackages)}
              >
                Top Travel Packages
              </h1>
            </div>
            {/* cards */}
            {showTopTravelPackages && <Cards data={travelPackages} />}
          </div>
        </div>

      </div>
      {/* Footer */}
      {/* <div>
      </div> */}
    </>
  );
};

export default Home;
