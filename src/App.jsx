import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from "./pages/Navbar.jsx";
import { isMobile } from 'react-device-detect';

function useMobileOverride() {
    const params = new URLSearchParams(window.location.search);
    return params.get('mobile') === 'true';
}

function App() {
    const isMobileOverride = useMobileOverride();

    const renderContent = () => {
        if (isMobile || isMobileOverride) {
            return (
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            );
        }
        return <div>Ce site est accessible uniquement sur mobile.</div>;
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default App;
