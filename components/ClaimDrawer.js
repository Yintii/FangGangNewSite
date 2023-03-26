import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ethers } from 'ethers'

import PxlABI from '../artifacts/contracts/PxlFangs.sol/PxlFangs.json'

const ClaimDrawer = ({ web3, handleToggleClaimDrawer, claimDrawerActive}) => {

    const {
        isConnected, alchemy, address, connect,
        FANG_GANG_CONTRACT_ADDRESS, PXL_FANGS_CONTRACT_ADDRESS,
    } = web3;

    const [fangsterToCheckClaim, setFangsterToCheckClaim] = useState('');
    const [userFangs, setUserFangs] = useState([]);
    const [toggledForClaimTokens, setToggledForClaimedTokens] = useState([]);
    const [unclaimedFangs, setUnclaimedFangs] = useState([]);

    const [isClaimable, setIsClaimable] = useState(null);


    const AvailableFangsterText = () => {
        return <h3 className='available-text'>PxlFangster {fangsterToCheckClaim} is available for claim!</h3>
    }

    const UnavailableFangsterText = () => {
        return <h3 className='unavailable-text'>PxlFangster {fangsterToCheckClaim} is no longer available for claim.</h3>
    }
    

    const fangLoader = ({ src }) => {
        return `https://fanggang.s3.us-east-2.amazonaws.com/img/${src}`;
    } 


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



    //need to edit this to show a better message
    //[need to edit]
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

        if (claimed) {
            setIsClaimable(false);
        } else {
            setIsClaimable(true);
        }
    }

    // handle input change for claim checker
    const handleClaimCheckChange = (event) => {
        setFangsterToCheckClaim(event.target.value)
    }

    const handleSelectMax = () => {
        let all = unclaimedFangs.map(each => each.tokenId)
        setToggledForClaimedTokens(all);
    }

    const handleUnselectAll = () => {
        setToggledForClaimedTokens([]);
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

    const handlePxlClaims = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(PXL_FANGS_CONTRACT_ADDRESS, PxlABI.abi, signer);

        try {
            await contract.claimToken(toggledForClaimTokens);
            alert("Successfully Claimed pxl fangs")
        } catch (error) {
            console.error("There was an error during claim: ", error);
        }

    }
  
    const RenderFangsters = () => {
        let fangsters = userFangs.map(fang => {
            if (fang.claimed) {
                return (
                    <div key={`fang-${fang.tokenId}`}>
                        <div className='already-claimed'>
                            <p className='claimed-text'>CLAIMED</p>
                        </div>
                        <Image 
                            key={`fang-${fang.tokenId}`}
                            loader={fangLoader}
                            src={`${fang.tokenId}.png`}
                            width={250}
                            height={250}
                        />
                    </div>
                )
            } else {
                return (
                    <>
                        <Image
                            key={`fang-${fang.tokenId}`}
                            onClick={() => toggleForClaim(fang.tokenId)}
                            src={`${fang.tokenId}.png`}
                            loader={fangLoader}
                            className={toggledForClaimTokens.includes(fang.tokenId) ? 'selected-for-claim' : 'claimable'}
                            width={250}
                            height={250}
                        />
                    </>
                )
            }
        })
        return fangsters;
        
    }


    useEffect(() => {
        getFangstersFromWallet();
    }, [isConnected])


    useEffect(() => {
        let unclaimed = userFangs.filter(fangster => fangster.claimed == false);
        setUnclaimedFangs(unclaimed);
    }, [userFangs.length])

    useEffect(()  => {
        claimDrawerActive ? document.getElementById('claim-drop-down').scrollIntoView({behavior: 'smooth'}) : null;
    }, [claimDrawerActive])


    return (
        <div id="claim-drop-down" className={claimDrawerActive ? 'droppingDown' : 'closingUp'}>
            <div className='drawer-x-btn' onClick={() => handleToggleClaimDrawer()}>
                <span>x</span>
            </div>
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
                    {isClaimable &&
                        <AvailableFangsterText />
                    }

                    {!isClaimable && isClaimable != null &&
                        <UnavailableFangsterText />
                    }



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
                            onClick={() => handlePxlClaims()}
                        >
                            CLAIM
                        </button>

                    </div>
                )

                }
            </div>
            <Image
                className="pxl-arrow"
                src="/images/pxlfangarrow.png"
                width={103}
                height={69}
                onClick={() => handleToggleClaimDrawer()}
            />
        </div>
    )
};


export default ClaimDrawer;