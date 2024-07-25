import { useState, useEffect } from "react";
// import { topDestinations, hotels, travelPackages } from "../helper/data";
import headermig from "../assets/headerImg9.jpg";
import { IoSearch } from "react-icons/io5";
import topdestination from "../assets/bg.jpg";
import Cards from "../elements/Cards";
import topHotels from "../assets/bg2.jpg"
import topTravelPackages from "../assets/bg5.jpg"
import { getTopDestination, getHotels, getTravelPackages } from "../api";

const Home = () => {
  const [showTopDestinations, setShowTopDestinations] = useState(false);
  const [showTopHotels, setShowTopHotels] = useState(false)
  const [showTopTravelPackages, setShowTopTravelPackages] = useState(false)
  const [hotels, setHotels] = useState ([])
  const [travelPackages, setTravelPackages] = useState([])
  const [topDestination, setTopDestination] = useState([])

  const hotelUrl = "/user/hotels"
  const topDestinationUrl = "/user/topDestination"
  const travelPackagesUrl = "/user/travelPackages"



  useEffect (() => {
    const fetchHotels = async () => {
      const data = await getHotels()
      setHotels(data)
    }

    const fetchThingsToDo = async () => {
      const data = await getTopDestination()
      setTopDestination(data)
    }

    const fetchTravelPackages = async () => {
      const data = await getTravelPackages()
      setTravelPackages(data)
    }

    fetchHotels()
    fetchThingsToDo()
    fetchTravelPackages()

  },[])

  return (
    <>
      <div className="h-full w-full">
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
              className="h-[90%] w-[80%] md:w-[65%] lg:w-[90%] text-xs md:text-sm lg:text-base outline-none"
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
              <img className="h-8 w-8 md:h-9 md:w-9  lg:h-10 lg:w-10 transition-all duration-300 rounded-full" src={topdestination} alt="image" />
              <h1
                className="font-bold cursor-pointer text-ms md:text-base lg:text-lg "
                onClick={() => setShowTopDestinations(!showTopDestinations)}
              >
                Top Destinations
              </h1>
            </div>
            {/* cards */}
            {showTopDestinations && <Cards data={topDestination} url={topDestinationUrl} />}
          </div>
        </div>

        {/* Top Hotels */}
        <div className="h-full w-full flex flex-col">
          {/* body headers */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            <div className="flex gap-2 items-center pt-8">
              <img className="h-8 w-8 md:h-9 md:w-9  lg:h-10 lg:w-10 transition-all duration-300 rounded-full" src={topHotels} alt="image" />
              <h1
                className="font-bold cursor-pointer text-ms md:text-base lg:text-lg"
                onClick={() => setShowTopHotels(!showTopHotels)}
              >
                Top Hotels
              </h1>
            </div>
            {/* cards */}
            {showTopHotels && <Cards data={hotels.slice(0,4)} url={hotelUrl} />}
          </div>
        </div>
          {/* Top Travel Packages */}
          <div className="h-full w-full flex flex-col">
          {/* body headers */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            <div className="flex gap-2 items-center pt-8">
              <img className="h-8 w-8 md:h-9 md:w-9  lg:h-10 lg:w-10 transition-all duration-300 rounded-full" src={topTravelPackages} alt="image" />
              <h1
                className="font-bold cursor-pointer text-ms md:text-base lg:text-lg"
                onClick={() => setShowTopTravelPackages(!showTopTravelPackages)}
              >
                Top Travel Packages
              </h1>
            </div>
            {/* cards */}
            {showTopTravelPackages && <Cards data={travelPackages} url={travelPackagesUrl} />}
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
