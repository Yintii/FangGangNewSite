import { useEffect, useState } from 'react';
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

    const RenderFangsters = () => {
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
        document.getElementById('claim-drop-down').scrollIntoView({behavior: 'smooth'});
    }, [claimDrawerActive])


    return (
        <div id="claim-drop-down" className={claimDrawerActive ? 'droppingDown' : 'closingUp'}>
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
                            onClick={() => handleToggleClaimDrawer()}
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
                className="pxl-arrow"
                src="./images/pxlfangarrow.png"
                width="103px"
                height='69px'
                onClick={() => handleToggleClaimDrawer()}
            />
        </div>
    )
};


export default ClaimDrawer;