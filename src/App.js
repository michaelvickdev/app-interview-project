import { Routes, Route } from 'react-router-dom'
import "./App.css"
import HomePage from './pages/HomePage';
import ROUTES from './config/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
