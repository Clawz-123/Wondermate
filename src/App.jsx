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
import Protected from "./Protected/Protected";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />

        {/* Redirect authenticated users away from SignIn and SignUp pages */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes for User Layout */}
        <Route
          path="/user"
          element={
            <Protected allowedRoles={["User"]}>
              <UserLayout />
            </Protected>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="travelpackages" element={<TravelPackages />} />
          <Route path="travelpackages/:id" element={<TravelPackage />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="hotels/:id" element={<Hotel />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Protected Routes for Admin (Dashboard Layout) */}
        <Route
          path="/dashboard"
          element={
            <Protected allowedRoles={["Admin"]}>
              <DashboardLayout />
            </Protected>
          }
        >
          <Route path="manage-hotels" element={<ManageHotels />} />
          <Route path="manage-packages" element={<ManageTravelPackages />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;