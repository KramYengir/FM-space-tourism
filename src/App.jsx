import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import Destination from "./pages/Destination/Destination";

const Layout = () => {
  return (
    <div className="content">
      <Header />
      <Outlet />
    </div>
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
