import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const MeetSection = () => {

    const [meetRef, meetInView] = useInView({ threshold: 0 })
    const [fangAvatarRef, fangAvatarRefInView] = useInView({ threshold: 0 });
    const [newFangCityRef, newFangCityRefInView] = useInView({ threshold: 0 });

    useEffect(() => {
        meetInView ? document.querySelector('.section-copy').classList.add('slideInLeft') : null;
    }, [meetInView]);

    useEffect(() => {
        fangAvatarRefInView ? document.querySelector(".fang-img-area").classList.add('zoomingIn') : null;
    }, [fangAvatarRefInView])

    useEffect(() => {
        newFangCityRefInView ? document.querySelector("#fanggrid").classList.add('slideInRight') : null;
    }, [newFangCityRefInView])

    return (
        <section id="meet">
            <div>
                <div className="section-copy purple-bg" ref={meetRef}>
                    <div className='copy-wrap'>
                        <h2>MEET THE <span className="gold">FANG GANG</span>.</h2>
                        <button className='section-button'>JOIN</button>
                        <button className='section-button'>VISIT</button>
                        <p className='section-p'>
                            The Fang Gang comes out at night to throw parties, hang around in dark alleys and have fun on the streets of New Fang City.
                        </p>
                        <p className='section-p'>
                            What started as a character built for digital collectibles has grown to be somuch more. They love streetwear, a tight-knit community, music and art. All of which has been established within the Awoo Studios ecosystem.
                        </p>
                    </div>
                </div>
                <div className="fang-img-area" ref={fangAvatarRef}>
                    <img src={'./images/mascot.png'} width="196px" height="179px" />
                    <img src={'./images/logoNoHash.png'} width="196px" height="179px" />
                </div>
            </div>
            <img id="fanggrid" ref={newFangCityRef} src={"./images/fanggrid.png"} />
        </section>
    )
}

export default MeetSection;