import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const GearSection = () => {




    const WldFngz = ({ placement }) => {
        const [wildFangLogoRef, wildFangLogoInView] = useInView({ threshold: 0 });

        useEffect(() => {
            wildFangLogoInView ? document.querySelector(".wildfang-logo-area > img").classList.add('zoomingIn') : null;
        }, [wildFangLogoInView])
        return(
            <div ref={wildFangLogoRef} className={placement == 'desktop' ? 'wildfang-logo-area desktop' : 'mobile wildfang-logo-area'} >
                <img src={'./images/wildfangslogo.png'} height="135px" width="157px" />
            </div>
        )
    }




    return (
        <section id="gear">
            <div>
                <div className="section-copy purple-bg">
                    <div className='copy-wrap'>
                        <h2>GEAR UP WITH <span className="gold">WLDFNGZ</span>.</h2>
                        <WldFngz placement={'mobile'} />
                        <div className="copy-btns">
                            <button className='section-button'>SHOP</button>
                            <button className='section-button'>FOLLOW</button>
                        </div>
                        <p className='section-p'>
                            WLDFNGZ is the streetwear brand worn by Fang Gang. From digital collectibles to the real world, we’re biting the gap between the dopest metaverse fits and real life streetwear.
                        </p>
                        <p className='section-p'>
                            Every piece of apparel is crafted with care in New Fang City.
                        </p>
                    </div>
                </div>
            </div>
            <WldFngz placement={'desktop'}/>
        </section>
    )
}

export default GearSection;