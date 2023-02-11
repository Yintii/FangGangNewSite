import { Inter } from '@next/font/google'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from '@wagmi/core'

import { Network, Alchemy } from "alchemy-sdk";


import PxlFangsSection from '@/components/PxlFangSection'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [userFangs, setUserFangs] = useState([]);

    const [toggledForClaimTokens, setToggledForClaimedTokens] = useState([]);

    const { address, isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect();

    const settings = {
        apiKey: "QVgxIPWahXBDZTW_ZvQdl-_pkMF2anDw",
        network: Network.ETH_MAINNET,
    };

    const FANG_GANG_CONTRACT_ADDRESS = '0x9d418c2cae665d877f909a725402ebd3a0742844';
    const PXL_FANGS_CONTRACT_ADDRESS = '0x30917A657Ae7d1132bdcA40187D781FA3B60002F';

    const alchemy = new Alchemy(settings);


    const NavComponent = () => {
        return(
            <nav>
                <div id="brand">
                    <img
                        src={"./images/fangganglogo.png"}
                        alt="FangGang Copyright Awoo Studios"
                        width="353px"
                    />
                    <ul id="nav-menu">
                        <li>FANG GANG</li>
                        <li>PXLFANGS</li>
                        <li>WLDFANGS</li>
                    </ul>
                </div>
                <div id="nav-buttons">
                    <button>
                        Join
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                </div>
            </nav>
        )
    }
    const IntroSection = () => {
        return(
            <section id="intro">
                <div id="intro-content">
                    <h1>THE BACKBONE OF <span className="gold">CREATIVE CULTURE</span>.</h1>
                    <span>Discover the character brand straight from New Fang City.</span>
                </div>
            </section>
        )
    }
    const MeetSection = () => {

        const [meetRef, meetInView] = useInView({ threshold: 0 })
        const [fangAvatarRef, fangAvatarRefInView] = useInView({threshold: 0});
        const [newFangCityRef, newFangCityRefInView] = useInView({threshold: 0});

        useEffect(() => {
            meetInView ? document.querySelector('#meet-copy').classList.add('slideInLeft') : null;
        }, [meetInView]);

        useEffect(() => {
            fangAvatarRefInView ? document.querySelector(".fang-img-area").classList.add('zoomingIn') : null;
        }, [fangAvatarRefInView])

        useEffect(() => {
            newFangCityRefInView ? document.querySelector("#fanggrid").classList.add('slideInRight') : null;
        }, [newFangCityRefInView])

        return(
            <section id="meet">
                <div>
                    <div id="meet-copy" ref={meetRef}  className="purple-bg">
                        <div id="meet-wrap">
                            <h2>MEET THE <span className="gold">FANG GANG</span>.</h2>
                            <button>JOIN</button>
                            <button>VISIT</button>
                            <p>
                                The Fang Gang comes out at night to throw parties, hang around in dark alleys and have fun on the streets of New Fang City.
                            </p>
                            <p>
                                What started as a character built for digital collectibles has grown to be somuch more. They love streetwear, a tight-knit community, music and art. All of which has been established within the Awoo Studios ecosystem.
                            </p>
                        </div>
                    </div>
                    <div className="fang-img-area" ref={fangAvatarRef}>
                        <img src={'./images/mascot.png'} width="196px" height="179px" />
                        <img src={'./images/logoNoHash.png'} width="196px" height="179px" />
                    </div>
                </div>
                <img id="fanggrid" ref={newFangCityRef} src={"./images/fanggrid.png"} />
            </section>
        )
    }

    useEffect(()=>{
        if(isConnected){
            console.log("Connected with: ", address);
        }
        if(!isConnected){
            connect();
        }
    },[])

  return (
    <>
        <NavComponent />
        <main>
            <IntroSection />
            <MeetSection />
            <PxlFangsSection 
                userFangs={userFangs} 
                isConnected={isConnected}
                PXL_FANGS_CONTRACT_ADDRESS={PXL_FANGS_CONTRACT_ADDRESS}
                FANG_GANG_CONTRACT_ADDRESS={FANG_GANG_CONTRACT_ADDRESS}
                alchemy={alchemy}
                address={address}
                setUserFangs={setUserFangs}
                toggledForClaimTokens={toggledForClaimTokens}
                setToggledForClaimedTokens={setToggledForClaimedTokens}
                connect={connect}
            />
        </main>
    </>
  )
}
