import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavComponent = () => {
    return (
        <nav>
            <img
                id="brand"
                src={"./images/logo_fanggang_navbar.png"}
                alt="FangGang Copyright Awoo Studios"
            />
            <img id='hamburger-menu' src='./images/menu.png' />
            <div id='navigation'>
                <div id="nav-menu">
                    <Link href="#meet">FANG GANG</Link>
                    <Link href="#pxlfangs">PXLFANGS</Link>
                    <Link href="#gear">WLDFNGS</Link>
                </div>

                <div id="nav-buttons">
                    <button>
                        JOIN
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavComponent;