import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/LandingPage";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Home from "./Components/Home";
import UserLayout from "./layouts/userLayout";
import Destination from "./Components/Destination";
import TravelPackages from "./Components/TravelPackages";
import Hotels from "./Components/Hotels";
import Hotel from "./Components/Hotel";
import TravelPackage from "./Components/TravelPackage";
import Profile from "./Components/Profile";
import DashboardLayout from "./layouts/DashboardLayout";
import ManageHotels from "./Components/ManageHotels";
import ManageTravelPackages from "./Components/ManageTravelPackages";
import NotFound from "./elements/NotFound";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
          <Route path="/user" element={<UserLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="travelpackages" element={<TravelPackages />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="hotels/:id" element={< Hotel />} />
            <Route path="travelpackages/:id" element={< TravelPackage />} />
            <Route path="profile/:userId" element={<Profile/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="manage-hotels" element={<ManageHotels />}></Route>
            <Route path="manage-packages" element={<ManageTravelPackages />}></Route>
          <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
