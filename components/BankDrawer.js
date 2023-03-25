import React, { useEffect } from 'react';
import Image from 'next/image'
function BankDrawer({ bankActive, handleBankToggle }) {
    
    useEffect(() => {
        bankActive ? document.getElementById('bank-drop-down').scrollIntoView({ behavior: 'smooth' }) : null;
    }, [bankActive])
    
    return (
        <div id="bank-drop-down" className={bankActive ? 'droppingDown' : 'closingUp'}>
            <div className='drawer-x-btn' onClick={() => handleBankToggle()}>
                <span>x</span>
            </div>
            <h3>STACK $AWOO, UNLOCK PERKS.</h3>
            <p>
                Simply by holding a Fangster or PxlFangster you are passively earning the $AWOO ecosystem token. This token can be used on fun features such as upgrading your PxlFangsters or during special events.
            </p>
            <div className="copy-btns center-stuff">
                <Image id="awootoken" src="/images/awootoken.gif" width={76} height={76} />
                <a href="https://medium.com/@fang_gang/the-awoo-token-8aea4798059b" target="_blank" className="section-button purple-bg">LEARN MORE</a>
            </div>
            <Image
                className="bank-arrow"
                src="/images/pxlfangarrow.png"
                width={103}
                height={69}
                onClick={() => handleBankToggle()}
            />
        </div>
      
    );
}

export default BankDrawer;
