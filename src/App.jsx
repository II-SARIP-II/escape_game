import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from "./pages/Navbar.jsx";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
            </Routes>
        </div>
    );
}


export default App;
