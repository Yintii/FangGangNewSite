import Link from 'next/link';
import React, { useState } from 'react'

import { Tos } from './Tos';
import { PurchaseAndLicensing } from './PandL';


const Footer = () => {

  let year = new Date;

  const [showTos, setShowTos] = useState(false);
  const [showPandL, setShowPandL] = useState(false);

  return (
    <>  
      <Tos 
        hidden={showTos}
        setShowTos={setShowTos}
      />
      <PurchaseAndLicensing
        hidden={showPandL}
        setShowPandL={setShowPandL}
      />
      <footer>
        <div id='socials'>
          <a href='https://twitter.com/FangGangNFT' target="_blank">
            <img src='/images/icon_twitter.svg' />
          </a>
          <a href='https://discord.gg/fanggang' target="_blank">
            <img src='/images/icon_discord.svg' />
          </a>
          <a href='https://www.instagram.com/fanggangnfts/' target="_blank">
            <img src='/images/icon_instagram.svg' />
          </a>
          <a href="https://opensea.io/collection/fanggangnft" target="_blank">
            <img src='/images/icon_opensea.svg' />
          </a>
          <a href="mailto:fanggang@awoostudios.com">
            <img src='/images/icon_mail.svg' />
          </a>
        </div>
        <img id='poap' src='/images/fangster_footer.png' widht='269px' height='108px' />
        <div id='copyright'>
          <h4>
            ©<span id="copyright-year">{year.getFullYear()} <br className='mobile' /> <img src="./images/awoostudios.svg" /></span>
          </h4>
          <span onClick={() => setShowTos(true)}>Terms of Use and Conditions</span><br />
          <span onClick={() => setShowPandL(true)}>Purchase and License Agreement</span>
        </div>
      </footer>
    </>
  )
}

export default Footer;