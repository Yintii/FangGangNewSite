import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const NavComponent = () => {
    return (
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

export default NavComponent;