import './App.css';
import ReduxCounter from './components/ReduxCounter.jsx';
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from './pages/NotFound';

 
function App() {
  return (
    <div className="App">
      <ReduxCounter />

      <h6>#######################</h6>

      <NavLink to='/'>main </NavLink>
      <NavLink to='/Contact'>contact </NavLink>
      <NavLink to='/About'>about </NavLink>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
