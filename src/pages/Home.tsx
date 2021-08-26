import * as React from 'react'
import Header from "../components/Header"
import Skills from "../components/Skills"

const Home = (() => {
    return (
        <div className="bg-white w-full h-full flex items-center flex-col">
            <div>
                <div className="mt-40 mb-20">
                    <Header></Header>
                </div>
                <div>
                    <Skills></Skills>
                </div>
            </div>
        </div>
    )
})

export default Home