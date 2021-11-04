import * as React from 'react'
import Header from "../components/Home/Header"
import Skills from "../components/Home/Skills"
import Footer from "../components/Home/Footer"
import Closing from "../components/Home/Closing"
import Testimonial from "../components/Home/Testimonial"
import BuildThings from "../components/Home/BuildThings"
import Writings from "../components/Home/Writings"
import Showcase from "../components/Home/Showcase"
import LatestPost from "../components/Home/LatestPost"
import OSSContribution from "../components/Home/OSSContribution"

const Home = (() => {
    return (
      <div className="bg-white w-full h-full flex items-center flex-col">
        <div>
          <div className="flex h-screen justify-center items-center bg-nord-nord6">
            <Header></Header>
          </div>
          <div>
            <Skills></Skills>
          </div>
          <div className="mt-32">
            <Testimonial></Testimonial>
          </div>
          <div className="mt-32">
            <BuildThings></BuildThings>
          </div>
          <div className="">
            <Writings></Writings>
          </div>
          <div className="bg-nord-nord5">
            <Showcase></Showcase>
          </div>
          <div className="bg-nord-nord6">
            <OSSContribution></OSSContribution>
          </div>
          <div className="bg-nord-nord2">
            <LatestPost></LatestPost>
          </div>
          <div className="bg-white">
            <Closing></Closing>
          </div>
          <div className="bg-white">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
})

export default Home