import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

import BankDrawer from './BankDrawer';

const NewFangCity = () => {

    const [bankActive, setBankActive] = useState(false);

    const handleBankToggle = () => {        
        if(bankActive){
            setBankActive(!bankActive);
            setTimeout(() =>{
                document.querySelector('#bank-drop-down').classList.add('hidden');
            }, 1000)
        }else{
            setBankActive(!bankActive);
            document.querySelector('#bank-drop-down').classList.add('hidden');
        }
        
    }


    const Tram = ({ placement }) => {
        const [tramRef, tramRefInView] = useInView({ threshold: 0 });

        useEffect(() => {
            tramRefInView ? document.querySelector(".tram-img-area").classList.add('zoomingIn') : null;
        }, [tramRefInView])

        return(
            <div className={ placement == 'desktop' ? 'desktop tram-img-area' : 'mobile tram-img-area'} ref={tramRef}>
                <img src={'./images/tram.svg'} height='256px' width="196px" />
            </div>
        )
    } 

    useEffect(()=>{
        document.querySelector('#bank-drop-down').classList.add('hidden');
    }, [])

    return (
        <section id="newFangCity">
            <div>
                <div className="section-copy purple-bg">
                    <div className='copy-wrap'>
                        <h2>TAKE A TRIP TO
                            <span className="gold"> NEW FANG CITY</span>.
                        </h2>
                        <Tram placement={'mobile'}/>
                        <div className='copy-btns'>
                            <a href="https://newfangcity.com" target="_blank" className='section-button'>VISIT</a>
                            <a 
                                className='section-button'
                                onClick={() => handleBankToggle()}
                            >
                            $AWOO
                            </a>
                        </div>
                        <p className='section-p'>
                            Join the Fangsters on the streets of New Fang City. It’s our very own microverse where we connect, enjoy special events, hang out and spend the $AWOO ecosystem token on fun features.
                        </p>
                        <p className='section-p'>
                            You can also manage your $AWOO in the bank and gear up your Fangsters in cosmetic traits in the WLDFNGZ building.
                        </p>
                    </div>
                </div>
                <Tram placement={'desktop'} />
            </div>
            <img id="NFC" src={"./images/newFangCity.png"} />
            <div className="drawers-wrapper">
                <BankDrawer 
                    bankActive={bankActive}
                    handleBankToggle={handleBankToggle}
                />
            </div>


        </section>
    )
}

export default NewFangCity;