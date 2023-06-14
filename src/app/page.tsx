"use client";

import React, { FC, ReactElement } from "react";
// Components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MainSections from "@/components/mainSections/MainSections";
// API request

const Home: FC = (): ReactElement => {

  return (
    <div>
      <Navbar />
      <MainSections />
      <Footer />
    </div>
  );
};

export default Home;
