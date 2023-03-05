import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavComponent = () => {
    return (
        <nav>
            <img
                id="brand"
                src={"./images/fangganglogo.png"}
                alt="FangGang Copyright Awoo Studios"
            />
            <img id='hamburger-menu' src='./images/menu.png' />
            <div id='navigation'>
                <ul id="nav-menu">
                    <li>FANG GANG</li>
                    <li>PXLFANGS</li>
                    <li>WLDFNGS</li>
                </ul>

                <div id="nav-buttons">
                    <button>
                        Join
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