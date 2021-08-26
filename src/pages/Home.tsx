import * as React from 'react'
import Header from "../components/Home/Header"
import Skills from "../components/Home/Skills"
import Footer from "../components/Home/Footer"
import Closing from "../components/Home/Closing"
import Testimonial from "../components/Home/Testimonial"
import BuildThings from "../components/Home/BuildThings"

const Home = (() => {
    return (
        <div className="bg-white w-full h-full flex items-center flex-col">
            <div>
                <div className="flex h-screen justify-center items-center">
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
                <div className="mt-20">
                    <Closing></Closing>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
})

export default Home