import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout'
import './index.css';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom' 
import HomePage from './Pages/Home/HomePage';
import ProductsPage from './Pages/Product/ProductPage';
import ServicesPage from './Pages/Services/ServicesPage';
import AboutUsPage from './Pages/About/AboutPage';
import ContactUsPage from './Pages/Contact/ContactPage';
import BlogPage from './Pages/Blog/BlogPage';
// import TestimonialsPage from './pages/TestimonialsPage';
// import FAQsPage from './pages/FAQsPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
// import TermsOfServicePage from './pages/TermsOfServicePage';
// import ProductCategoryPage from './pages/ProductCategoryPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
       <Route path="/" element={<HomePage/>} />
        <Route path="/products" exact element={<ProductsPage/>} />
        {/* <Route path="/products/:category" element={<ProductCategoryPage/>} /> */}
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        {/* <Route path="/testimonials" element={<TestimonialsPage/>} />
        <Route path="/faqs" element={<FAQsPage/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
        <Route path="/terms-of-service" element={<TermsOfServicePage/>} /> */}
    </Route>
  ));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
