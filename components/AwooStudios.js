import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';


const AwooStudios = () => {

  const [pacaAndJunshiRef, pacaAndJunshiInView] = useInView({threshold: 0});

  useEffect(() => {
    if (pacaAndJunshiInView){
      document.querySelector('#junAndPaca').classList.add('slideInRight')
      document.querySelector('#pacaTag').classList.add('fadeIn')
      document.querySelector('#junshiTag').classList.add('fadeIn')
    }
  }, [pacaAndJunshiInView]);

  
  return (
    <section id="AwooStudios">
        <div className='section-copy'>
            <div className='copy-wrap'>
                <h2>AWOO STUDIOS.</h2>
                  <div className='copy-btns'>
                    <a className="section-button">
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
              <img src="/images/tag_paca.png" width="190px" height="126px" />
            </a>
            <a id="junshiTag" href="https://twitter.com/JunshiNFT" target="_blank">
              <img src="/images/tag_junshi.png" width="192px" height="98px" />
            </a>
          </div>
        <img id='junAndPaca' ref={pacaAndJunshiRef} src="./images/group.svg" />
        </div>
    </section>
  )
}

export default AwooStudios;
