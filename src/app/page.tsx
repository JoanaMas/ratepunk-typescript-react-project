import React, { FC, ReactElement } from "react";
// Components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Home: FC = (): ReactElement => {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
