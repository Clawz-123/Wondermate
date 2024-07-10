import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Landingpage from "./Components/LandingPage"
import Sign from "./Components/Sign"
import NotFound from "./Components/NotFound"

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/Sign" element={<Sign/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App