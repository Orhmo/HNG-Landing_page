
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App font-Manrope">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/"
              element={<Home />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
