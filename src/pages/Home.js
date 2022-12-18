import React, { useEffect, useState } from "react";
import Header from "../components/header/Navbar";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import OurSpeciality from "../components/OurSpeciality";
import BuyCollection from "../components/BuyCollection";
import OurCollection from "../components/OurCollection";
import TimeLine from "../components/Timeline";
import TeamMember from "../components/TeamMember";
import ClientReview from "../components/ClientReview";
import Faq from "../components/Faq";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div className="home-page">
      <div className="gradient-image">
        <div className="main-content">
          <Header/>
          <Hero/>
        </div>
        <Aboutus/>
        <OurSpeciality/>
        <BuyCollection/>
        <OurCollection/>
        <div className="main-content">
          <TimeLine/>
        </div>
        <TeamMember/>
        <div className="client-review-section">
          <ClientReview/>
        </div>
        <Faq/>
        <div className="footer-section">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;
