import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Activos } from "./pages/activos";
import { FormsActivos } from "./pages/formsactivos";
import { Navigation } from "./components/Navigation";

function App() {
  return (
  
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/activos" />} />
        <Route path="/activos" element={<Activos />} />
        <Route path="/formsactivos" element={<FormsActivos />} />
      </Routes>
       </BrowserRouter>
  );
}

export default App;