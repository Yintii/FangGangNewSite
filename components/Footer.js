import Link from 'next/link';
import React from 'react'

const Footer = () => {

  let year = new Date;

  return (
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
          ©<span id="copyright-year">{year.getFullYear()} <img src="./images/awoo.svg" /> STUDIOS</span>
          </h4>
        <span><Link href="/">Terms of Use and Conditions</Link></span><br/>
        <span><Link href="/">Purchase and License Agreement</Link></span>
          
        </div>
    </footer>
  )
}

export default Footer;