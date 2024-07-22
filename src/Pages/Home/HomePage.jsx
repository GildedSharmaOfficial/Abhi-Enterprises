import React from "react";
import HeroSection from "../../Components/HeroSection";
import ProductCategories from "../../Components/ProductCategories";
import FeaturedProducts from "../../Components/FeaturedProducts";
import Services from "../../Components/Services";
import AboutUs from "../../Components/AboutUs";
import Testimonials from "../../Components/Testimonials";
import Blog from "../../Components/Blog";
import ContactUs from "../../Components/ContactUs";

const Home = () => {
  return (
    <>
      <div className="container">
        <HeroSection />
        <ProductCategories />
        <FeaturedProducts />
        <Services />
        <AboutUs />
        <Testimonials />
        <Blog />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
