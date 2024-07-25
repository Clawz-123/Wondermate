import Header from "../elements/Header"
import Fotter from "../elements/Fotter"
import { Outlet } from "react-router-dom"

const userLayout = () => {
  return (
    <div className="p-2 sm:p-2 md:px-4 lg:px-5 " >
      <>
      <Header/>
    <Outlet/>
      <Fotter/>
      </>
    </div>
  )
}

export default userLayout
