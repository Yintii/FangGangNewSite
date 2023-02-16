import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


import Drawer from './Drawer';

const PxlFangsSection = (props) => {


    const [drawerActive, setDrawerActive] = useState(false);

    const [pxlFangAvatarRef, pxlFangAvatarRefInView] = useInView({ threshold: 0 });

    useEffect(() => {
        pxlFangAvatarRefInView ? document.querySelector('.px-fang-img-area').classList.add('zoomingIn') : null
    }, [pxlFangAvatarRefInView]);

    return (
        <section id="pxlfangs">
            <div id='px-wrapper'>
                <div id="px-top">
                    <div id="pxl-copy">
                        <h1>RUN WITH THE <span className="gold">PXLFANGS</span>.</h1>
                        <div id="pxl-buttons">
                            <button className="gold-bg">JOIN</button>
                            <button
                                className="gold-bg"
                                onClick={() => setDrawerActive(true)}
                            >
                                CLAIM
                            </button>
                            <button className="gold-bg">PLAY</button>
                        </div>
                        <p>
                            To expand the Fangverse we introduced PxlFangs, a first of its kind pixelated side collection. Every Fangster has a PxlFangster attached, claimable for free.
                        </p>
                        <p>
                            With PxlFangs you’ll get access to exclusive skins in some of the most popular metaverse projects, passive $AWOO income and more.
                        </p>
                        <p>
                            To accompany this expansion we also released the arcade game Fang Runner.
                        </p>

                    </div>
                     <div className="px-fang-img-area" ref={pxlFangAvatarRef}>
                        <img src="./images/superpxlmascot.png" alt="pxlfang mascot" />
                        <img src="./images/px-fang-copy-logo.png" alt="pxlfang mascot" />
                    </div>

                </div>
                <div id="px-bottom">
                    <img id="city-img" src="./images/pxlrunner.png" width="610px" />
                    <img id="game-case" src="./images/game-case.png" width="246px" />
                </div>
                <img id="fangrunner-runs-to-left" src="./images/fangrun.gif" />

            </div>
            <Drawer 
                setDrawerActive={setDrawerActive}
                drawerActive={drawerActive}
                web3={props}
            />
        </section>
    )
}


export default PxlFangsSection;