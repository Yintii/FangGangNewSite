import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavComponent = () => {
    return (
        <nav>
                <div id='brand-wrap'>
                    <img
                        id="brand"
                        src={"./images/fangganglogo.png"}
                        alt="FangGang Copyright Awoo Studios"
                    />
                    <img src='./images/menu.png' />
                </div>
                <div id='navigation'>
                    <ul id="nav-menu">
                        <li>FANG GANG</li>
                        <li>PXLFANGS</li>
                        <li>WLDFANGS</li>
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