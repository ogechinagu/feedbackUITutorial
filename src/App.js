import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { FeedbackList } from './components/FeedbackList';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackForm } from './components/FeedbackForm';
import { AboutIcon } from './components/AboutIcon';
import { AboutPage } from './pages/AboutPage';

import { FeedbackProvider } from './context/FeedbackContext';

import './styles.css';

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
