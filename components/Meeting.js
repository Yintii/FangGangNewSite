import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

const MeetSection = () => {

    const [meetRef, meetInView] = useInView({ threshold: 0 })
    const [fangAvatarRef, fangAvatarRefInView] = useInView({ threshold: 0 });
    const [newFangCityRef, newFangCityRefInView] = useInView({ threshold: 0 });

    useEffect(() => {
        meetInView ? document.querySelector('#meet-copy').classList.add('slideInLeft') : null;
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
                <div id="meet-copy" ref={meetRef} className="purple-bg">
                    <div id="meet-wrap">
                        <h2>MEET THE <span className="gold">FANG GANG</span>.</h2>
                        <button>JOIN</button>
                        <button>VISIT</button>
                        <p>
                            The Fang Gang comes out at night to throw parties, hang around in dark alleys and have fun on the streets of New Fang City.
                        </p>
                        <p>
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