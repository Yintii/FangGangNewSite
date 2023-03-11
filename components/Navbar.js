import React, { useRef, useEffect,useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavComponent = () => {

    const [revealed, setRevealed] = useState(false);
    
    const navRef = useRef();

    function handleRevealNav(){
        setRevealed(!revealed)
    }


    useEffect(() => {
        if(window.innerWidth <= 767){
            console.log("the ref", navRef)
        }
    }, [window.innerWidth]);

    return (
        <nav>
            <img
                id="brand"
                src={"./images/logo_fanggang_navbar.png"}
                alt="FangGang Copyright Awoo Studios"
            />
            <img 
                id='hamburger-menu' 
                src={revealed ? './images/xmenu.png' : './images/menu.png'}
                onClick={() => handleRevealNav()}
            />     
            <div id='desk-navigation' >
                <div id="nav-menu">
                    <Link href="#meet">FANG GANG</Link>
                    <Link href="#pxlfangs">PXLFANGS</Link>
                    <Link href="#gear">WLDFNGS</Link>
                </div>

                <div id="nav-buttons">
                    <button>
                        JOIN
                    </button>
                    <a href="https://twitter.com/FangGangNFT" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
            <div id='mobile-navigation' className={revealed ? '' : 'hidden'} >
                <div id="nav-menu">
                    <Link href="#meet">FANG GANG</Link>
                    <Link href="#pxlfangs">PXLFANGS</Link>
                    <Link href="#gear">WLDFNGS</Link>
                </div>

                <div id="nav-buttons">
                    <button>
                        JOIN
                    </button>
                    <a href="https://twitter.com/FangGangNFT" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </nav>
    )
}

export default NavComponent;