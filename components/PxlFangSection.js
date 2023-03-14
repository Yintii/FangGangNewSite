import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


import ClaimDrawer from './ClaimDrawer';
import FangRunner from './FangRunnerDrawer';

const PxlFangsSection = (props) => {


    const [claimDrawerActive, setClaimDrawerActive] = useState(false);
    const [fangRunnerActive, setFangRunnerActive] = useState(false);

    const handleToggleClaimDrawer = () => {
        if(fangRunnerActive){
            setFangRunnerActive(false);
            setTimeout(()=>{
                document.querySelector('#game-drop-down').classList.add('hidden');
                setClaimDrawerActive(true);
            }, 1000)
        }else if(claimDrawerActive == false){
            setClaimDrawerActive(true);
        }

        if(claimDrawerActive){
            setClaimDrawerActive(false);
            setTimeout(()=>{
                document.querySelector('#claim-drop-down').classList.add('hidden')
            },1000)
        }
    }

    const handleToggleFangRunnerDrawer = () => {
        if (claimDrawerActive) {
            setClaimDrawerActive(false);
            setTimeout(() => {
                document.querySelector('#claim-drop-down').classList.add('hidden');
                setFangRunnerActive(true);
            }, 1000)
        } else if (fangRunnerActive == false) {
            setFangRunnerActive(true);
        }

        if(fangRunnerActive){
            setFangRunnerActive(false);
            setTimeout(()=>{
                document.querySelector('#game-drop-down').classList.add('hidden');
            },1000)
        }
    }

    const PxlMascot = ({ placement }) => {
        const [pxlFangAvatarRef, pxlFangAvatarRefInView] = useInView({ threshold: 0 });
        useEffect(() => {
            pxlFangAvatarRefInView ? document.querySelector('.px-fang-img-area > img').classList.add('toaster-pop-up') : null
        }, [pxlFangAvatarRefInView]);
        return(
            <div className={placement == 'desktop' ? 'outter-img-wrap desktop' : 'outter-img-wrap mobile'}>
                <img id="musicfang" src="./images/musicfang.gif" />
                <div className="px-fang-img-area" ref={pxlFangAvatarRef}>
                    <img src="./images/superpxlmascot.png" alt="pxlfang mascot" width="200px" height="200px" />
                </div>
                <img className='logo' src="./images/px-fang-copy-logo.png" alt="pxlfang mascot" />
            </div>
        );
    }

    useEffect(() => {
        document.querySelector('#game-drop-down').classList.add('hidden');
        document.querySelector('#claim-drop-down').classList.add('hidden');
    },[])


    return (
        <section id="pxlfangs">
            <div id='px-wrapper'>
                <div id="px-top">
                    <div id="pxl-copy">
                        <h1>RUN WITH THE <span className="gold">PXLFANGS</span>.</h1>
                        <PxlMascot placement={'mobile'} />
                        <div className="copy-btns">
                            <button className="gold-bg section-button">JOIN</button>
                            <button
                                className="gold-bg section-button"
                                onClick={() => handleToggleClaimDrawer()}
                            >
                                CLAIM
                            </button>
                            <button 
                                className="gold-bg section-button"
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
                    
                    <PxlMascot placement={'desktop'}/>
                </div>
                <img id="pxl-clock" src="./images/pxlclock.gif" />
                <img id="brain" src="./images/pxl_brain.gif" />
                <img id="fangrunner-runs-to-left" src="./images/fangrun.gif" />
                <img id="smallDiamond-left" src="./images/pxl_smalldiamond.gif" />
                <img id="smallDiamond-middle" src="./images/pxl_smalldiamond.gif" />
                <img id="smallDiamond-right" src="./images/pxl_smalldiamond.gif" />
                <img id="bigDiamond-left" src="./images/big-diamond.gif" />
                <img id="bigDiamond-right" src="./images/big-diamond.gif" />
                <img id="icecream-fangster" src="./images/icecreamfang.gif" width="95px" height="106px"/>
                <img id="sidewalk" className='desktop' src="./images/sidewalk.png" />
            </div>
            
            <div className="drawers-wrapper">
                <ClaimDrawer
                    handleToggleClaimDrawer={handleToggleClaimDrawer}
                    claimDrawerActive={claimDrawerActive}
                    web3={props}
                />
                <FangRunner
                    handleToggleFangRunnerDrawer={handleToggleFangRunnerDrawer}
                    fangRunnerActive={fangRunnerActive}
                />
            </div>
        </section>
    )
}


export default PxlFangsSection;