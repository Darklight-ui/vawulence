/** @format */

import React from "react";
import "./index.css";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import GallaryPage from "./pages/Gallary/GallaryPage";
import HomePage from "./pages/Home/HomePage";
import PlansPage from "./pages/Plans/PlansPage";
import NotFound from "./pages/NotFound/NotFound";
import TrainerPage from "./pages/Trainer/TrainerPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route index path='/' element={<HomePage />} />
				<Route path='about' element={<AboutPage />} />
				<Route path='contact' element={<ContactPage />} />
				<Route path='gallery' element={<GallaryPage />} />
				<Route path='plans' element={<PlansPage />} />
				<Route path='trainers' element={<TrainerPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
