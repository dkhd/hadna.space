import * as React from 'react'

const BuildThings = (() => {

    return (
        <div className="flex flex-col xl:flex-row bg-dkhd-purple-200">
            <div className="flex flex-col xl:w-2/4 px-12 py-12">
                <span className="text-xl sm:text-3xl xl:text-5xl text-gray-600 font-title font-sans font-semibold text-left">I build things for you</span>
                <span className="flex flex-row content-center ml-3 mt-3">
                    <svg className="self-center" width="13" height="13" xmlns="http://www.w3.org/2000/svg"><g fill="#6D6E6E" fillRule="nonzero"><path d="M8.346 4.846a.5.5 0 01.638-.057l.07.057 3.5 3.5a.5.5 0 01.057.638l-.057.07-3.5 3.5a.5.5 0 01-.765-.638l.057-.07L11.493 8.7 8.346 5.554a.5.5 0 01-.057-.638l.057-.07z"></path><path d="M1 .5a.5.5 0 01.492.41L1.5 1v4.9a2.3 2.3 0 002.143 2.295L3.8 8.2h8.4a.5.5 0 01.09.992l-.09.008H3.8A3.3 3.3 0 01.505 6.087L.5 5.9V1A.5.5 0 011 .5z"></path></g></svg>
                    <span className="self-center ml-3 text-gray-500">
                        it ain't much, but it's honest work
                    </span>
                </span>
                <span className="text-xl text-gray-700 font-light text-left mt-12">I love building digital products, and there are some mini-products I've built that you can use for free (but you can always make a small donation if you wish to).</span>
                <span className="text-xl text-gray-700 font-light text-left mt-5">My hope is that you can use what I provide to increase your happiness and make your life easier. Again, it ain't much, but it's honest work.</span>
                <span className="text-xl text-gray-700 font-light text-left mt-5">Have an idea for my mini-products? Just drop me a message. As simple as that! 😁</span>
                <div className="mx-auto mt-16">
                    <a className="shadow-xl bg-dkhd-purple hover:bg-dkhd-purple-400 px-8 py-5 rounded-full text-white font-title font-light" href="https://mini.hadna.space/" target="_blank" rel="noreferrer">👏 &nbsp; Check out Mini Products</a>
                </div>
            </div>
            <div className="xl:w-2/4">
                <figure className=" relative w-full h-full">
                    <img className="object-cover h-full w-full" src={process.env.PUBLIC_URL + '/image/macbook.png'} alt="Camille Bismonte @ Unsplash"></img>
                    <figcaption className="absolute -mt-16 text-white px-4 py-4 bg-black bg-opacity-50">
                        <div>
                            <h1 className="text-sm"><a href="https://unsplash.com/photos/m_HRfLhgABo" target="_blank" rel="noreferrer">&copy; Christopher Gower — Unsplash</a></h1>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
})

export default BuildThings
