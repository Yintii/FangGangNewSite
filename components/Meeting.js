import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const MeetSection = () => {



    const FangMascot = ({ placement }) => {
        
        const [fangAvatarRef, fangAvatarRefInView] = useInView({ threshold: 0 });
        useEffect(() => {
            fangAvatarRefInView ? document.querySelector(".fang-img-area > img").classList.add('toaster-pop-up') : null;
        }, [fangAvatarRefInView])
        return( 
            <div className={placement == 'desktop' ? 'outter-img-wrap desktop' : 'outter-img-wrap mobile fang-mascot-mobile'} >
                <div className="fang-img-area" ref={fangAvatarRef}>
                    <img src={'./images/mascot.png'} width="200px" height="195px" />
                </div>
                <img className='logo' src={'./images/logoNoHash.png'} width="212px" height="80px" />
            </div>
        )
    };



    return (
        <section id="meet">
            <div>
                <div className="section-copy purple-bg">
                    <div className='copy-wrap'>
                        <h2>MEET THE <span className="gold">FANG GANG</span>.</h2>
                        <FangMascot placement={'mobile'} />
                        <div className="copy-btns">
                            <a href="https://opensea.io/collection/fanggangnft" target="_blank" className='section-button'>JOIN</a>
                            <a href="https://shop.awoostudios.com/pages/fang-gang" target="_blank" className='section-button'>VISIT</a>
                        </div>
                        <p className='section-p'>
                            The Fang Gang comes out at night to throw parties, hang around in dark alleys and have fun on the streets of New Fang City.
                        </p>
                        <p className='section-p'>
                            What started as a character built for digital collectibles has grown to be somuch more. They love streetwear, a tight-knit community, music and art. All of which has been established within the Awoo Studios ecosystem.
                        </p>
                    </div>
                </div>
                <FangMascot placement={'desktop'}/>
            </div>
            <img id="fanggrid" src={"./images/fanggrid.png"} />
        </section>
    )
}

export default MeetSection;