import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import HowItWorks from './pages/HowItWorks';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';

import PrivacyPolicy from './pages/policies/PrivacyPolicyPage';
import ShippingPolicy from './pages/policies/ShippingPolicy';
import TermsAndConditions from './pages/policies/TermsAndConditions';
import RefundPolicy from './pages/policies/RefundPolicy';
import ConsignmentAgreement from './pages/policies/ConsignmentAgreement';

import AccountLayout from './pages/account/AccountLayout';
import AccountHome from './pages/account/AccountHome';
import PendingCards from './pages/account/PendingCards';
import LiveCards from './pages/account/LiveCards';
import BoughtCards from './pages/account/BoughtCards';
import StoreCredit from './pages/account/StoreCredit';
import AccountSettings from './pages/account/AccountSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/product/:id" element={<ProductPage />} />

          {/* Policy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/consignment-agreement" element={<ConsignmentAgreement />} />
        </Route>

        {/* Account Pages */}
        <Route path="/account" element={<AccountLayout />}>
          <Route path="home" element={<AccountHome />} />
          <Route path="pending" element={<PendingCards />} />
          <Route path="live" element={<LiveCards />} />
          <Route path="bought" element={<BoughtCards />} />
          <Route path="credit" element={<StoreCredit />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
