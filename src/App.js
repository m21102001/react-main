import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/home.js';
import Nav from './Home/components/Nav.js';
import Facilitie from './Facilitie';
import Actives from './Actives';
import Blog from './Blog';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="FACILITIES" element={<Facilitie />} />
        <Route path="ACTIVITIES" element={<Actives />} />
        <Route path="BLOG" element={<Blog/>} />

        {/* <Route path="FACILITIES" element={<Facilitie />} />
        <Route path="ACTIVITIES" element={<Actives />} />
        <Route path="BLOG" element={<BLOG />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
