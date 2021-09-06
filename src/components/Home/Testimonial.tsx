import * as React from 'react'

const Testimonial = (() => {

    return (
        <div className="flex flex-wrap justify-items-center">
            <div className="px-16 mx-auto">
                <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center tracking-wide">What did they say?</p>
                <p className="text-2xl text-gray-700 font-thin text-center mt-3">From some nice clients I've work for</p>
            </div>
            <div className="flex flex-wrap w-full px-10 mt-20 justify-center">
                <div className="filter drop-shadow-2xl rounded-3xl px-10 py-20 bg-white w-full lg:w-3/12 mx-3 my-3">
                    <p className="text-center font-thin text-xl h-3/6">"Diky was really easy to work with, accommodating and he replies very fast. He is also very pleasant and polite. Highly recommended"</p>
                    <p className="text-center font-thin text-xl mt-20">Peiru Teo - <span className="font-medium">Forth.ai 🇸🇬</span></p>
                    <div className="flex flex-wrap justify-items-center mt-2">
                        <div className="mx-auto flex flex-row">
                            <a href="https://www.upwork.com/freelancers/~010bc381d70641ac36" target="_blank" rel="noreferrer" className="text-center underline font-medium text-md text-japanese-laurel-500">Read on UpWork </a>
                            <svg className="mt-2 ml-2" width="10" height="10" xmlns="http://www.w3.org/2000/svg"><g stroke="#14a800" stroke-width="1.6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M1 9l8-8M1 1h8v8" /></g></svg>
                        </div>
                    </div>
                </div>
                <div className="filter drop-shadow-2xl rounded-3xl px-10 py-20 bg-white w-full lg:w-3/12 mx-3 my-3">
                    <p className="text-center font-thin text-xl h-3/6">"Diky is very prompt, thorough and open for feedback and suggestions."</p>
                    <p className="text-center font-thin text-xl mt-20">Alyssa Belton - <span className="font-medium">Clustaar 🇫🇷</span></p>
                    <div className="flex flex-wrap justify-items-center mt-2">
                        <div className="mx-auto flex flex-row">
                            <a href="https://www.upwork.com/freelancers/~010bc381d70641ac36" target="_blank" rel="noreferrer" className="text-center underline font-medium text-md text-japanese-laurel-500">Read on UpWork </a>
                            <svg className="mt-2 ml-2" width="10" height="10" xmlns="http://www.w3.org/2000/svg"><g stroke="#14a800" stroke-width="1.6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M1 9l8-8M1 1h8v8" /></g></svg>
                        </div>
                    </div>
                </div>
                <div className="filter drop-shadow-2xl rounded-3xl px-10 py-20 bg-white w-full lg:w-3/12 mx-3 my-3">
                    <p className="text-center font-thin text-xl h-3/6">"Kudos to this talented and enthusiastic chatbot designer."</p>
                    <p className="text-center font-thin text-xl mt-20">Bram Alkema - <span className="font-medium">GetBadNews 🇳🇱</span></p>
                    <div className="flex flex-wrap justify-items-center mt-2">
                        <div className="mx-auto flex flex-row">
                            <a href="https://www.upwork.com/freelancers/~010bc381d70641ac36" target="_blank" rel="noreferrer" className="text-center underline font-medium text-md text-japanese-laurel-500">Read on UpWork </a>
                            <svg className="mt-2 ml-2" width="10" height="10" xmlns="http://www.w3.org/2000/svg"><g stroke="#14a800" stroke-width="1.6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M1 9l8-8M1 1h8v8" /></g></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mx-auto mt-32 px-16">
                <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center">Want to be nice as well?</p>
                <p className="text-2xl text-gray-700 font-thin text-center mt-3 mb-20">Here's the magic internet button for you 🥰</p>
                <div className="mx-auto">
                    <a className="shadow-xl bg-yellow-500 hover:bg-yellow-400 px-8 py-5 rounded-full text-white font-title font-thin" href="https://www.buymeacoffee.com/dkhd" target="_blank" rel="noreferrer">☕ &nbsp; Buy me a coffee</a>
                </div>
            </div>
        </div >
    )
})

export default Testimonial