import React from 'react'

const AwooStudios = () => {
  return (
    <section id="AwooStudios">
        <div className='section-copy'>
            <div className='copy-wrap'>
                <h2>AWOO STUDIOS.</h2>
                  <button className="section-button">
                      DISCOVER
                  </button>
                  <p className="section-p">
                      Awoo Studios is a Web3 native creative company. We’re focused on developing strong community experiences through unique IP, blockchain technology, gamification and streetwear.
                  </p>
                  <p className="section-p">
                      We’re opening doors to a world of creativity while quickly becoming a household name and cultural staple in this industry through our characters, brands, entertainment platforms and rewarding features.
                  </p>
            </div>
        </div>
        <div id="founders">
              <div id='paca'>
                <a href="https://twitter.com/PacaNFT" target="_blank">
                  <img src="/images/tag_paca.png" width="190px" height="126px" />
                </a>
                <img src="/images/fangster_paca.png" width="211px" height="214px" />
              </div>
              <div id='junshi'>
              <a href="https://twitter.com/JunshiNFT" target="_blank">
                  <img src="/images/tag_junshi.png" width="192px" height="98px" />
                </a>
                <img src="/images/fangster_junshi.png" width="211px" height="214px" />
              </div>
              <img src="/images/founder_bg.png" width="600px" height="161px"/>
        </div>
    </section>
  )
}

export default AwooStudios;
