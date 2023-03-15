const Join = () => {

  const FloatyFang = ({ placement }) => {
    return (
        <div id='cfw_discord' className={placement == 'desktop' ? 'desktop' : 'mobile'}>
            <img src="/images/CFW.png" className="floaty1" width="284px" height="384px" />
            <img src="/images/discord_chat.png" width="359px" height="311px" />
        </div>
    )
  } 

  return (
    <section id="join" className="purple-bg">
        <div className="section-copy">
            <div className="copy-wrap">
                  <h2>JOIN A CREATIVE <span className='gold'> COMMUNITY</span>.</h2>
                  <FloatyFang placement={'mobile'} />
                <div className="copy-btns">
                      <a href="https://discord.gg/fanggang" className="section-button">
                          CHAT
                      </a>
                </div>
                  <p className="section-p">
                      A supportive network full of talented and enthusiastic contributors to web3. The Fang Gang community as a whole has established itself as one of the most welcoming ones.
                  </p>
                  <p className="section-p">
                      Tons of meaningful connections have been made, great projects havebeen founded from within the community and making others feelincluded is always a priority to its members.
                  </p>
                  <p className="section-p">
                      Join our Discord to get to know us and get a Fangster when you’re ready.
                  </p>
            </div>
        </div> 
        <FloatyFang placement={'desktop'}/>
    </section>
  )
}

export default Join;