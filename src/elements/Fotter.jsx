import { footerLinks } from "../helper/data"

const Fotter = () => {
    return (
        <>
            <div className=" bg-white shadow-2xl flex flex-col mt-10 p-3">
                <div className="  grid grid-cols-2 lg:grid-cols-3 px-4 lg;  gap-4" >
                    {/* About Wandermate */}
                
                    <div className="flex flex-col items-start">
                        <h1 className="font-bold text-gray-600  ">About Wandermate</h1>
                        {footerLinks.slice(0, 5).map((title) => (
                            <div key={title.id} className="mb-1 text-sm cursor-pointer">
                                {title.name}
                            </div>

                        ))}
                    </div>
                    {/* Explore */}
                    <div className="flex flex-col items-start ">
                        <h1 className="font-bold text-gray-600 ">Explore</h1>
                        {footerLinks.slice(5, 9).map((title) => (
                            <div key={title.id} className="mb-1 text-sm cursor-pointer">
                                {title.name}
                            </div>

                        ))}
                    </div>
                    {/* Trip Advisor */}
                    <div className="flex flex-col items-start ">
                    <h1 className="font-bold text-gray-600 ">Trip-Advisor Sites</h1>
                    {footerLinks.slice(10).map((title) => (
                        <div key={title.id} className="mb-1 text-sm cursor-pointer">
                        {title.name}
                        </div>

                    ))}
                </div>

                </div>
                <div className="mt-4 mb-4">

                <p className="font-bold flex justify-center">&copy;2024 WanderMate LLC All rights reserverd</p>
                </div>
            </div>
        </>
    )
}

export default Fotter
