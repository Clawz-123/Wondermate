import { useState, useEffect } from "react";

import Cardsth from "../elements/Cardsth";
  import { getHotels } from "../api";
// import { hotelPage } from "../helper/data";


const Hotels = () => {
  const [hotels, setHotels] = useState ([])

  useEffect (() => {
    const fetchHotels = async () =>{
      const data = await getHotels()
      console.log(data)
      setHotels(data)
    }
fetchHotels()
  },[])

  return (
    <div>
         <div className="h-full w-full">
            <div className="h-full w-full flex flex-col pt-4 xl:px-10">
                {/* Render cards */}
                <Cardsth data={hotels} />
            </div>
        </div>
    </div>
  )
}

export default Hotels
