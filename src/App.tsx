import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
// import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
// import LoginPage from './pages/LoginPage/LoginPage';
// import SignupPage from './pages/SignupPage/SignupPage';
// import GuestCheckoutPage from './pages/GuestCheckoutPage/GuestCheckoutPage';
// import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage';
// import CartPage from './pages/CartPage/CartPage';
// import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
// import OrderConfirmationPage from './pages/OrderConfirmationPage/OrderConfirmationPage';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/products" element={<ProductsPage />} />
                {/* <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/guest-checkout" element={<GuestCheckoutPage />} />
                <Route path="/dashboard" element={<UserDashboardPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
