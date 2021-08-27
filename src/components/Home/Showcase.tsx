import * as React from 'react'

const Showcase = (() => {

    return (
        <div className="flex flex-col justify-items-center">
            <div className="mx-auto px-16">
                <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center tracking-wide">Selected Works</p>
                <p className="text-2xl text-gray-700 font-thin text-center mt-3">From what I've done in the past</p>
            </div>
            <div className="flex flex-wrap w-full px-10 mt-20 justify-center">
                <div className="filter drop-shadow-2xl w-full md:w-3/5 md:px-10 py-10 bg-white mx-3 my-3">
                    <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">Winterly - Beautiful Note-taking App</p>
                    <img className="w-full" src={process.env.PUBLIC_URL + '/image/winterly-screenshot.jpg'} alt="Winterly"></img>
                    <p className="text-center font-thin text-md mt-10 px-10">Role: I own this product 🥰</p>
                    <p className="text-center font-thin text-md mt-2 px-10">Winterly is a beautiful and minimalist note-taking app featuring cold winter theme. Winterly do not store your data, meaning that whatever you write, stays on your browser. Check it out at <a className="font-semibold text-radical-red-500 hover:text-radical-red-400" href="https://winterly.app" target="_blank" rel="noreferrer">Winterly.app</a>!</p>
                </div>
                <div className="filter drop-shadow-2xl w-full md:w-3/5 md:px-10 py-10 bg-white mx-3 my-3">
                    <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">Ad Tracking Analytics</p>
                    <img className="w-full" src={process.env.PUBLIC_URL + '/image/pubwatch-screenshot.jpg'} alt="Ad Tracking"></img>
                    <p className="text-center font-thin text-md mt-10 px-10">Role: frontend, backend, core-engine</p>
                    <p className="text-center font-thin text-md mt-2 px-10">Made for an interal audit system for a digital advertising company based in Australia. It was nice to utilize AWS for this project.</p>
                </div>
                <div className="filter drop-shadow-2xl w-full md:w-3/5 md:px-10 py-10 bg-white mx-3 my-3">
                    <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">Vanilatte - Digital Wedding Invitation</p>
                    <img className="w-full" src={process.env.PUBLIC_URL + '/image/vanilatte-screenshot.jpg'} alt="Vanilatte"></img>
                    <p className="text-center font-thin text-md mt-10 px-10">Role: I own this product 🥰</p>
                    <p className="text-center font-thin text-md mt-2 px-10">Another digital products of mine. Vanilatte will help you to build your personalized digital wedding invitation. It also has a nice guest management system where your guests need only to scan a unique QR code to check-in. Find more information at <a className="font-semibold text-radical-red-500 hover:text-radical-red-400" href="https://vanilatte.com" target="_blank" rel="noreferrer">Vanilatte.com</a>!</p>
                </div>
            </div>
            <div className="flex flex-col mx-auto mt-32 px-16">
                <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center">Links to find me?</p>
                <p className="text-2xl text-gray-700 font-thin text-center mt-3 mb-20">I also hang out on other places as well. Find me there!</p>
                <div className="flex flex-col md:flex-row mx-auto">
                    <a className="shadow-xl bg-bunker-500 hover:bg-bunker-100 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center" href="https://github.com/dkhd" target="_blank" rel="noreferrer">Github</a>
                    <a className="shadow-xl bg-blue-chill-500 hover:bg-blue-chill-400 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center" href="https://linkedin.com/in/dikyhadna" target="_blank" rel="noreferrer">Linkedin</a>
                    <a className="shadow-xl bg-japanese-laurel-500 hover:bg-japanese-laurel-400 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center" href="https://www.upwork.com/freelancers/~010bc381d70641ac36" target="_blank" rel="noreferrer">Upwork</a>
                    <a className="shadow-xl bg-black hover:bg-gray-500 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center" href="https://medium.com/@dkhd" target="_blank" rel="noreferrer">Medium</a>
                    <a className="shadow-xl bg-yellow-500 hover:bg-yellow-400 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center" href="https://www.buymeacoffee.com/dkhd" target="_blank" rel="noreferrer">Buy Me a Coffee</a>
                </div>
            </div>
            <div className="flex flex-col mx-auto mt-32 px-16">
                <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center">Uh oh..</p>
                <p className="text-2xl text-gray-700 font-thin text-center mt-3 mb-10">Looks like we have a sponsored message</p>
            </div>
            <div className="flex flex-col mx-auto shadow-2xl items-center bg-white w-8/12 md:w-72">
                <div className="w-full h-full">
                    <figure className="relative w-full h-full">
                        <img className="object-cover w-full h-full" src={process.env.PUBLIC_URL + '/image/bima-square.jpg'} alt="Bima"></img>
                        <img className="-mt-12 text-white w-2/5 mx-auto" src={process.env.PUBLIC_URL + '/image/facetime.png'} alt="Camille Bismonte @ Unsplash"></img>
                    </figure>
                </div>
                <div className="mt-5">
                    <div className="px-7 py-7">
                        <p className="font-thin text-grey-600">
                            "Hi I’m Bima! I love to appear on papa’s video-calls. He always tries to be professional with the clients, but I love to surprise him."
                        </p>
                        <p className="text-grey-600 font-thin text-right mt-5">
                            With ❤️ love,<br />Bima
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
})

export default Showcase