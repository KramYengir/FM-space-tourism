import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
