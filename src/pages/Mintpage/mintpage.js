import Layout from '../../layout/Layout'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider";
import './mint.scss'

const MintPage = () => {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
              infuraId: "27e484dcd9e3efcfd25a83a78777cdf1"
            }
        }
    }
    const connect = async() => {
        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            providerOptions
        });

        const instance = await web3Modal.connect();

        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
    }

    return (
        <Layout headerType={'mint'}>
            <div className='container'>
                <button onClick={connect}>connect wallet</button>
            </div>
        </Layout>
    )
}

export default MintPage