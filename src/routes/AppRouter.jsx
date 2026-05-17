import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "../components/Layout/MainLayout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import FavoritePage from "../pages/FavoritePage/FavoritePage.jsx";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;