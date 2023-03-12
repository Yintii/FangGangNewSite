import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const NewFangCity = () => {


    const Tram = ({ placement }) => {
        const [tramRef, tramRefInView] = useInView({ threshold: 0 });

        useEffect(() => {
            tramRefInView ? document.querySelector(".tram-img-area").classList.add('zoomingIn') : null;
        }, [tramRefInView])

        return(
            <div className={ placement == 'desktop' ? 'desktop tram-img-area' : 'mobile tram-img-area'} ref={tramRef}>
                <img src={'./images/tram.png'} width="196px" height="179px" />
            </div>
        )
    } 

    return (
        <section id="newFangCity">
            <div>
                <div className="section-copy purple-bg">
                    <div className='copy-wrap'>
                        <h2>TAKE A TRIP TO
                            <span className="gold"> NEW FANG CITY</span>.
                        </h2>
                        <Tram placement={'mobile'}/>
                        <div className='copy-btns'>
                            <button className='section-button'>VISIT</button>
                            <button className='section-button'>$AWOO</button>
                        </div>
                        <p className='section-p'>
                            Join the Fangsters on the streets of New Fang City. It’s our very own microverse where we connect, enjoy special events, hang out and spend the $AWOO ecosystem token on fun features.
                        </p>
                        <p className='section-p'>
                            You can also manage your $AWOO in the bank and gear up your Fangsters in cosmetic traits in the WLDFNGZ building.
                        </p>
                    </div>
                </div>
                <Tram placement={'desktop'} />
            </div>
            <img id="NFC" src={"./images/newFangCity.png"} />
        </section>
    )
}

export default NewFangCity;