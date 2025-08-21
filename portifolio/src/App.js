
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index  element={<Home/>}/>
    <Route path="ContactMe" element={<ContactMe/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="/" element={<Layout/>}/>
     </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
