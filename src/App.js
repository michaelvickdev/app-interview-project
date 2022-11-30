import { Routes, Route } from 'react-router-dom'
import ROUTES from './config/routes';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import RegistryPage from './pages/RegistryPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={ROUTES.HOME} element={<HomePage />} />
        <Route exact path={ROUTES.ONBOARDING} element={<OnboardingPage />} />
        <Route exact path={ROUTES.REGISTRY} element={<RegistryPage />} />
      </Routes>
    </div>
  );
}

export default App;
