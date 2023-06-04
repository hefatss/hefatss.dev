import React from 'react'
import LoaderHome from '../component/loaderHome/loaderHome';
import Hero from "../component/hero/hero";
import About from "../component/about/About";
import Navbar from "../component/navbar/Navbar";
import Work from "../component/work/Work";
import Service from "../component/service/Service";
import Footer from "../component/footer/Footer";

export const Home = () => {
  return (
    <div>
        <LoaderHome/>
        <Navbar/>
        <Hero />
        <About />
        <Work />
        <Service />
        <Footer />
    </div>
  )
}

export default Home;