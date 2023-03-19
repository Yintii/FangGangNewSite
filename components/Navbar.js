import React, { useRef, useEffect,useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavComponent = () => {

    const [revealed, setRevealed] = useState(false);

    const joinTextRef = useRef(null);
    const fangBtnRef  = useRef(null);
    const pxlBtnRef   = useRef(null);
    const bgRef       = useRef(null);

    function handleRevealNav(){
        setRevealed(!revealed)
    }

    function toggleJoin(){
        joinTextRef.current.classList.toggle('hidden')
        fangBtnRef.current.classList.toggle('hidden')
        pxlBtnRef.current.classList.toggle('hidden')
        bgRef.current.classList.toggle('yellow-bg')

    }

    return (
        <nav>
            <Image
                id="brand"
                src="/images/logo_fanggang_navbar.png"
                alt="FangGang Copyright Awoo Studios"
                width={195}
                height={74}
            />
            <Image 
                id='hamburger-menu' 
                onClick={() => handleRevealNav()}
                src={revealed ? '/images/xmenu.png' : '/images/menu.png'}
                width={50}
                height={20}
            />     
            <div id='desk-navigation'>
                <div id="nav-menu">
                    <Link href="#meet">FANG GANG</Link>
                    <Link href="#pxlfangs">PXLFANGS</Link>
                    <Link href="#gear">WLDFNGZ</Link>
                </div>

                <div id="nav-buttons">
                    <div 
                        id="split-join-btn"
                        className='yellow-bg'
                        ref={bgRef}
                        onMouseEnter={toggleJoin}
                        onMouseLeave={toggleJoin}
                    >
                        <div ref={joinTextRef}>JOIN</div>
                        <a ref={fangBtnRef} href="https://opensea.io/collection/fanggangnft" className='hidden yellow-bg mascot-head' target="_blank">
                            <Image src='/images/mascot_fanggang_head.png' width={45} height={41} />
                        </a>
                        <a ref={pxlBtnRef} href="https://opensea.io/collection/pxlfangs" className='hidden yellow-bg mascot-head' target="_blank">
                            <Image src='/images/mascot_pxlfangs_head.png' width={43} height={39} />
                        </a>
                    </div>
                    <a className='yellow-bg' href="https://twitter.com/FangGangNFT" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>



            <div id='mobile-navigation' className={revealed ? '' : 'hidden'} >
                <div id="nav-menu">
                    <Link href="#meet">FANG GANG</Link>
                    <Link href="#pxlfangs">PXLFANGS</Link>
                    <Link href="#gear">WLDFNGS</Link>
                </div>

                <div id="nav-buttons">
                    <a href="https://opensea.io/collection/fanggangnft" className='yellow-bg' target="_blank">
                        <Image src='/images/mascot_fanggang_head.png' width={45} height={41} />
                        JOIN
                    </a>
                    <a  href="https://opensea.io/collection/pxlfangs" className='yellow-bg' target="_blank">
                        <Image src='/images/mascot_pxlfangs_head.png' width={43} height={39} />
                         JOIN
                    </a>
                    <a href="https://twitter.com/FangGangNFT" className='yellow-bg' target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>



        </nav>
    )
}

export default NavComponent;