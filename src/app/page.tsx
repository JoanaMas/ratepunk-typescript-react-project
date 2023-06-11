"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
// Components
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
// API request
import { getData } from "@/api/getData";


const Home: FC = (): ReactElement => {

  const [userEmailData, setUserEmailData] = useState([]);

  const fetchUserEmailsData = async () => {
    const binId = "6484ee76b89b1e2299acff2a";
    const url = `https://api.jsonbin.io/v3/b/${binId}/latest`;
    const headers = {
      "Content-Type": "application/json",
      "X-Master-Key": "$2b$10$AKc9NTQ2AESKX3MjQqRjxu8QQdIwsJryvMMo84h4wIwHfH3sue0ey",
    };

    try {
      const response = await fetch(url, {
        headers,
      });

      if(response.ok) {
        const data = await response.json();
        setUserEmailData(data.record.users);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch data from JSONBin");
    }
  };

  useEffect(() => {

    const fetchData = async () => {
      const data = await fetchUserEmailsData();
      return data;
    };
     
    fetchData();
  }, []);

  console.log(userEmailData);


  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
