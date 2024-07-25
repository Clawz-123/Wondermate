import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../api";
import UserBookings from "../Components/UserBookings";
import Modal from "../elements/Modal";

const Profile = () => {
  const hotelUrl = "/hotel";
  const travelUrl = "/travel";
  const { userId } = useParams();
  const [user, setUser] = useState(null); // Initialize with null to differentiate from undefined
  const [openModal, setOpenModal] = useState(false);
  const [hotelBooking, setHotelBooking] = useState([]);
  const [travelBooking, setTravelBooking] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Fetching user data for userId:", userId);
        const userData = await getUser(userId);
        if (!userData) {
          throw new Error("User data is undefined or null");
        }
        setUser(userData);
        console.log("Fetched user data:", userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setUser(null); // Set user to null on error
      }
    };

    fetchUser();
  }, [userId]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  if (user === null) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Error loading user data. Please try again later.</div>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col mt-4">
      {/* profile and cover image */}
      <div className="relative h-56 md:h-80 w-full">
        <img
          className="h-56 md:h-80 w-full object-cover rounded-lg cursor-pointer"
          src={user.coverImage}
          alt={user.name}
        />
        <div className="h-full w-full">
          <img
            className="absolute left-8 top-[10.3rem] md:top-56 lg:left-28 xl:left-32 h-28 w-28 md:h-48 md:w-48 rounded-full object-cover cursor-pointer border-2 border-white"
            src={user.img}
            alt={user.name}
          />
          <button
            onClick={toggleModal}
            className="absolute top-[15.5rem] md:top-[345px] right-8 lg:right-28 xl:right-32 text-sm md:text-base text-normal text-black border-black border-2 rounded-3xl px-6 py-1 md:px-12 md:py-2 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* user details */}
      <div className="h-full pt-20 md:pt-24 pb-10 flex flex-col">
        <h1 className="font-bold text-xl">{user.name}</h1>
        <p className="text-gray-500 text-sm">{user.userHandle}</p>
        <p className="text-[0.95rem]">{user.bio}</p>
      </div>

      {/* user hotels booking */}
      <h2 className="font-semibold text-sm md:text-xl lg:2xl">
        Hotel Bookings
      </h2>
      <div>
        <UserBookings data={hotelBooking} url={hotelUrl} />
      </div>

      {/* user travel packages booking */}
      <h2 className="font-semibold text-sm md:text-xl lg:2xl mt-8">
        Travel Packages Bookings
      </h2>
      <div>
        <UserBookings data={travelBooking} url={travelUrl} />
      </div>

      {/* Modal */}
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        coverImg={user.coverImage}
        profileImg={user.img}
        username={user.name}
        bio={user.bio}
      />
    </div>
  );
};

export default Profile;
