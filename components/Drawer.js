import { useEffect } from 'react';
import { ethers } from 'ethers'

import PxlABI from '../artifacts/contracts/PxlFangs.sol/PxlFangs.json'

const Drawer = ({ 
    drawerActive, handleDrawerHide, fangsterToCheckClaim,
    userFangs, unclaimedFangs, handleClaimCheckChange, web3,
    setUserFangs, toggleForClaim
}) => {

    const {
        isConnected, 
        alchemy, 
        address, 
        FANG_GANG_CONTRACT_ADDRESS, 
        PXL_FANGS_CONTRACT_ADDRESS 
    } = web3;

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


    useEffect(() => {
        getFangstersFromWallet();
    }, [isConnected])


    return (
        <div
            id="dropdowns"
            className={drawerActive ? '' : 'hidden'}
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
                    {/* <RenderFangsters /> */}
                    {userFangs.map(fang => {
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

                    }
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
                            onClick={() => setDrawerActive()}
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
    )
};


export default Drawer;