import Link from 'next/link';
import React from 'react'

const Footer = () => {

  let year = new Date;

  return (
    <footer>
        <div id='socials'>
            <img src='/images/twitter_logo.png' />
            <img src='/images/discord_logo.png' />
            <img src='/images/instagram_logo.png' />
            <img src='/images/opensea_logo.png' />
            <img src='/images/email_icon.png' />
        </div>
        <img id='poap' src='/images/fangster_footer.png' widht='269px' height='108px' />
        <div id='copyright'>
          <h4>
          ©<span id="copyright-year">{year.getFullYear()} <img src="./images/awoo.png" /> STUDIOS</span>
          </h4>
        <span><Link href="/">Terms of Use and Conditions</Link></span><br/>
        <span><Link href="/">Purchase and License Agreement</Link></span>
          
        </div>
    </footer>
  )
}

export default Footer;