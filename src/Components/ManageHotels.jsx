import { useEffect, useRef, useState } from "react";
import axios from "axios";


const ManageHotels = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [hotelData, setHotelData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const imageInputRef = useRef(null);

  const handleImages = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages((prevImage) => [...prevImage, ...selectedImage]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImage) => prevImage.filter((_, i) => i !== index));
  };

  const handleEdit = (hotel) => {
    setId(hotel.id);
    setIsEditing(true);
    setName(hotel.name);
    setPrice(hotel.price);
    setImages(hotel.image || []);
    setFreeCancellation(hotel.freeCancellation);
    setReserveNow(hotel.reserveNow);
    setDescription(hotel.description);
  };

  const uploadImageToCloudinary = async (newImages) => {
    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/sakothehauktale/image/upload";
    const uploadPreset = "Ninja Hattori";

    const imageUrls = await Promise.all(
      newImages.map(async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", uploadPreset);

        const response = await axios.post(cloudinaryUrl, formData);
        return response.data.secure_url;
      })
    );
    console.log("Upload images to Cloudinary:", imageUrls)
    return imageUrls;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newImages = images.filter((image) => image instanceof Blob || image instanceof File);
    // const newImages = images.filter(
    //   (image) => image instanceof Blob || image instanceof File
    // );

    const existingImageUrls = images.filter((image) => typeof image === "string");

    const newImageUrls =
      newImages.length > 0 ? await uploadImageToCloudinary(newImages) : [];
    console.log(`Uploaded new images: ${newImageUrls}`);

    const combinedImageUrls = [...existingImageUrls, ...newImageUrls];
    console.log(`Combined image URLs: ${combinedImageUrls}`);
    const imageUrl = combinedImageUrls.filter(
      (item) => Object.keys(item).length !== 0
    );



    // const imageUrl = await uploadImageToCloudinary();
    // console.log(`Uploaded images: ${imageUrl}`);

    const hotelsData = {
    
      Name: name,
      Price: price,
      Image: imageUrl,
      FreeCancellation: freeCancellation,
      ReserveNow: reserveNow,
      Description: description,
    };

    const upLoadData = async () => {
      try {
        const response = await axios.post("http://localhost:5269/api/Hotel", hotelsData);
        console.log(response);
        resetForm();
        fetchHotel();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    const editData = async () => {
      try {
        const response = await axios.put(`http://localhost:5269/api/Hotel/${id}`, hotelsData);
        console.log(response);
        resetForm();  
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    isEditing ? editData() : upLoadData();
  };





  const resetForm = () => {
    setName("");
    setPrice("");
    setImages([]);
    setFreeCancellation(false);
    setReserveNow(false);
    setDescription("");
    setIsEditing(false);
    fetchHotel();
    if(imageInputRef.current){
      imageInputRef.current.value = null
    }
    console.log("Form Reset")
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/hotels/${id}`);
      console.log(response);
      fetchHotel();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchHotel = async () => {
    try {
      const response = await axios.get("http://localhost:5269/api/Hotel");
      console.log(response)
      setHotelData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  return (
    <>
      <div className="w-full p-5 shadow-xl drop-shadow-sm flex flex-col mx-5 my-5">
        <h1 className="font-bold mb-2 text-2xl">{isEditing ? "Edit Hotel" : "Add New Hotel"}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="text-gray-500">Name</label>
          <input
            className="border focus:outline-none mb-2 h-10 w-[98%]"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="text-gray-500">Price</label>
          <input
            className="border focus:outline-none mb-2 h-10 w-[98%]"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label className="text-gray-500">Images</label>
          <input
            className="border focus:outline-none mb-2 h-10 w-[98%]"
            type="file"
            multiple
            onChange={(e) => {
              handleImages(e);
            }}
            ref ={imageInputRef}
          />
          <div className="flex gap-4 relative flex-wrap mb-5">
            {images.map((imag, i) => (
              <div className="flex relative" key={i}>
                <img className="h-24 w-24 rounded-sm object-cover" src={`${typeof imag === "string" ? imag : URL.createObjectURL(imag)}`} alt="" />
                <button
                  className="absolute top-0 right-0 cursor-pointer h-5 w-5 flex bg-red-600 rounded-full justify-center items-center text-white"
                  onClick={() => handleRemoveImage(i)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-start mb-10">
            <label className="text-gray-500 flex-[0.5]">Free Cancellation</label>
            <input
              className="accent-blue-600 items-center"
              type="checkbox"
              checked={freeCancellation}
              onChange={(e) => setFreeCancellation(e.target.checked)}
            />
          </div>

          <div className="flex justify-start mb-10">
            <label className="text-gray-500 flex-[0.5]">Reserve Now</label>
            <input
              className="accent-blue-600 items-center"
              type="checkbox"
              checked={reserveNow}
              onChange={(e) => setReserveNow(e.target.checked)}
            />
          </div>

          <label className="text-gray-500">Description</label>
          <textarea
            className="border focus:outline-none mb-2 h-20 w-[98%]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`bg-sky-500 h-10 w-[13vh] rounded-md mb-10 text-white ${loading ? "cursor-not-allowed bg-blue-300" : "cursor-pointer"}`}
            disabled={loading}
          >
            {isEditing ? "Update Hotel" : "Add Hotel"}
          </button>
        </form>

        <div>
          <h1 className="font-bold mb-10 text-2xl">View Hotels</h1>
          <table className="w-full">
            <thead className="border-b-2">
              <tr>
                <th className="px-4 py-2 text-center">Name</th>
                <th className="px-4 py-2 text-start">Price</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="border-collapse divide-y border-b-4">
              {hotelData.map((hotel) => (
                <tr className="border" key={hotel.id}>
                  <td className="border-b-2 px-4 py-2">{hotel.name}</td>
                  <td className="border px-4 py-2">{hotel.price}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-green-500 rounded-md text-white h-6 w-20" onClick={() => handleEdit(hotel)}>
                      Edit
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 rounded-md text-white h-6 w-20"
                      onClick={() => {
                        setDeleteId(hotel.id);
                        setOpen(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {open && (
        <>
          <div className="h-screen w-full fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white h-96 w-96 justify-center items-center">
              <h1 className="text-red-500">Are you sure?</h1>
              <button
                className="h-8 w-12 bg-red-500"
                onClick={() => {
                  handleDelete(deleteId);
                  setOpen(false);
                }}
              >
                Yes
              </button>
              <button className="h-8 w-12 bg-green-500" onClick={() => setOpen(false)}>
                No
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ManageHotels;
