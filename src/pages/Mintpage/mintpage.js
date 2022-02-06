import { useState, useEffect } from 'react'
import Layout from '../../layout/Layout'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider";
import Text from '../../components/text/Text'
import './mint.scss'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css';

const providerOptions = {
    // Example with WalletConnect provider
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "9aa3d95b3bc440fa88ea12eaa4456161" // required
        }
    }
};

const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions
});

const MintPage = () => {
    const [isConnect, setConnect] = useState(false)
    const [currentAddress, setAddress] = useState('')
    const [mintCount, setMintCount] = useState(1)

    useEffect(() => {
        disconnectWallet()
    },[])

    const connect = async () => {
        const { ethereum } = window;
        if(!ethereum) {
            NotificationManager.warning(`Please install metamask`, 'No Ethereum Detected', 2000);
            return;
        }
        const instance = await web3Modal.connect();

        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x1'}],
            })
            setConnect(true)
            setAddress(accounts[0])
            NotificationManager.success(`${accounts[0]}`, 'Wallet Connected', 2000);
        } catch (switchError) {
            return await web3Modal.clearCachedProvider()
        }
    }

    const disconnectWallet = async () => {
        try {
            setConnect(false)
            return await web3Modal.clearCachedProvider()

        } catch (e) {
            console.error(e)
            return false
        }
    }

    const addCount = () => {
        let cnt = mintCount
        if(cnt >= 7) return
        cnt++
        setMintCount(cnt)
    }

    const subCount = () => {
        let cnt = mintCount
        if(cnt <= 1) return
        cnt--
        setMintCount(cnt)
    }

    return (
        <Layout headerType={'mint'} onclick = {isConnect ? () => disconnectWallet() : () => connect()} title = {isConnect ? 'Disconnect' : 'Connect Wallet'}>
            <NotificationContainer/>
            <span className="blur-circle1"></span>
            <span className="blur-circle2"></span>
            <div className='mint-container'>
                <div className='description'>
                    <Text size={16}>Our roadmap is full of great milestones you should run to see now.</Text>

                </div>

                <div className='preview'>
                    <img src='images/robot.gif'/>
                </div>

                <div className='mint-count'>
                    <div className='btn-wrapper'><button className='btn-count' onClick={() => subCount()}>-</button></div>
                    <div className='text-wrapper'><Text size={36} weight={700}>{mintCount}</Text></div>
                    <div className='btn-wrapper'><button className='btn-count' onClick={() => addCount()}>+</button></div>
                </div>

                <div className='mint-button'>
                    <button className='btn-mint'>Mint Now</button>
                </div>

                <div className='mint-description'>
                    <Text size={18} weight={300}>The max KOOBOO’S you can mint is 7 per wallet! mint away!</Text>
                </div>
            </div>
        </Layout>
    )
}

export default MintPage