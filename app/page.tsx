"use client"
import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Details from "../components/Details"
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <Navbar/>
      <Details/>
      <Footer/>
    </div>
  );
}
