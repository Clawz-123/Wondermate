import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotel } from "../api";
import { hotelDetails } from "../helper/data";
import Map from "../elements/Map";

const Hotel = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState({
    comment: "",
    rating: 0,
  });
  const [reviews, setReviews] = useState([]);

  const handleStarRating = (index) => {
    setReviewData({ ...reviewData, rating: index + 1 });
  };

  const handleSubmitReview = () => {
    if (reviewData.comment && reviewData.rating > 0) {
      setReviews([...reviews, reviewData]);
      setReviewData({ comment: "", rating: 0 }); // Reset the review form
    }
  };

  const [hotel, sethotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const data = await getHotel(id);
      sethotel(data);
    };
    fetchHotel();
  }, [id]);

  return (
    <>
      {hotel ? (
        <div className="flex flex-col">
          {/* image section */}
          <div className="flex h-[30rem] w-full gap-2 lg:gap-3 shadow-2xl">
            <div className="flex-[1.3]">
              {/* main big img div */}
              <img className="h-full w-full object-cover" src={hotel.img[0]} alt="" />
            </div>
            <div className="hidden md:block flex-[1]">
              <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-2 lg:gap-4">
                {/* 4 picture div */}
                {hotel.img.slice(1, 5).map((img, i) => (
                  <img className="h-full w-full object-cover" key={i} src={img} alt={`img-${i}`} />
                ))}
              </div>
            </div>
          </div>
          <div className=" h-full gap-3  pl-5 py-5   flex">
            {/* hotel nav */}
            {hotelDetails.map((nav) => (
              <li key={nav.id} className="list-none h-full  font-semibold">
                <a className="hover:border-b-4 hover:border-b-blue-500" href={nav.to}>
                  {nav.name}
                </a>
              </li>
            ))}
          </div>
          {/* main about div */}
          <div
            id="about"
            className="grid py-5 mb-4  bg-white shadow-xl"
            style={{ gridTemplateColumns: "50% 50%" }}
          >
            {/* des div */}
            <div>
              <h1 className=" font-bold text-xl p-5">  {hotel.id} {hotel.name}</h1>
              <p>{hotel.desc}</p>
            </div>
            {/* Book now */}
            <div className="flex flex-col justify-center items-center">
              <button className="bg-blue-700 py-3 px-8 rounded-lg text-white"> Book Now</button>
            </div>
          </div>
          {/* location */}
          <div className="h-[80vh] w-full my-4" id="location">
            <Map />
          </div>
          <div className="bg-white drop-shadow-xl shadow-lg p-5 flex-col-1 mb-5 ">
            {/* rating */}
            <h1 className="font-bold text-xl mb-2">Write a Review</h1>
            <h4 className="mb-2">Your Review</h4>
            <textarea
              className=" border border-gray-200 rounded-lg gap-2 h-[20vh] w-full mb-2 focus:outline-none focus:border-blue-500"
              type="text"
              name="review"
              id="review"
              maxLength={500}
              value={reviewData.comment}
              onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
            />
            <h4 className="mb-2">Your Rating</h4>
            <div>
              {[...Array(5)].map((star, i) => (
                <span
                  key={i}
                  className={`text-2xl cursor-pointer ${reviewData.rating > i ? "text-yellow-500" : "text-gray-300"}`}
                  onClick={() => handleStarRating(i)}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <button
              className="bg-blue-700 py-3 px-8 rounded-lg text-white mt-2"
              onClick={handleSubmitReview}
            >
              Submit Now
            </button>
          </div>
          <div className="bg-white drop-shadow-xl shadow-lg p-5 flex-col-1 ">
            {/* reviews */}
            <h1 className="font-bold text-xl mb-2">Reviews</h1>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="mb-4 p-4 border-b border-gray-200">
                  <p className="font-semibold">{review.comment}</p>
                  <div>
                    {[...Array(5)].map((star, i) => (
                      <span
                        key={i}
                        className={`text-xl ${review.rating > i ? "text-yellow-500" : "text-gray-300"}`}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Hotel;
