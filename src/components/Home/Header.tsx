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
        </div>
        <h1 className="max-w-screen-lg text-5xl sm:text-8xl xl:text-7xl text-nord-nord2 mt-7 font-semibold md:tracking-tighter text-left md:text-center">
          Diky Hadna &middot; NFT Engineer
        </h1>
        <span className="text-3xl text-nord-nord3 mt-7 font-light md:tracking-widest text-left md:text-center">
          Want to build the coolest NFT in the metaverse?
        </span>
        {/* <hr className="w-full mt-16 border-gray-400"></hr> */}
        <div className="max-w-screen-md text-3xl text-nord-nord3 mt-5 sm:mt-16 font-light text-left md:text-center">
          <p className="font-quote">
            "Diky is one of the best NFT engineer I've work with! All my NFT
            projects are going extremely smooth with his help! From art
            generation, smart contract, to minting website, he's able to handle
            them well"
          </p>
          <p className="font-light mt-5 tracking-wide text-2xl">
            {"("}
            <a
              href="https://twitter.com/budibisa"
              target="_blank"
              rel="noreferrer"
              className="text-nord-nord15 border-b-2 border-dashed border-nord-nord15 hover:border-nord-nord13 hover:text-nord-nord13 font-semibold"
            >
              santosa.eth
            </a>
            , Founder of{" "}
            <a
              href="https://idnft.id"
              target="_blank"
              rel="noreferrer"
              className="text-nord-nord15 border-b-2 border-dashed border-nord-nord15 hover:border-nord-nord13 hover:text-nord-nord13 font-semibold"
            >
              IDNFT
            </a>
            {")"}
          </p>
        </div>
        <div
          className="mx-auto mt-3 md:mt-20 py-5"
          onMouseEnter={showTippy}
          onMouseLeave={hideTippy}
        >
          <Tippy
            placement="bottom"
            interactive={true}
            visible={tippyVisible}
            onClickOutside={hideTippy}
            content={
              <div
                className="bg-nord-nord13 text-nord-nord3 font-base px-3 py-3 rounded-md"
                onMouseEnter={showTippy}
              >
                <div
                  role="button"
                  className="flex content-center hover:bg-nord-nord8 px-3 py-3 rounded-md"
                  onClick={copyToClipboard}
                  onMouseEnter={showTippy}
                >
                  <span className="material-icons-outlined font-icon">
                    content_copy
                  </span>{" "}
                  &nbsp; Copy to clipboard
                </div>
                <div
                  role="button"
                  className="flex content-center mt-2 hover:bg-nord-nord8 px-3 py-3 rounded-md"
                  onClick={openMailApp}
                  onMouseEnter={showTippy}
                >
                  <span className="material-icons-outlined font-icon">
                    email
                  </span>{" "}
                  &nbsp; Open your mail app
                </div>
              </div>
            }
          >
            <div
              className="flex flex-row justify-center shadow-xl bg-nord-nord8 hover:bg-nord-nord13 px-8 py-5 rounded-full text-nord-nord3 hover:text-nord-nord3 font-semibold tracking-widest"
              onClick={showTippy}
            >
              📫 &nbsp; {emailAddress}
            </div>
          </Tippy>
        </div>
      </div>
    );
})

export default Header