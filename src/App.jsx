import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/Home/HomeScreen';
import LoginScreen from './screens/Login/LoginScreen';
import SignUpScreen from './screens/SignUp/SignUpScreen';
import PaymentInputScreen from './screens/PaymentInput/PaymentInputScreen';

import VirtualCardDetailsScreen from './screens/VirtualCardDetails/VirtualCardDetailsScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/payment" element={<PaymentInputScreen />} />
        <Route path="/details" element={<VirtualCardDetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
