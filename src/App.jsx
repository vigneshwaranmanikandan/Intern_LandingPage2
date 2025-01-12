import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageView1 from './components/LandingPageView1';
import LandingPageView2 from './components/LandingPageView2';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/LandingPageView1" element={<LandingPageView1 />} />
          <Route path="/" element={<LandingPageView1 />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
