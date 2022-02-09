import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
