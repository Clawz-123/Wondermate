import { useEffect, useState } from "react"
import { getHotels } from "../api"


const ManageHotels = () => {
  const [images, setImages] = useState([])
  // data rakhna ko lagi euta use satate banako
  const [hotelData, setHotelData] = useState ([])
  const [isEditing, setIsEditing] = useState(false)   


  const handleImages = (e) => {
    const selectedImage = Array.from(e.target.files)
    setImages((prevImage) => [...prevImage, ...selectedImage])
  }

  const handleRemoveImage = (index) => {
    setImages(prevImage => prevImage.filter((_, i) => i !== index))
  }

  const handleEditData = () => {
    
  } 

  //data lai fetch garera get hotels bata data sethotels vanne ma rakhako
  useEffect (() => {
    const fetchHotel = async () => {
      const data = await getHotels()
      console.log(data)
      setHotelData(data)
    }
    fetchHotel()
  },[])
  return (
    <>
      {/* main div */}
      {/* <div className="w-full h-screen flex flex-col shadow-lg"> */}
      {/* semidiv */}
      <div className=" w-full p-5 shadow-xl drop-shadow-sm flex flex-col mx-5 my-5">
        <h1 className="font-bold mb-2 text-2xl">Add New Hotel</h1>
        <form action="">
          <label className="text-gray-500">Name</label>
          <input
            className="border focus: outline-none mb-2 h-10 w-[98%]"
            type="text"
          />
          <label className="text-gray-500">Price</label>
          <input
            className="border focus: outline-none mb-2 h-10 w-[98%]"
            type="number"
          />

          <label className="text-gray-500">Images</label>
          <input
            className="border focus: outline-none mb-2 h-10 w-[98%]"
            type="file" multiple
            onChange={(e) => {
              handleImages(e);
            }}
          />
          <div className="flex gap-4 flex-wrap mb-5">
            {images.map((imag, i) => (<>
              <img className="h-24 w-24 rounded-sm object-cover relative" src={URL.createObjectURL(imag)} alt="" />
              <button className=" cursor-pointer h-5 w-5 flex bg-red-600 rounded-sm justify-center items-center text-white"
                onClick={() => handleRemoveImage(i)}
              >
                x
              </button>
            </>))}

          </div>

          {/* free cancelation */}
          <div className="flex justify-start mb-10">
            <label className="text-gray-500 flex-[0.5]" >Free Cancellation</label>
            <input className="accent-blue-600 items-center" type="checkbox" id="cancellation" />
          </div>

          {/* Reserve Now */}
          <div className="flex justify-start mb-10">
            <label className="text-gray-500 flex-[0.5]" >Reserve Now</label>
            <input className="accent-blue-600 items-center" type="checkbox" />
          </div>

          <label className="text-gray-500">Description</label>
          <textarea
            className="border focus: outline-none mb-2 h-20 w-[98%]"
            type="text"
          />
          <button className="bg-sky-500 h-10 w-[13vh] rounded-md mb-10 text-white">Add Hotel</button>

        </form>
        {/* place for edit and delete table */}
        <div>

          <h1 className="font-bold mb-10 text-2xl">View Hotels</h1>
          <table className="w-full ">
            <thead className="border-b-2">
              <tr>
                <th className="px-4 py-2 text-center">Name</th>
                <th className="px-4 py-2 text-start">Price</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className=" border-collapse divide-y border-b-4">
              {hotelData.map((hotel)=>(
                <tr className="border" key={hotel.id}>
                  <td className="border-b-2 px-4 py-2">{hotel.name}</td>
                  <td className="border">{hotel.price}</td>
                  <td className="border ">
                    <button  className="bg-green-500 rounded-md text-white h-6 w-20"
                    onClick={handleEditData}
                    >Edit</button>
                    </td>
                  <td className="border"><button className="bg-red-500 rounded-md text-white h-6 w-20">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
      {/* </div> */}

    </>
  )
}

export default ManageHotels
