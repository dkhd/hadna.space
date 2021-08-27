import * as React from 'react'
import Tippy from '@tippyjs/react'

const emailAddress = "hi@hadna.space"

const Closing = (() => {
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
        <div className="grid justify-items-start md:justify-items-center px-12 py-12 bg-gray-100">
            <h1 className="text-6xl sm:text-8xl xl:text-9xl text-gray-700 mt-7 font-bold md:tracking-tighter text-left md:text-center md:w-3/5">That’s it! Now it’s your turn to say hi.</h1>
            <span className="text-4xl text-gray-700 mt-12 font-thin text-left md:text-center md:w-2/4">And in case you need a whole squad, I can recommend good developers and UI/UX designers as well 😊</span>
            <div className="mx-auto mt-20 py-5" onMouseEnter={showTippy} onMouseLeave={hideTippy}>
                <Tippy 
                    placement="top"
                    interactive={true}
                    visible={tippyVisible}
                    onClickOutside={hideTippy}
                    content={
                        <div className="bg-radical-red-500 text-white font-base px-3 py-3 rounded-md" onMouseEnter={showTippy}>
                            <div role="button" className="flex content-center hover:bg-radical-red-400 hover:text-white px-3 py-3 rounded-md" onClick={copyToClipboard} onMouseEnter={showTippy}><span className="material-icons-outlined font-icon">content_copy</span> &nbsp; Copy to clipboard</div>
                            <div role="button" className="flex content-center mt-2 hover:bg-radical-red-400 hover:text-white px-3 py-3 rounded-md" onClick={openMailApp} onMouseEnter={showTippy}><span className="material-icons-outlined font-icon">email</span> &nbsp; Open your mail app</div>
                        </div>
                    }>
                    <div className="shadow-xl bg-radical-red-500 hover:bg-radical-red-400 px-8 py-5 rounded-full text-white font-semibold tracking-widest" onClick={showTippy}>📫 &nbsp; {emailAddress}</div>
                </Tippy>
            </div>
        </div>
    )
})

export default Closing