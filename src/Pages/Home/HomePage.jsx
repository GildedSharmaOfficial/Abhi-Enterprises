import React from "react";
import HeroSection from "./HeroSection";
import ProductCategories from "./ProductCategories";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <div className="container">
        <HeroSection />
        <ProductCategories />
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
