import React, { useEffect } from 'react'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const MeetSection = () => {

    const [meetRef, meetRefInView] = useInView({ threshold: 0 });

    const FangMascot = ({ placement }) => {        
        const [fangAvatarRef, fangAvatarRefInView] = useInView({ threshold: 0 });

        useEffect(() => {
            console.log('fang in view: ', fangAvatarRefInView)
            fangAvatarRefInView ? document.querySelector(".fang-img-area img").classList.add('toaster-pop-up') : null;
            fangAvatarRefInView ? document.querySelector("#meet > div > div.outter-img-wrap > div > img").classList.add('toaster-pop-up') : null;
        }, [fangAvatarRefInView]);
        
        return( 
            <div className={placement == 'desktop' ? 'outter-img-wrap desktop' : 'outter-img-wrap mobile'} >
                <div className="fang-img-area" ref={fangAvatarRef}>
                    <Image src='/images/mascot.png' width={200} height={195} />
                </div>
                <Image className='logo' src='/images/logoNoHash.png' width={212} height={80} />
            </div>
        )
    };


    useEffect(() => {
        if(meetRefInView){
            document.querySelector("#meet > div").classList.add('seperate-down');
            document.querySelector("#fanggrid").classList.add('seperate-up');
        }else{
            document.querySelector("#meet > div").classList.remove('seperate-down');
            document.querySelector("#fanggrid").classList.remove('seperate-up');
        }
    }, [meetRefInView])

    return (
        <section id="meet" ref={meetRef}>
            <div>
                <div className="section-copy purple-bg">
                    <div className='copy-wrap'>
                        <h2>MEET THE <span className="gold no-break-wrap">FANG GANG</span>.</h2>
                        <FangMascot placement={'mobile'} />
                        <div className="copy-btns">
                            <a href="https://opensea.io/collection/fanggangnft" target="_blank" className='section-button ripple-btn'>JOIN</a>
                            <a href="https://shop.awoostudios.com/pages/fang-gang" target="_blank" className='section-button ripple-btn'>SHOP</a>
                        </div>
                        <p className='section-p'>
                            The Fang Gang comes out at night to throw parties, hang around in dark alleys and have fun on the streets of New Fang City.
                        </p>
                        <p className='section-p'>
                            What started as a character built for digital collectibles has grown to be so much more. They love streetwear, a tight-knit community, music and art. All of which has been established within the Awoo Studios ecosystem.
                        </p>
                    </div>
                </div>
                <FangMascot placement={'desktop'}/>
            </div>
            <Image id="fanggrid" src="/images/fanggrid.png" width={1253} height={415} />
        </section>
    )
}

export default MeetSection;