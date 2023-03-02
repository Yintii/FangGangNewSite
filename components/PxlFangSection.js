import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


import ClaimDrawer from './ClaimDrawer';
import FangRunner from './FangRunnerDrawer';

const PxlFangsSection = (props) => {


    const [claimDrawerActive, setClaimDrawerActive] = useState(false);
    const [fangRunnerActive, setFangRunnerActive] = useState(false);

    const handleToggleClaimDrawer = () => {
        if(fangRunnerActive){
            setFangRunnerActive(false)
        }
        setClaimDrawerActive(!claimDrawerActive);
    }

    const handleToggleFangRunnerDrawer = () => {
        if(claimDrawerActive){
            setClaimDrawerActive(false)
        }
        setFangRunnerActive(!fangRunnerActive);
    }


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
                                onClick={() => handleToggleClaimDrawer()}
                            >
                                CLAIM
                            </button>
                            <button 
                                className="gold-bg"
                                onClick={()=> handleToggleFangRunnerDrawer()}
                            >
                                PLAY
                            </button>
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
                <img id="fangrunner-runs-to-left" src="./images/fangrun.gif" />

            </div>
            <ClaimDrawer 
                handleToggleClaimDrawer={handleToggleClaimDrawer}
                claimDrawerActive={claimDrawerActive}
                web3={props}
            />
            <FangRunner 
                handleToggleFangRunnerDrawer={handleToggleFangRunnerDrawer}
                fangRunnerActive={fangRunnerActive}
            />
        </section>
    )
}


export default PxlFangsSection;