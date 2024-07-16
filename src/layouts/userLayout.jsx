import Header from "../elements/Header"
import Fotter from "../elements/Fotter"
import { Outlet } from "react-router-dom"

const userLayout = () => {
  return (
    <div className="p-2">
      <>
      <Header/>
    <Outlet/>
      <Fotter/>
      </>
    </div>
  )
}

export default userLayout
