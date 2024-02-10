import React from "react";
import Vision from "../components/Vision";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FeedbackForm from "../components/Feedback";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Cards />
      <FeedbackForm />
      <Footer />
    </>
  );
};

export default Home;
