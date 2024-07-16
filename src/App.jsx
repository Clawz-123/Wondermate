import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/LandingPage";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Home from "./Components/Home";
import Header from "./elements/Header";
import Cards from "./elements/Cards";
import UserLayout from "./layouts/userLayout"; 
import Destination from "./Components/Destination";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/header" element={<Header />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/user" element={<UserLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="destination" element={<Destination />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
