import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Landing from './pages/Landing.jsx';
import SignIn from './pages/SignIn.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import FeaturePage from './pages/FeaturePage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ConnectPage from './pages/ConnectPage.jsx';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/menu/products/connect" element={<ConnectPage />} />
        <Route path="/menu/:category/:item" element={<FeaturePage />} />
      </Routes>
    </AuthProvider>
  );
}
