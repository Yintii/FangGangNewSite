import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { ethers } from 'ethers'

import PxlABI from '../artifacts/contracts/PxlFangs.sol/PxlFangs.json'


const PxlFangsSection = ({
    userFangs, isConnected, alchemy, 
    address, PXL_FANGS_CONTRACT_ADDRESS, FANG_GANG_CONTRACT_ADDRESS,
    setUserFangs,toggledForClaimTokens, setToggledForClaimedTokens
}) => {

    //the fangster we're going to check if it's claimed from the form
    const [fangsterToCheckClaim, setFangsterToCheckClaim] = useState('');

    //for the animation that bounces the avatar
    const [pxlFangAvatarRef, pxlFangAvatarRefInView] = useInView({ threshold: 0 });

    const [unclaimedFangs, setUnclaimedFangs] = useState([]);

    const [drawerActive, setDrawerActive] = useState(false);
    const [pxClaimActive, setPxClaimActive] = useState(false);
    const [pxPlayActive, setPxPlayActive] = useState(false);

    //handle input change for claim checker
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

    //inital function that grabs all of the fangsters from the connected wallet
    async function getFangstersFromWallet() {
        if (!isConnected) {
            connect();
        } else {
            const data = await alchemy.nft.getNftsForOwner(address)
            let fangsters = data
                .ownedNfts
                .filter(nft => nft.contract.address == FANG_GANG_CONTRACT_ADDRESS)

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(PXL_FANGS_CONTRACT_ADDRESS, PxlABI.abi, signer);

            let _data = fangsters.map(async (fang) => {
                let claimed = await contract.claimed(fang.tokenId);
                return { ...fang, claimed }
            })

            fangsters = await Promise.all(_data);
            //uncomment to see data on fangs
            // fangsters.forEach(fang => console.log(fang));
            setUserFangs(fangsters);
        }

    }

    async function checkFangster() {

        if (fangsterToCheckClaim > 8887 || fangsterToCheckClaim < 0) {
            alert("you've entered an invalid id, please try something between 0 and 8887");
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(PXL_FANGS_CONTRACT_ADDRESS, PxlABI.abi, signer);
        const [acc] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(acc);
        const claimed = await contract.claimed(fangsterToCheckClaim);


        // console.log(claimed)
        if (claimed) {
            alert('already claimed');
        } else {
            alert('Ready to be claimed');
        }
    }



    const RenderFangsters = () => {
        if (userFangs) {
            let fangsters = userFangs.map(fang => {
                if (fang.claimed) {
                    return (
                        <div key={`fang-${fang.tokenId}`}>
                            <div className='already-claimed'>
                                <p className='claimed-text'>CLAIMED</p>
                            </div>
                            <img src={fang.rawMetadata.image} />
                        </div>
                    )
                } else {
                    return (
                        <>
                            <img
                                key={`fang-${fang.tokenId}`}
                                onClick={() => toggleForClaim(fang.tokenId)}
                                src={fang.rawMetadata.image}
                                className={toggledForClaimTokens.includes(fang.tokenId) ? 'selected-for-claim' : 'claimable'}
                            />
                        </>
                    )
                }
            })
            return fangsters
        } else {
            return
        }
    }



    useEffect(() => {
        pxlFangAvatarRefInView ? document.querySelector('.px-fang-img-area').classList.add('zoomingIn') : null
    }, [pxlFangAvatarRefInView]);

    useEffect(() => {
        let unclaimed = userFangs.filter(fangster => fangster.claimed == false);
        setUnclaimedFangs(unclaimed);
    }, [userFangs.length])

    useEffect(()=>{
        getFangstersFromWallet();
    }, [])


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
                                onClick={() => getFangstersFromWallet()}
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


            <div
                id="dropdowns"
            >
                <div id="claim">
                    <div id="claim-header">
                        <h2 className="black">CLAIM YOUR PXLFANGSTER.</h2>
                        <input
                            value={fangsterToCheckClaim}
                            type="number"
                            placeholder="8888"
                            onChange={(event) => handleClaimCheckChange(event)}
                            min={0}
                            max={8887}
                        />
                        <input
                            type="button"
                            value="CHECK CLAIM STATUS"
                            onClick={() => checkFangster()}
                        />
                    </div>
                    <div id="current_fangs" style={{ display: userFangs ? 'flex' : 'none' }}>
                        <RenderFangsters />
                    </div>
                    {userFangs && (
                        <div id="claim-options">
                            <div>
                                <button
                                    onClick={() => handleSelectMax()}
                                >
                                    SELECT MAX ({unclaimedFangs.length})
                                </button>
                                <button
                                    onClick={() => handleUnselectAll()}
                                >
                                    UNSELECT ALL
                                </button>
                            </div>
                            <button
                                disabled={unclaimedFangs.length > 0 ? false : true}
                                className={
                                    unclaimedFangs.length == 0 || toggledForClaimTokens.length == 0 ? 'none-to-claim' : 'some-to-claim'}
                            >
                                CLAIM
                            </button>

                        </div>
                    )

                    }
                </div>
                <div id="play" hidden>

                </div>
                <img
                    id="pxl-arrow"
                    src="./images/pxlfangarrow.png"
                    width="103px"
                    height='69px'
                    onClick={() => handleDrawerHide()}

                />
            </div>


        </section>
    )
}


export default PxlFangsSection;