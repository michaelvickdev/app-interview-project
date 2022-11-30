import { Routes, Route } from 'react-router-dom'
import ROUTES from './config/routes';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import RegistryPage from './pages/RegistryPage';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
          <a className="pure-menu-heading" href="/">My Breakup Registry</a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item pure-menu-selected"><a href="/" className="pure-menu-link">Home</a></li>
            <li className="pure-menu-item"><a href="/setup" className="pure-menu-link">Sign Up</a></li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<HomePage />} />
        <Route exact path={ROUTES.ONBOARDING} element={<OnboardingPage />} />
        <Route exact path={ROUTES.REGISTRY} element={<RegistryPage />} />
      </Routes>
    </div>
  );
}

export default App;
