import * as React from 'react'

const Writings = (() => {

    return (
        <div className="flex flex-col xl:flex-row-reverse bg-dkhd-purple-200">
            <div className="flex flex-col xl:w-2/4 px-12 py-12">
                <span className="text-xl sm:text-3xl xl:text-5xl text-gray-600 font-title font-sans font-semibold text-left">Hey, I write too!</span>
                <span className="flex flex-row content-center ml-3 mt-3">
                    <svg className="self-center" width="13" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="#6D6E6E" fillRule="nonzero"><path d="M8.346 4.846a.5.5 0 01.638-.057l.07.057 3.5 3.5a.5.5 0 01.057.638l-.057.07-3.5 3.5a.5.5 0 01-.765-.638l.057-.07L11.493 8.7 8.346 5.554a.5.5 0 01-.057-.638l.057-.07z"></path><path d="M1 .5a.5.5 0 01.492.41L1.5 1v4.9a2.3 2.3 0 002.143 2.295L3.8 8.2h8.4a.5.5 0 01.09.992l-.09.008H3.8A3.3 3.3 0 01.505 6.087L.5 5.9V1A.5.5 0 011 .5z"></path></g></svg>
                    <span className="self-center ml-3 text-gray-500">
                        a small contribution for the internet
                    </span>
                </span>
                <span className="text-xl text-gray-700 font-light text-left mt-12">Thanks to kind internet community for giving positive influence to me, and it's always an honor for me to return the favor.</span>
                <span className="text-xl text-gray-700 font-light text-left mt-5">I write mostly about technology, and put them on my personal blog, Medium and DEV page. Oh, and some of them are published in well-known Medium publication like <strong>ITNEXT</strong> and <strong>Chatbots Life</strong>!</span>
                <span className="text-xl text-gray-700 font-light text-left mt-5">You can always subscribe to my blog at <a href='https://note.hadna.space' target='_blank' rel='noreferrer' className="text-dkhd-purple-500 border-b-2 border-dashed border-dkhd-purple hover:text-dkhd-purple-600 font-semibold">note.hadna.space</a> to get notification about my latest writings.</span>
                <div className="mx-auto mt-16">
                    <a className="shadow-xl bg-dkhd-purple hover:bg-dkhd-purple-400 px-8 py-5 rounded-full text-white font-title font-light" href="https://note.hadna.space" target="_blank" rel="noreferrer">👓 &nbsp; Read My Notes</a>
                </div>
            </div>
            <div className="xl:w-2/4">
                <figure className=" relative w-full h-full">
                    <img className="object-cover h-full w-full" src={process.env.PUBLIC_URL + '/image/writings.png'} alt="Camille Bismonte @ Unsplash"></img>
                    <figcaption className="absolute -mt-16 text-white px-4 py-4 bg-dkhd-purple">
                        <div>
                            <h1 className="text-sm"><a href="https://unsplash.com/photos/505eectW54k" target="_blank" rel="noreferrer">&copy; Thought Catalog — Unsplash</a></h1>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
})

export default Writings