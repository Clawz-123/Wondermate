import DashboardMainLayout from "../elements/DashboardMainLayout";
import DashboardSidebar from "../elements/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="h-full w-full flex">
       <DashboardSidebar/>
       
       <DashboardMainLayout/>
      
      </div>
    </>
  );
}

export default DashboardLayout;
