import React from "react";
import SidebarNav from "../home/sidebar/Sidebar";
import OurService from "../home/ourService";
import WhyUs from "../home/whyUs";
import Testimonial from "../home/testimonial";
import FAQ from "../home/faq";
import Footer from "../home/footer";
import BestCar from "../home/bestCar";

const Homepage = () =>{

    return(
        <>
        <SidebarNav/>
        <OurService/>
        <BestCar/>
        <WhyUs/>
        <Testimonial/>
        <FAQ/>
        <Footer/>
        </>
    )

}

export default Homepage