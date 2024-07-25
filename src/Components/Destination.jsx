
import { destination } from "../helper/data";
import Carousel from "../elements/carousel";
// import { thingsToDo, hotels, travelPackages } from "../helper/data";
import { getThingsToDo, getHotels, getTravelPackages } from "../api";

import topHotels from "../assets/bg2.jpg"
import topTravelPackages from "../assets/bg5.jpg"
import topdestination from "../assets/bg.jpg";
import { useState, useEffect } from "react";
import Cards from "../elements/Cards";



const Destination = () => {
  const [showThingsToDo, setShowThingsToDo] = useState(false);
  const [showTopHotels, setShowTopHotels] = useState(false)
  const [showTopTravelPackages, setShowTopTravelPackages] = useState(false)
  const [hotels, setHotels] = useState ([])
  const [travelPackages, setTravelPackages] = useState([])
  const [thingsToDo, setThingsToDo] = useState([])

  const hotelUrl = "/user/hotels"
  const thingsToDoUrl = "/user/thingsToDo"
  const travelPackagesUrl = "/user/travelPackages"


  useEffect (() => {
    const fetchHotels = async () => {
      const data = await getHotels()
      setHotels(data)
    }

    const fetchThingsToDo = async () => {
      const data = await getThingsToDo()
      setThingsToDo(data)
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
    <div className="h-full w-full ">
      <Carousel data={destination} />
        {/* Destination */}
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
        <div className="h-full w-full flex flex-col">
          {/* body headers */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            <div className="flex gap-2 items-center pt-8">
              <img className="h-8 w-8 md:h-9 md:w-9  lg:h-10 lg:w-10 transition-all duration-300 rounded-full" src={topdestination} alt="image" />
              <h1
                className="font-bold cursor-pointer text-ms md:text-base lg:text-lg "
                onClick={() => setShowThingsToDo(!showThingsToDo)}
              >
                Things To Do
              </h1>
            </div>
            {/* cards */}
            {showThingsToDo && <Cards data={thingsToDo} url={thingsToDoUrl} />}
          </div>
        </div>

    </div>
  );
};

export default Destination;
