import * as React from 'react'
import Tippy from '@tippyjs/react'
import Logo from './Logo'

const imgSize = 100
const emailAddress = "hi@hadna.space"

const Header = (() => {
    const [tippyVisible, setTippyVisible] = React.useState(false)

    const showTippy = () => setTippyVisible(true)
    const hideTippy = () => setTippyVisible(false)
    
    const copyToClipboard = (() => {
        const el = document.createElement('textarea');
        el.value = emailAddress;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        hideTippy();
    })

    const openMailApp = (() => {
        window.open("mailto:" + emailAddress)
        hideTippy();
    })

    return (
        <div className="grid justify-items-start md:justify-items-center px-12 py-12">
            <div className="flex flex-wrap xl:content-center">
                <Logo width={imgSize} height={imgSize}></Logo>
                {/* <div className="grid justify-items-start ml-3">
                    <span className="text-baby-blue-400 self-center font-semibold tracking-wide">DIKY HADNA</span>
                    <a href="https://github.com/dkhd" target="_blank" className="text-baby-blue-400 self-center font-thin -mt-3 tracking-widest hover:text-viking-500" rel="noreferrer">@dkhd</a>
                </div> */}
            </div>
            <h1 className="max-w-screen-lg text-5xl sm:text-8xl xl:text-9xl text-baby-blue-400 mt-7 font-bold md:tracking-tighter text-left md:text-center">AI/ML & Frontend Developer</h1>
            <span className="text-4xl text-baby-blue-400 mt-7 font-light md:tracking-widest text-left md:text-center">available for remote projects</span>
            {/* <hr className="w-full mt-16 border-gray-400"></hr> */}
            <span className="max-w-screen-md text-3xl text-baby-blue-400 mt-5 sm:mt-16 font-thin text-left md:text-center">I build digital products and love helping agencies, business, and good people like you to bring the ideas to life 🚀</span>
            <div className="mx-auto mt-3 md:mt-20 py-5" onMouseEnter={showTippy} onMouseLeave={hideTippy}>
                <Tippy 
                    placement="bottom"
                    interactive={true}
                    visible={tippyVisible}
                    onClickOutside={hideTippy}
                    content={
                        <div className="bg-dkhd-purple-400 text-white font-base px-3 py-3 rounded-md" onMouseEnter={showTippy}>
                            <div role="button" className="flex content-center hover:bg-dkhd-purple-200 hover:text-dkhd-purple px-3 py-3 rounded-md" onClick={copyToClipboard} onMouseEnter={showTippy}><span className="material-icons-outlined font-icon">content_copy</span> &nbsp; Copy to clipboard</div>
                            <div role="button" className="flex content-center mt-2 hover:bg-dkhd-purple-200 hover:text-dkhd-purple px-3 py-3 rounded-md" onClick={openMailApp} onMouseEnter={showTippy}><span className="material-icons-outlined font-icon">email</span> &nbsp; Open your mail app</div>
                        </div>
                    }>
                    <div className="flex flex-row justify-center shadow-xl bg-dkhd-purple-200 hover:bg-dkhd-purple-400 px-8 py-5 rounded-full text-dkhd-purple hover:text-dkhd-purple-200 font-semibold tracking-widest" onClick={showTippy}>📫 &nbsp; {emailAddress}</div>
                </Tippy>
            </div>
        </div>
    )
})

export default Header