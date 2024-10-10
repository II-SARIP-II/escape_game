import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import JoinGame from './pages/JoinGame.jsx';
import NotFound from './pages/NotFound';
import { isMobile } from 'react-device-detect';
import "./styles/App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function useMobileOverride() {
    const params = new URLSearchParams(window.location.search);
    return params.get('mobile') === 'true';
}

function App() {
    const isMobileOverride = useMobileOverride();

    const renderContent = () => {
        if (isMobile || isMobileOverride) {
            return (
                <div className={"All"}>
                    <div className={"wrapper"}>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                        <span><i className={"fa fa-star"}></i></span>
                    </div>
                    <div className={"box-area"}>
                        <div className={"text-area"}>
                            <Routes>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/about" element={<JoinGame/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>

            );
        }
        return <div>Ce site est accessibleeeeee uniquement sur mobile.</div>;
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default App;