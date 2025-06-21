import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StripLightsPage from './pages/StripLightsPage';
import DeskLampsPage from './pages/DeskLampsPage';
import NightLightsPage from './pages/NightLightsPage';
import GardenLightsPage from './pages/GardenLightsPage';
import BathroomLightsPage from './pages/BathroomLightsPage';
import KitchenLightsPage from './pages/KitchenLightsPage';
import CarLightsPage from './pages/CarLightsPage';
import FlashlightsPage from './pages/FlashlightsPage';
import SmallLEDLightsPage from './pages/SmallLEDLightsPage';
import BulbReplacementPage from './pages/BulbReplacementPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/led-strip-lights" element={<StripLightsPage />} />
            <Route path="/led-desk-lamps" element={<DeskLampsPage />} />
            <Route path="/led-night-lights" element={<NightLightsPage />} />
            <Route path="/led-garden-lights" element={<GardenLightsPage />} />
            <Route path="/led-bathroom-lights" element={<BathroomLightsPage />} />
            <Route path="/led-kitchen-lights" element={<KitchenLightsPage />} />
            <Route path="/led-car-lights" element={<CarLightsPage />} />
            <Route path="/led-flashlights" element={<FlashlightsPage />} />
            <Route path="/small-led-lights" element={<SmallLEDLightsPage />} />
            <Route path="/led-bulbs-replacement" element={<BulbReplacementPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:articleId" element={<ArticleDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;