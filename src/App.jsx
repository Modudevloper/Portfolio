import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './component/1page/header';
import AboutMe from './component/2page/about';
import ResumeSection from './component/3page/resume';
import PortfolioSection from './component/4page/portfolio';
import Contact from './component/6page/contact';
import SocialMedia from './component/5page/social';
import MainLayout from './component/mainlayout'; // new
import ThankYou from './component/6page/thnaku';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<ProfilePage />} />
          <Route path="/" element={<MainLayout />}>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<ResumeSection />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/social" element={<SocialMedia />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
