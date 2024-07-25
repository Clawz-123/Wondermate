const Hcard = ({image, images}) => {
    return (
      <div className="flex md:grid h-[30rem] w-full gap-2"
      style={{gridTemplateColumns: "60% 40%"}}
      >
        <div className="h-[30rem] w-full rounded-lg">
        <img className="h-full w-full object-cover rounded-lg" src={image} alt="" />
        </div>
        <div className="h-[30rem] hidden md:block w-full">
          <div className="h-full w-full gap-1 grid grid-cols-2 grid-rows-2">
        {images?.map((item, index) => (
          <>
          <img key={index} className="h-full w-full object-cover rounded-lg" src={item} alt="" />
          </>
        ))}
          </div>
        </div>
        </div>    
    )
  }
  
  export default Hcard
  