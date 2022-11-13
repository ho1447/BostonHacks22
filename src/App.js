import './App.css';
import MenuAppBar from "./components/MenuAppBar";
import Menu from './pages/menu'
import Dashboard from './pages/dashboard/Dashboard';
import GenderDashboard from './pages/dashboard/genderDashboard';
import { Game } from './pages/game/Game';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <MenuAppBar/>
        <Routes>
          <Route path="" element={<Menu/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/dashboard/gender" element={<GenderDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;