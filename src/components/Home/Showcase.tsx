import * as React from 'react'

const Showcase = (() => {

    return (
        <div className="flex flex-col justify-items-center">
            <div className="mx-auto px-16">
                <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center tracking-wide">Selected Works</p>
                <p className="text-2xl text-gray-700 font-thin text-center mt-3">From what I've done in the past</p>
            </div>
            <div className="flex flex-wrap w-full px-10 mt-20 justify-center">
                <div className="border border filter drop-shadow-2xl w-full md:w-3/5 md:px-10 py-10 bg-white mx-3 my-3">
                    <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">Winterly - Beautiful Note-taking App</p>
                    <img className="w-full" src={process.env.PUBLIC_URL + '/image/winterly-screenshot.jpg'} alt="Winterly"></img>
                    <p className="text-center font-thin text-xl mt-10 px-10">Role: I own this product 🥰</p>
                    <p className="text-center font-thin text-xl mt-2 px-10">Winterly is a beautiful and minimalist note-taking app featuring cold winter theme. Winterly do not store your data, meaning that whatever you write, stays on your browser. Check it out at <a className="font-semibold text-radical-red-500 hover:text-radical-red-400" href="https://winterly.app" target="_blank" rel="noreferrer">Winterly.app</a>!</p>
                </div>
                <div className="border filter drop-shadow-2xl w-full md:w-3/5 md:px-10 py-10 bg-white mx-3 my-3">
                    <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">Ad Tracking Analytics</p>
                    <img className="w-full" src={process.env.PUBLIC_URL + '/image/pubwatch-screenshot.jpg'} alt="Ad Tracking"></img>
                    <p className="text-center font-thin text-xl mt-10 px-10">Role: frontend, backend, core-engine</p>
                    <p className="text-center font-thin text-xl mt-2 px-10">Made for an interal audit system for a digital advertising company based in Australia. It was nice to utilize AWS for this project.</p>
                </div>
                <div className="border filter drop-shadow-2xl w-full md:w-3/5 md:px-10 py-10 bg-white mx-3 my-3">
                    <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">Get Bad News Chatbot</p>
                    <img className="w-full" src={process.env.PUBLIC_URL + '/image/badnews-bot.png'} alt="Vanilatte"></img>
                    <p className="text-center font-thin text-xl mt-10 px-10">Role: Chatbot Developer</p>
                    <p className="text-center font-thin text-xl mt-2 px-10">It is a chatbot to simulate when all the bad news has spread massively and we have no clue whether we are reading the correct information or not. It was made for a company based in Netherland.</p>
                </div>
                <div className="border filter drop-shadow-2xl w-full md:w-3/5 md:px-10 py-10 bg-white mx-3 my-3">
                    <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">Vanilatte - Digital Wedding Invitation</p>
                    <img className="w-full" src={process.env.PUBLIC_URL + '/image/vanilatte-screenshot.jpg'} alt="Vanilatte"></img>
                    <p className="text-center font-thin text-xl mt-10 px-10">Role: I own this product 🥰</p>
                    <p className="text-center font-thin text-xl mt-2 px-10">Another digital products of mine. Vanilatte will help you to build your personalized digital wedding invitation. It also has a nice guest management system where your guests need only to scan a unique QR code to check-in. Find more information at <a className="font-semibold text-radical-red-500 hover:text-radical-red-400" href="https://vanilatte.com" target="_blank" rel="noreferrer">Vanilatte.com</a>!</p>
                </div>
                <div className="border filter drop-shadow-2xl w-full md:w-3/5 md:px-10 py-10 bg-white mx-3 my-3">
                    <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">Your NEXT Products</p>
                    <img className="w-full" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Vanilatte"></img>
                    <p className="text-center font-thin text-xl mt-10 px-10">A popular Chinese proverb said that, <em>“The best time to plant a tree was 20 years ago. The second best time is now.”</em> Don't let your future product ideas turned into nothing. I would be very glad to help you to bring your ideas to life.</p>
                </div>
            </div>
            <div className="flex flex-col mx-auto mt-20 px-16">
                <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center">See more works</p>
                <p className="text-2xl text-gray-700 font-thin text-center mt-3">I put them all in Mini Product section</p>
                <div className="mx-auto mt-20">
                    <a className="shadow-xl bg-radical-red-500 hover:bg-radical-red-400 px-8 py-5 rounded-full text-white font-title font-thin" href="https://mini.hadna.space/" target="_blank" rel="noreferrer">👏 &nbsp; Check out Mini Products</a>
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
            <div className="flex flex-col mx-auto mt-32 px-16">
                <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center">Let's be an internet BFF!</p>
                <p className="text-2xl text-gray-700 font-thin text-center mt-3 mb-20">I also hang out on other places as well. Find me there!</p>
                <div className="flex flex-col md:flex-row mx-auto">
                    <a className="flex flex-row shadow-xl bg-bunker-500 hover:bg-bunker-100 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center justify-center" href="https://github.com/dkhd" target="_blank" rel="noreferrer">
                        <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
                        &nbsp; Github
                    </a>
                    <a className="flex flex-row shadow-xl bg-blue-chill-500 hover:bg-blue-chill-400 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center justify-center" href="https://linkedin.com/in/dikyhadna" target="_blank" rel="noreferrer">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                        &nbsp; Linkedin
                    </a>
                    <a className="flex flex-row shadow-xl bg-japanese-laurel-500 hover:bg-japanese-laurel-400 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center justify-center" href="https://www.upwork.com/freelancers/~010bc381d70641ac36" target="_blank" rel="noreferrer">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>

                        &nbsp; Upwork
                    </a>
                    <a className="flex flex-row shadow-xl bg-black hover:bg-gray-500 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center justify-center" href="https://medium.com/@dkhd" target="_blank" rel="noreferrer">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>

                        &nbsp; Medium
                    </a>
                    <a className="flex flex-row shadow-xl bg-yellow-500 hover:bg-yellow-400 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center justify-center" href="https://www.buymeacoffee.com/dkhd" target="_blank" rel="noreferrer">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />  <line x1="6" y1="1" x2="6" y2="4" />  <line x1="10" y1="1" x2="10" y2="4" />  <line x1="14" y1="1" x2="14" y2="4" /></svg>
                        &nbsp; Buy Me a Coffee
                    </a>
                    
                    <a className="flex flex-row shadow-xl bg-black hover:bg-gray-500 px-8 py-5 rounded-full text-white font-title font-thin mx-1 my-1 text-center justify-center" href="https://dev.to/dkhd" target="_blank" rel="noreferrer">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>

                        &nbsp; DEV
                    </a>
                </div>
            </div>
        </div >
    )
})

export default Showcase