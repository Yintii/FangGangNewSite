import React, { useRef, useEffect,useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FangBtn } from './FangBtn';

const NavComponent = () => {

    const [revealed, setRevealed] = useState(false);

    const joinDropDownRef = useRef(null);
    const fangBtnRef      = useRef(null);
    const pxlBtnRef       = useRef(null);


    function handleRevealNav(){
        setRevealed(!revealed)
        if (revealed) {
            setRevealed(!revealed);
            document.querySelector('#mobile-navigation').classList.add('droppingDown')
            setTimeout(() => {
                document.querySelector('#mobile-navigation').classList.add('hidden');
            }, 1000)
        } else {
            setRevealed(!revealed);
            document.querySelector('#mobile-navigation').classList.add('hidden');
        }
    }

    function toggleJoin(){
        if(joinDropDownRef.current.style.display == 'none'){
            joinDropDownRef.current.style.display = 'block';
        }else{
            joinDropDownRef.current.style.display = 'none'

        }
    }


    useEffect(() => {
        document.querySelector('#mobile-navigation').classList.add('hidden');
    }, []);

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
                className='yellow-bg'
                onClick={() => handleRevealNav()}
                src={revealed ? '/images/menu-x.svg' : '/images/menu.svg'}
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
                        onClick={toggleJoin}
                    >
                        <div>JOIN</div>

                    </div>
                    <FangBtn 
                        label={<FontAwesomeIcon icon={faTwitter} />} 
                        linkTo="https://twitter.com/FangGangNFT"
                        extraClasses="yellow-bg"
                    />
                </div>
                <div
                    id="join-drop-down"
                    className='yellow-bg'
                    ref={joinDropDownRef}
                    style={{display: 'none'}}
                >

                <div id="join-drop-wrap">
                        <a ref={fangBtnRef} href="https://opensea.io/collection/fanggangnft" className='mascot-head' target="_blank">
                            <Image src='/images/mascot_fanggang_head.png' width={45} height={41} /> Fang Gang
                        </a>
                        <a ref={pxlBtnRef} href="https://opensea.io/collection/pxlfangs" className='mascot-head' target="_blank">
                            <Image src='/images/mascot_pxlfangs_head.png' width={43} height={39} /> PxlFangs
                        </a>
                </div>

                </div>
            </div>



            <div id='mobile-navigation' className={revealed ? 'droppingDownNav' : 'closingUpNav'} >
                <div id="nav-menu">
                    <Link href="#meet">FANG GANG</Link>
                    <Link href="#pxlfangs">PXLFANGS</Link>
                    <Link href="#gear">WLDFNGS</Link>
                </div>

                <div id="nav-buttons">
                    <a href="https://opensea.io/collection/fanggangnft" className='yellow-bg' target="_blank">
                        JOIN FANG GANG
                        <Image src='/images/mascot_fanggang_head.png' width={45} height={41} />
                    </a>
                    <a  href="https://opensea.io/collection/pxlfangs" className='yellow-bg' target="_blank">
                        JOIN PXLFANGS
                        <Image src='/images/mascot_pxlfangs_head.png' width={43} height={39} />
                    </a>
                    <a href="https://twitter.com/FangGangNFT" className='yellow-bg' target="_blank">FOLLOW US<FontAwesomeIcon id="twitter-icon" icon={faTwitter} /></a>
                </div>
            </div>
        </nav>
    )
}

export default NavComponent;