import * as React from 'react'
import Header from "../components/Header"

const Home = (() => {
    return (
        <div className="bg-shark-900 p-20 h-screen flex items-start flex-col">
            <div className="mt-20 w-full">
                <Header></Header>
            </div>
        </div>
    )
})

export default Home