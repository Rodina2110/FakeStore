
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Details from './pages/Details';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
