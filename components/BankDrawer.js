import React, { useEffect } from 'react';

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
            <div className="copy-btns center-stuff">
                <img src="/images/awootoken.gif" width="76px" />
                <button className="section-button text-white purple-bg">LEARN MORE</button>
            </div>
            <p>
                Simply by holding a Fangster or PxlFangster you are passively earningthe $AWOO ecosystem token. This token can be used on fun features such as upgrading your PxlFangsters or during special events.
            </p>
            <img id="bank-image" src="./images/newfangcity_bank.png" />
            <img
                className="bank-arrow"
                src="./images/pxlfangarrow.png"
                width="103px"
                height='69px'
                onClick={() => handleBankToggle()}
            />
        </div>
      
    );
}

export default BankDrawer;
