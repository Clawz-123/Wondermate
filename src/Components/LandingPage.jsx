import BGImg from "../assets/bg8.jpg"
import HeaderImage from "../assets/headerImg5.jpg"
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react"
import { landingFooterLinks, landingHeaderLinks } from "../helper/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// import { useState, useEffect } from "react"


const LandingPage = () => {
    const [open, setOpen] = useState(false)

    // useEffect(() => {
    //  const getData = async () => {
    //     const responce = await fetch("")
    //     const data = await responce.json()
    //     const usefulData = await data.data
    //     setData(usefulData)
    //     console.log(usefulData)
    //     }
    //     getData()

    // }, [])

    return (
        <>
        {/* Encapsulating all  */}
        <div className="h-screen w-full flex flex-col justify-between"
       style={{
        background: `linear-gradient(rgba(0, 255, 255, 0.5), rgba(0, 128, 128, 0.5)), url(${BGImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    }}>
            {/* background color */}
            {/* header */}
            <div className="h-[10vh] w-full pl-10 sm:pl-6 md:pl-8 flex justify-between items-centre" >
            <GiHamburgerMenu size={25} color="white" className="crusor-pointor sm:hidden"
            onClick={()=> {
                setOpen(!open)
            }}
            />

<img
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
            }}
            className="h-36 w-24 object-cover"
            src={HeaderImage}
            alt="image"
            />
            </div>
            {/* side menu */}
            {/* framework animation halnu paren for beter animation */}
            <motion.div 
            initial={{ x: open ?  600 : 0}}
            animate={{x: open ? 0: 600 }}
            transition={{ duration : 0.3 }}
            
            className={` h-screen w-[80%] sm:hidden fixed top-0 right-0 rounded-lg bg-white transition-all duration-300 ${open ? 'block' : 'hidden'}`}>
                {landingHeaderLinks.map((item) =>(
                    <>
                    <Link className="flex font-bold text-gray-600 pl-4 py-1 text-lg cursor-pointer hover:bg-gray-100 hover:rounded-lg" key={item.id}
                    to={item.link}>
                        {item.title}
                    </Link>
                    </>
                ))}
            </motion.div>

            {/* hero component */}
            <div className=" w-full text-center text-white">
                <p className="text-lg font-bold md:text-xl lg:text-2xl bg-gradient-to-b from-gray-400 to-gray-100 text-transparent bg-clip-text">The Countries of Himalayas</p>
                <h1 className="font-bold text-7xl md:text:8xl lg:text-9xl"
               style={{
                textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)"
            }}
            
                >
                    <span className="text-yellow-600">NEP</span>
                    AL</h1>
            </div>
            <div className=" w-full grid grid-cols-2">
                <div className="h-full w-full">
                <p className="leading-6 pl-6 md:pl-12 pb-6 text-white" >Visit Nepal, You will never regret it. <br /> 
                    This is something incredible, fantastic,
                    mesmeriring and lifetime experience.
                </p>
                </div>
                {/* secondside */}
                <div className="h-full w-full flex items-end">
                <div className="h-16 w-full flex gap-3 flex-wrap pl-2 pb-5 backdrop-blur-sm  text-">
                {landingFooterLinks.map((link) =>(
                    <>
                    <li key={link.id} className="text-white list-none hover:border-b-4 border-yellow-400">
                        <a href={link.link}>{link.title}</a>
                        </li>
                    </>
                ))}
                </div>
                </div>
            </div>

            
            {/* <a href="/Sign">Got to Sign in/out page</a> */}
            
        </div>
        </>
    )
}

export default LandingPage
