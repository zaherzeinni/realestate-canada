import Home5About from "../components/components/about/Home5About";
import Home5Activities from "../components/components/activities/Home5Activities";
import Home5Banner from "../components/components/banner/Home5Banner";
import Home5Banner2 from "../components/components/banner/Home5Banner2";
import Home5Banner3 from "../components/components/banner/Home5Banner3";
import Home5Blog from "../components/components/blog/Home5Blog";
import Home5DestinationSlider from "../components/components/destinationSlider/Home5DestinationSlider";
import Home5Facilities from "../components/components/facilites/Home5Facilities";
import Footer from "../components/components/footer/Footer";
import Header5 from "../components/components/header/Header5";
import Home5Team from "../components/components/team/Home5Team";
import Home5Testimonial from "../components/components/testimonial/Home5Testimonial";
import Topbar6 from "../components/components/topbar/Topbar6";
import Home5Visa from "../components/components/visaComponents/Home5Visa";
import Home5WhyChoose from "../components/components/whyChoose/Home5WhyChoose";
import React from "react";
export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description:
    "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const page = () => {
  return (
    <div dir="ltr">
      <Topbar6 />
      <Header5 />
      <Home5Banner />
      <Home5Activities />
      <Home5About />
      <Home5DestinationSlider />
      <Home5Facilities />
      <Home5WhyChoose />
      <Home5Banner2 />
      <Home5Testimonial />
      <Home5Visa />
      <Home5Team />
      <Home5Blog />
      <Home5Banner3 />
      <Footer style="style-2" />
    </div>
  );
};

export default page;
