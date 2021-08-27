import * as React from 'react'

interface ImageProps {
    width?: number
    height?: number
}

const Logo = (({ width = 72, height = 72 }: ImageProps) => {
    return (
        <>
            <div className="">
                <img className="rounded-full" width={width} height={height} src={process.env.PUBLIC_URL + '/image/me-bg-white.png'} alt="Hadna Space"></img>
            </div>
        </>
    )
})

export default Logo