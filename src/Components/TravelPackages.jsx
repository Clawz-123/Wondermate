import { useState, useEffect } from "react";
import Cardsth from "../elements/Cardsth";
// import { travelPackagesPage } from "../helper/data";
import { getTravelPackages } from "../api";

const TravelPackages = () => {
    const [travelPackages, setTravelPackages] = useState ([])

    useEffect (() => {
        const fetchTravelPackages = async () => {
            const data = await getTravelPackages()
            setTravelPackages(data)
        }
        fetchTravelPackages()

    }, [])
    return (
        <div className="h-full w-full">
            <div className="h-full w-full flex flex-col pt-4 xl:px-10">
                {/* Render cards */}
                <Cardsth data={travelPackages} />
            </div>
        </div>
    );
};

export default TravelPackages;
