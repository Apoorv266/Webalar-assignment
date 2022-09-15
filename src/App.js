import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CompanyCard from './Components/CompanyCard';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact-us"} element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
