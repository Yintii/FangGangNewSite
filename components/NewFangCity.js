import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const NewFangCity = () => {

    const [TATRef, TATRefInView] = useInView({ threshold: 0 })
    const [barracadeLogoRef, barracadeLogoInView] = useInView({ threshold: 0 });
    const [NFCRef, NFCRefInView] = useInView({ threshold: 0 });

    useEffect(() => {
        TATRefInView ? document.querySelector('.section-copy').classList.add('slideInLeft') : null;
    }, [TATRefInView]);

    useEffect(() => {
        barracadeLogoInView ? document.querySelector(".fang-img-area").classList.add('zoomingIn') : null;
    }, [barracadeLogoInView])

    useEffect(() => {
        NFCRefInView ? document.querySelector("#NFC").classList.add('slideInRight') : null;
    }, [NFCRefInView])

    return (
        <section id="newFangCity">
            <div>
                <div className="section-copy purple-bg" ref={TATRef}>
                    <div className='copy-wrap'>
                        <h2>TAKE A TRIP TO
                            <span className="gold"> NEW FANG CITY</span>.
                        </h2>
                        <button className='section-button'>VISIT</button>
                        <button className='section-button'>$AWOO</button>
                        <p className='section-p'>
                            Join the Fangsters on the streets of New Fang City. It’s our very own microverse where we connect, enjoy special events, hang out and spend the $AWOO ecosystem token on fun features.
                        </p>
                        <p className='section-p'>
                            You can also manage your $AWOO in the bank and gear up your Fangsters in cosmetic traits in the WLDFNGZ building.
                        </p>
                    </div>
                </div>
                <div className="barracade-img-area" ref={barracadeLogoRef}>
                    <img src={'./images/barracade.png'} width="196px" height="179px" />
                </div>
            </div>
            <img id="NFC" ref={NFCRef} src={"./images/newFangCity.png"} />
        </section>
    )
}

export default NewFangCity;