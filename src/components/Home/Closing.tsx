import * as React from 'react'

const Closing = (() => {

    return (
        <div className="grid justify-items-start md:justify-items-center px-12 py-12">
            <h1 className="text-6xl sm:text-8xl xl:text-9xl text-gray-700 mt-7 font-bold md:tracking-tighter text-left md:text-center md:w-3/5">That’s it! Now it’s your turn to say hi.</h1>
            <span className="text-4xl text-gray-700 mt-12 font-light text-left md:text-center md:w-2/4">And in case you need a whole squad, I can recommend good developers and UI/UX designers as well 😊</span>
            <div className="flex flex-col md:flex-row mx-auto mt-20">
                <a className="flex flex-row shadow-xl bg-bunker-500 hover:bg-bunker-100 px-8 py-5 rounded-full text-white font-title font-light mx-1 my-1 text-center justify-center" href="https://github.com/dkhd" target="_blank" rel="noreferrer">
                    <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
                    &nbsp; Github
                </a>
                <a className="flex flex-row shadow-xl bg-blue-chill-500 hover:bg-blue-chill-400 px-8 py-5 rounded-full text-white font-title font-light mx-1 my-1 text-center justify-center" href="https://linkedin.com/in/dikyhadna" target="_blank" rel="noreferrer">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    &nbsp; Linkedin
                </a>
                <a className="flex flex-row shadow-xl bg-japanese-laurel-500 hover:bg-japanese-laurel-400 px-8 py-5 rounded-full text-white font-title font-light mx-1 my-1 text-center justify-center" href="https://www.upwork.com/freelancers/~010bc381d70641ac36" target="_blank" rel="noreferrer">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>

                    &nbsp; Upwork
                </a>
                <a className="flex flex-row shadow-xl bg-yellow-500 hover:bg-yellow-400 px-8 py-5 rounded-full text-white font-title font-light mx-1 my-1 text-center justify-center" href="https://www.buymeacoffee.com/dkhd" target="_blank" rel="noreferrer">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />  <line x1="6" y1="1" x2="6" y2="4" />  <line x1="10" y1="1" x2="10" y2="4" />  <line x1="14" y1="1" x2="14" y2="4" /></svg>
                    &nbsp; Buy Me a Coffee
                </a>

                <a className="flex flex-row shadow-xl bg-black hover:bg-gray-500 px-8 py-5 rounded-full text-white font-title font-light mx-1 my-1 text-center justify-center" href="https://note.hadna.space" target="_blank" rel="noreferrer">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>

                    &nbsp; Blog
                </a>
            </div>
        </div>
    )
})

export default Closing