import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='project/:projectId' element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
