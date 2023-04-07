import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import BankDrawer from './BankDrawer';
import { FangBtn } from './FangBtn';

const NewFangCity = () => {

    const [bankActive, setBankActive] = useState(false);

    const [nfcRef, nfcRefInView] = useInView({ threshold: 0 });

    const nfcDivRef = useRef(null);

    const handleBankToggle = () => {        
        if(bankActive){
            setBankActive(!bankActive);
            nfcDivRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            setTimeout(() =>{
                document.querySelector('#bank-drop-down').classList.add('hidden');
            }, 1000)
        }else{
            setBankActive(!bankActive);
            document.querySelector('#bank-drop-down').classList.add('hidden');
        }
        
    }


    const Tram = ({ placement }) => {
        return(
            <div className={ placement == 'desktop' ? 'desktop tram-img-area' : 'mobile tram-img-area'}>
                <Image src='/images/Tram.svg' height={256} width={196} />
            </div>
        )
    } 



    useEffect(() => {
        if (nfcRefInView) {
            document.querySelector("#nfc-wrap").classList.add('seperate-down')
            document.querySelector("#NFC").classList.add('seperate-up')
        } else {
            document.querySelector("#nfc-wrap").classList.remove('seperate-down')
            document.querySelector("#NFC").classList.remove('seperate-up')
        }

    }, [nfcRefInView])

    useEffect(()=>{
        document.querySelector('#bank-drop-down').classList.add('hidden');
    }, [])

    return (
        <section id="newFangCity" ref={nfcDivRef}>
            <div id="nfc-wrap" ref={nfcRef}>
                <div className="section-copy purple-bg">
                    <div className='copy-wrap'>
                        <h2>TAKE A TRIP TO
                            <span className="gold"> NEW FANG CITY</span>.
                        </h2>
                        <Tram placement={'mobile'}/>
                        <div className='copy-btns'>
                            <a href="https://newfangcity.com" target="_blank" className='section-button'>VISIT</a>
                            <FangBtn 
                                label="$AWOO"
                                passedFunction={() => handleBankToggle()}
                                growerType="rippleGrower"
                                extraClasses="section-button"
                            />
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
            <Image id="NFC" src="/images/newFangCity.png" width={1264} height={419} />
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