import './App.css';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Module_01_01 from './components/Modules/Module-01/Module_01_01.jsx';
import Module_01_02 from './components/Modules/Module-01/Module_01_02.jsx';
import Module_01_03 from './components/Modules/Module-01/Module_01_03.jsx';

function App() {
  return (
    <div className="absolute top-0 left-0 p-4">
      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Module_01_01 />} />
        <Route path="/module_01_02" element={<Module_01_02 />} />
        <Route path="/module_01_03" element={<Module_01_03 />} />
      </Routes>
    </div>
  );
}

export default App;



//<Route path="/" element={<Module_01_01 />} />