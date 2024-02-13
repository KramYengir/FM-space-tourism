import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Destination from "./pages/Destination/Destination";

const Layout = () => {
  const location = useLocation();

  // ADD CLASS OF CURRENT PATH TO BODY
  // SO WE CAN CHANGE THE BACKGROUND IMAGE ACCORDINGLY
  // DOING THIS SO BG GOES BEHIND HEADER ELEMENT
  useEffect(() => {
    // Set body class based on current route
    document.body.className = location.pathname.substring(1);
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
