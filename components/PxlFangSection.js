import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


import Drawer from './Drawer';

const PxlFangsSection = (props) => {

    const [fangsterToCheckClaim, setFangsterToCheckClaim]     = useState('');
    const [userFangs, setUserFangs]                           = useState([]);
    const [toggledForClaimTokens, setToggledForClaimedTokens] = useState([]);
    const [unclaimedFangs, setUnclaimedFangs]                 = useState([]);
    const [drawerActive, setDrawerActive] = useState(false);
    //for the animation that bounces the avatar
    const [pxlFangAvatarRef, pxlFangAvatarRefInView] = useInView({ threshold: 0 });

    

    // handle input change for claim checker
    const handleClaimCheckChange = (event) => {
        setFangsterToCheckClaim(event.target.value)
    }

    const handleSelectMax = () => {
        setToggledForClaimedTokens(unclaimedFangs)
    }

    const handleUnselectAll = () => {
        setToggledForClaimedTokens([]);
    }

    //hide drawer when the user clicks arrow on bottom of drawer
    const handleDrawerHide = () => {
        setDrawerActive(false)
    }

    //adds fangster ids to an array for claiming
    //if it's already in the array, it removes it
    const toggleForClaim = (fangId) => {
        if (toggledForClaimTokens.includes(fangId)) {
            console.log('removing token...')
            let arr = toggledForClaimTokens.filter(id => id != fangId);
            setToggledForClaimedTokens(arr);
        } else {
            console.log('adding token...')
            let arr = [...toggledForClaimTokens, fangId]
            setToggledForClaimedTokens(arr);
        }
    }


    useEffect(() => {
        pxlFangAvatarRefInView ? document.querySelector('.px-fang-img-area').classList.add('zoomingIn') : null
    }, [pxlFangAvatarRefInView]);

    useEffect(() => {
        let unclaimed = userFangs.filter(fangster => fangster.claimed == false);
        setUnclaimedFangs(unclaimed);
    }, [userFangs.length])


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
                drawerActive={drawerActive} 
                userFangs={userFangs}
                unclaimedFangs={unclaimedFangs}
                fangsterToCheckClaim={fangsterToCheckClaim}
                setUserFangs={setUserFangs}
                toggleForClaim={toggleForClaim}
                handleDrawerHide={handleDrawerHide}
                handleClaimCheckChange={handleClaimCheckChange}
                web3={props}
            />
        </section>
    )
}


export default PxlFangsSection;