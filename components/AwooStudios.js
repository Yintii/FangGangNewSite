import React, { useEffect } from 'react'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';


const AwooStudios = () => {

  const [pacaAndJunshiRef, pacaAndJunshiInView] = useInView({threshold: 0});

  useEffect(() => {
    if (pacaAndJunshiInView){
      document.querySelector('#pacaTag').classList.add('fadeIn')
      document.querySelector('#junshiTag').classList.add('fadeIn')
      document.querySelector('#paca').classList.add('toaster-pop-up')
      document.querySelector('#junshi').classList.add('toaster-pop-up')
    }
  }, [pacaAndJunshiInView]);

  
  return (
    <section id="AwooStudios">
        <div className='section-copy'>
            <div className='copy-wrap'>
                <h2>AWOO STUDIOS.</h2>
                  <div className='copy-btns'>
            <a className="section-button" href="https://linktr.ee/awoostudios" target="_blank">
                      DISCOVER
                    </a>
                  </div>
                  <p className="section-p">
                      Awoo Studios is a Web3 native creative company. We’re focused on developing strong community experiences through unique IP, blockchain technology, gamification and streetwear.
                  </p>
                  <p className="section-p">
                      We’re opening doors to a world of creativity while quickly becoming a household name and cultural staple in this industry through our characters, brands, entertainment platforms and rewarding features.
                  </p>
            </div>
        </div>
        <div id="founders">
          <div id="tags" className='center-stuff'>
            <a id="pacaTag" href="https://twitter.com/PacaNFT" target="_blank">
              <Image src="/images/tag_paca.png" width={190} height={126} />
            </a>
            <a id="junshiTag" href="https://twitter.com/JunshiNFT" target="_blank">
              <Image src="/images/tag_junshi.png" width={192} height={98} />
            </a>
          </div>
        <div id='junAndPaca' ref={pacaAndJunshiRef} >

          <div id="bg-mask">

            <div id="founder-wrap">
              <Image id="paca" src="/images/fangster_paca.png" width={212} height={212} />
              <Image id="junshi" src="/images/fangster_junshi.png" width={212} height={212} />
            </div>

            <Image id="cbg" src="/images/cbg.svg" width={608} height={166} />
          </div>
        </div>
        </div>
    </section>
  )
}

export default AwooStudios;
