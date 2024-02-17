// App.js
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Home from './Pages/Home/Assets.tsx';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Menu from './Component/Menu/Menu';
import Login from './Pages/Login/Login';
import './styles/global.css';
import Site from './Component/Site/Site.tsx';
import { AuthProvider, useAuth } from './Pages/Login/AuthContext.tsx';
import Dashboard from './Pages/Dashboard/dashboard.tsx';
import Inventory from "./Pages/Inventory/Inventory.tsx";
import Visualize from "./Pages/Visualize/visualize.tsx";
import ConfigM from "./Pages/Config Management/ConfigM.tsx";
import Settings from "./Pages/Settings/Setting.tsx";
import Assets from "./Pages/Home/Assets.tsx";




const Layout = () => {
    const { login, setLogin } = useAuth();

    return (
        <div>
            {login ? (
                <div className="main">
                    <Navbar/>
                    <div className="container">
                        <div className="menu-container">
                            <Menu/>
                        </div>
                        <div className="Content-container">
                            <Outlet/>
                        </div>
                    </div>

                    <Footer/>
                </div>
            ) : (
                <Login login={login} setLogin={() => setLogin(!login)}/>
            )}
        </div>
    );
};

function App() {
    return (
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout/>}>
                                <Route index element={<Dashboard />}/>
                                <Route path="/sites/:cellname" element={<Site/>}/>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/ConfigM" element={<ConfigM />} />
                                <Route path="/Settings" element={<Settings />} />
                                <Route path="/asset" element={<Assets />} />
                                <Route path="/Inventory" element={<Inventory />} />
                                <Route path="/Visualize" element={<Visualize />} />
                            </Route>
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </BrowserRouter>
                 </AuthProvider>
            );
}

export default App;
