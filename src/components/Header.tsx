import * as React from 'react'
import Tippy from '@tippyjs/react'
import Logo from './Logo'

const imgSize = 64
const emailAddress = "dikyhadna@gmail.com"

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
        <div className="grid justify-items-start md:justify-items-center">
            <div className="flex flex-wrap xl:content-center">
                <Logo width={imgSize} height={imgSize}></Logo>
                <div className="grid justify-items-start ml-3">
                    <span className="text-gray-300 self-center font-semibold tracking-widest">DIKY HADNA</span>
                    <a href="https://github.com/dkhd" target="_blank" className="text-gray-400 self-center font-thin -mt-3 tracking-widest hover:text-viking-500" rel="noreferrer">@dkhd</a>
                </div>
            </div>
            <h1 className="text-5xl sm:text-8xl xl:text-9xl text-viking-500 font-title mt-7 font-black md:tracking-tight text-left md:text-center">Freelance Developer</h1>
            <span className="max-w-screen-xl text-3xl text-gray-400 mt-7 font-thin text-left md:text-center">I help agencies, business, and good people like you to bring the ideas to life 🚀</span>
            <div className="mt-20 pb-5" onMouseEnter={showTippy} onMouseLeave={hideTippy}>
                <Tippy 
                    placement="bottom"
                    interactive={true}
                    visible={tippyVisible}
                    onClickOutside={hideTippy}
                    content={
                        <div className="bg-radical-red-700 text-gray-300 font-base px-3 py-3 rounded-md" onMouseEnter={showTippy}>
                            <div role="button" className="flex content-center hover:bg-radical-red-500 px-3 py-3 rounded-md" onClick={copyToClipboard} onMouseEnter={showTippy}><span className="material-icons-outlined font-icon">content_copy</span> &nbsp; Copy to clipboard</div>
                            <div role="button" className="flex content-center mt-2 hover:bg-radical-red-500 px-3 py-3 rounded-md" onClick={openMailApp} onMouseEnter={showTippy}><span className="material-icons-outlined font-icon">email</span> &nbsp; Open your mail app</div>
                        </div>
                    }>
                    <div className="bg-radical-red-700 hover:bg-radical-red-500 px-8 py-5 rounded-full text-gray-200 font-semibold tracking-widest" onClick={showTippy}>dikyhadna@gmail.com</div>
                </Tippy>
            </div>
        </div>
    )
})

export default Header