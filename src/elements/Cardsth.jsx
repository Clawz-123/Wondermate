import { Link } from "react-router-dom";
import RatingStars from "./Ratingstars";

const Cardsth = ({ data }) => {
    return (
        <div className="h-full w-full">
            {data?.map((item) => (
                <div key={item.id} className="h-[40vh] w-full grid grid-cols-2 border mb-10 shadow-xl">
                    <img src={item.img[0]} alt="image" className="h-[40vh] w-full object-cover" />
                    <div className="text-black text-center">
                        <h1 className="font-bold mb-20">{item.name}</h1>
                        <h2 className="font-bold">${item.price}</h2>
                        <Link className="bg-blue-700 text-xl text-white px-2 rounded-lg" to={`${item.id}`}>View Deal</Link>
                        <p className="mt-4 mb-2">
                            {item.freeCancellation ? (
                                <>
                                    <span className="text-green-500">&#10004;</span> Free Cancellation
                                </>
                            ) : (
                                <>
                                    <span className="text-red-500">&#10008;</span> No Free Cancellation
                                </>
                            )}
                        </p>
                        
                        <p className="mb-4">
                            {item.reserveNow ? (
                                <>
                                    <span className="text-green-500">&#10004;</span> Reserve now, pay at stay
                                </>
                            ) : (
                                <>
                                    <span className="text-red-500">&#10008;</span> Pay now, pay at stay
                                </>
                            )}
                        </p>
                        <RatingStars rating={item.rating} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cardsth;
