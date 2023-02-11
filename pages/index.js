import { Inter } from '@next/font/google'

import { useEffect, useState } from 'react'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from '@wagmi/core'

import { Network, Alchemy } from "alchemy-sdk";

import NavComponent from '@/components/Navbar'
import IntroSection from '@/components/Intro'
import MeetSection from '@/components/Meeting'
import PxlFangsSection from '@/components/PxlFangSection'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [userFangs, setUserFangs] = useState([]);

    const [toggledForClaimTokens, setToggledForClaimedTokens] = useState([]);

    const { address, isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect();

    const settings = {
        apiKey: "QVgxIPWahXBDZTW_ZvQdl-_pkMF2anDw",
        network: Network.ETH_MAINNET,
    };

    const FANG_GANG_CONTRACT_ADDRESS = '0x9d418c2cae665d877f909a725402ebd3a0742844';
    const PXL_FANGS_CONTRACT_ADDRESS = '0x30917A657Ae7d1132bdcA40187D781FA3B60002F';

    const alchemy = new Alchemy(settings);


    useEffect(()=>{
        if(isConnected){
            console.log("Connected with: ", address);
        }
        if(!isConnected){
            connect();
        }
    },[])

  return (
    <>
        <NavComponent />
        <main>
            <IntroSection />
            <MeetSection />
            <PxlFangsSection 
                userFangs={userFangs} 
                isConnected={isConnected}
                PXL_FANGS_CONTRACT_ADDRESS={PXL_FANGS_CONTRACT_ADDRESS}
                FANG_GANG_CONTRACT_ADDRESS={FANG_GANG_CONTRACT_ADDRESS}
                alchemy={alchemy}
                address={address}
                setUserFangs={setUserFangs}
                toggledForClaimTokens={toggledForClaimTokens}
                setToggledForClaimedTokens={setToggledForClaimedTokens}
                connect={connect}
            />
        </main>
    </>
  )
}
