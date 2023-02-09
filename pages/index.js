import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from '@wagmi/core'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()



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
                <img id="groupPhoto" src={'images/groupphoto.png'} width="1179px" />
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
            newFangCityRefInView ? document.querySelector("#newFangCity-img").classList.add('slideInRight') : null;
        }, [newFangCityRefInView])

        return(
            <section id="meet">
                <div>
                    <div id="meet-copy" ref={meetRef}  className="purple-bg">
                        <div id="meet-wrap">
                            <h2>MEET THE <span className="gold">FANG GANG</span>.</h2>
                            <button>VISIT</button>
                            <p>Join the Fangsters on the streets of New Fang City, our very own microverse where we connect, enjoy special
                                events,
                                hang out and spend the $AWOO ecosystem token.</p>
                        </div>
                    </div>
                    <div className="fang-img-area" ref={fangAvatarRef}>
                        <img src={'./images/mascot.png'} width="196px" height="179px" />
                    </div>
                </div>
                <img id="newFangCity-img" ref={newFangCityRef} src={"./images/newFangCity.png"} />
            </section>
        )
    }
    const PxlFangsSection = () => {

        const [pxlFangAvatarRef, pxlFangAvatarRefInView] = useInView({threshold:0});

        const handleClaimClick = () => {
            if(!isConnected){
                connect()
            }
        }

        useEffect(()=>{
            pxlFangAvatarRefInView ? document.querySelector('.px-fang-img-area').classList.add('zoomingIn') : null
        }, [pxlFangAvatarRefInView]);

        return(
            <section id="pxlfangs">
                <div id="px-top">
                    <div id="pxl-copy">
                        <h1>RUN WITH THE <span className="gold">PXLFANGS</span></h1>
                        <div id="pxl-buttons">
                            <button className="gold-bg">JOIN</button>
                            <button 
                                className="gold-bg"
                                onClick={() => handleClaimClick()} 
                                >
                                CLAIM
                            </button>
                            <button className="gold-bg">PLAY</button>
                        </div>
                        <p>
                            To expand the Fangverse and enter the gaming territory we introduced PxlFangs, a first of its kind pixelated
                            side
                            collection. Every Fangster NFT has a PxlFangster attached, to be claimed for free.
                        </p>
                        <p>
                            With these PxlFangs you’ll
                            get access
                            to exclusive skins in some of the most popular metaverse projects, passive $AWOO income and much, much more.
                        </p>
                        <p>
                            To accompany this expansion we also released an arcade game; Fang Runner.
                        </p>
                        <div id="px-bottom">
                            <img id="city-img" src="./images/pxlrunner.png" width="610px" />
                            <img id="game-case" src="./images/game-case.png" width="246px" />
                        </div>
                    </div>
                    <div className="px-fang-img-area" ref={pxlFangAvatarRef}>
                        <img src="./images/pxlfang.png" width="196px" height="179px" alt="pxlfang mascot" />
                    </div>
                    {/* <img id="fangrunner-runs-to-right" src="./images/fangrun.gif" /> */}
                    <img id="fangrunner-runs-to-left" src="./images/fangrun.gif" />
                </div>
                <div id="dropdowns">
                    <div id="claim">
                        <div id="claim-header">
                            <h2 className="black">CLAIM YOUR PXLFANGSTER.</h2>
                            <input type="text" placeholder="8888" />
                            <input type="button" value="CHECK CLAIM STATUS" />
                        </div>
                        <div id="current_fangs">
                            {/**This is where we will need to 
                             * spit out the data from the users wallets about the fangsters
                             * they have
                             */}
                        


                        </div>
                    </div>
                    <div id="play" hidden>

                    </div>
                </div>
            </section>
        )
    }

  return (
<>
    <NavComponent />
    <main>
        <IntroSection />
        <MeetSection />
        <PxlFangsSection />
    </main>
</>
  )
}
