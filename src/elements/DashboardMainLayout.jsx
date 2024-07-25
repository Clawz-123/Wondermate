import { Outlet } from "react-router-dom"

const DashboardMainLayout = () => {
  return (
    <>
      {/* main layout */}
      <div className="h-full w-full flex flex-[2.6]">
        <Outlet/>
         </div>
    </>
  )
}

export default DashboardMainLayout
