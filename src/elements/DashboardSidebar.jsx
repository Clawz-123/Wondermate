import { motion } from "framer-motion";
import { adminSidebar } from "../helper/data";
import { Link, useLocation } from "react-router-dom";

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: -300 }} // Starts off-screen to the left
      animate={{ x: 0 }} // Animates to the correct position
      transition={{ duration: 0.5 }}
      className={`h-screen w-[20rem] sticky flex flex-col bg-zinc-700 top-0 left-0`}
    >
      <h1 className="text-2xl pl-4 py-1 flex items-start mb-12 text-white font-bold">
        WanderMate
      </h1>
      {adminSidebar.map((item) => (
        <Link
          to={item.to}
          className={`flex font-light text-white pl-4 py-1 text-base cursor-pointer hover:bg-slate-800  ${
            location.pathname === item.to ? "bg-slate-800 " : "text-black"
          }`}
          
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </motion.div>
  );
};

export default DashboardSidebar;
