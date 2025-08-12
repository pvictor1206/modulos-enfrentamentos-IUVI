import './App.css';
import Module_01_01 from './components/Modules/Module-01/Module_01_01.jsx';
import Module_01_02 from './components/Modules/Module-01/Module_01_02.jsx';
import Module_01_03 from './components/Modules/Module-01/Module_01_03.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="absolute top-0 left-0 p-4">
      <Router>
        <Routes>
          <Route path="/" Component={Module_01_01}/>
          <Route path="/module_01_02" Component={Module_01_02}/>
          <Route path="/module_01_03" Component={Module_01_03}/>
          {/* Adicione mais rotas aqui se necessário */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//<Route path="/" element={<Module_01_01 />} />