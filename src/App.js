import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';


const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300 w-full min-w-[500px]">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="experience" element={<Projects />} />
							<Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
