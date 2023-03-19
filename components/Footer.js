import Link from 'next/link';
import Image from 'next/image'
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
            <Image src='/images/icon_twitter.svg' width={43} height={35} />
          </a>
          <a href='https://discord.gg/fanggang' target="_blank">
            <Image src='/images/icon_discord.svg' width={43} height={35} />
          </a>
          <a href='https://www.instagram.com/fanggangnfts/' target="_blank">
            <Image src='/images/icon_instagram.svg' width={43} height={35} />
          </a>
          <a href="https://opensea.io/collection/fanggangnft" target="_blank">
            <Image src='/images/icon_opensea.svg' width={43} height={35} />
          </a>
          <a href="mailto:fanggang@awoostudios.com">
            <Image src='/images/icon_mail.svg' width={43} height={35} />
          </a>
        </div>
        <Image id='poap' src='/images/fangster_footer.png' width={269} height={108} />
        <div id='copyright'>
          <h4>
            ©<span id="copyright-year">{year.getFullYear()} <br className='mobile' /> <Image src="./images/awoostudios.svg" width={184} height={23} /></span>
          </h4>
          <span onClick={() => setShowTos(true)}>Terms of Use and Conditions</span><br />
          <span onClick={() => setShowPandL(true)}>Purchase and License Agreement</span>
        </div>
      </footer>
    </>
  )
}

export default Footer;