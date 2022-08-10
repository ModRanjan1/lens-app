/* This example requires Tailwind CSS v2.0+ */
import { Fragment, React, useState } from 'react'
import NavItems from './NavItems';
import Button from '../Button'
import Link from 'next/link'
import {
    BookmarkAltIcon,
    SearchIcon,
    MenuIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
// import Web3 from "web3";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: "INFURA_ID" // required
        }
    },
    coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
            appName: "My Awesome App", // Required
            infuraId: "INFURA_ID", // Required
            rpc: "", // Optional if `infuraId` is provided; otherwise it's required
            chainId: 1, // Optional. It defaults to 1 if not provided
            darkMode: false // Optional. Use dark theme, defaults to false
        }
    },
};

// const web3Modal = new Web3Modal({
//     cacheProvider: true, // optional
//     providerOptions // required
// });

export default function NavBar() {
    const [dropDown, setDropDown] = useState(true);
    const [provider, setProvider] = useState();
    const [library, setLibrary] = useState();
    const [account, setAccount] = useState();
    const [signature, setSignature] = useState("");
    const [error, setError] = useState("");
    const [chainId, setChainId] = useState();
    const [network, setNetwork] = useState();
    const [verified, setVerified] = useState();

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Explore', link: '/explore' },
        { name: 'More', link: '/more' },
    ]



    const connectWallet = async (event) => {
        event.preventDefault()

        try {
            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            const network = await library.getNetwork();
            setProvider(provider);
            setLibrary(library);
            if (accounts) setAccount(accounts[0]);
            setChainId(network.chainId);
        } catch (error) {
            setError(error);
        }

        console.log("u r connected to ", account)
    }

    // const switchNetwork = async () => {
    //     try {
    //         await library.provider.request({
    //             method: "wallet_switchEthereumChain",
    //             params: [{ chainId: toHex(network) }]
    //         });
    //     } catch (switchError) {
    //         if (switchError.code === 4902) {
    //             try {
    //                 await library.provider.request({
    //                     method: "wallet_addEthereumChain",
    //                     params: [networkParams[toHex(network)]]
    //                 });
    //             } catch (error) {
    //                 setError(error);
    //             }
    //         }
    //     }
    // };
    const disconnect = async () => {
        await web3Modal.clearCachedProvider();
        refreshState();
    };
    // useEffect(() => {
    //     if (web3Modal.cachedProvider) {
    //         connectWallet();
    //     }
    // }, []);

    // useEffect(() => {
    //     if (provider?.on) {
    //         const handleAccountsChanged = (accounts) => {
    //             console.log("accountsChanged", accounts);
    //             if (accounts) setAccount(accounts[0]);
    //         };

    //         const handleChainChanged = (_hexChainId) => {
    //             setChainId(_hexChainId);
    //         };

    //         const handleDisconnect = () => {
    //             console.log("disconnect", error);
    //             disconnect();
    //         };

    //         provider.on("accountsChanged", handleAccountsChanged);
    //         provider.on("chainChanged", handleChainChanged);
    //         provider.on("disconnect", handleDisconnect);

    //         return () => {
    //             if (provider.removeListener) {
    //                 provider.removeListener("accountsChanged", handleAccountsChanged);
    //                 provider.removeListener("chainChanged", handleChainChanged);
    //                 provider.removeListener("disconnect", handleDisconnect);
    //             }
    //         };
    //     }
    // }, [provider]);

    function dropDownHandler(event) {
        event.preventDefault();
        setDropDown(!dropDown);
    }

    if (dropDown) {
        return (
            <div className="flex justify-between items-center md:justify-start md:gap-6 w-screen px-4 md:px-8">
                <div className="flex justify-start ">
                    <Link href='/'>
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-6 sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="logo"
                            />
                        </a>
                    </Link>
                </div>
                <div className='hidden md:flex justify-between border rounded-lg overflow-hidden w-auto'>
                    <input className='search' type='text' placeholder='Search'></input>
                    <Button>
                        <SearchIcon className='py-1'
                            stroke='grey'
                            width="24"
                            height="24" />
                    </Button>
                </div>

                <div className="-mr-2 -my-2 md:hidden">
                    <button className="btn p-1 bg-white  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={dropDownHandler}>
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6"
                            width="24"
                            height="24"
                            aria-hidden="true" />
                    </button>
                </div>

                <nav className="hidden md:inline-block">
                    <NavItems navItems={navItems} />
                </nav>

                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    {!account ? (
                        <Button onClick={connectWallet}>
                            <span className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-1">
                                Connect Wallet
                            </span>
                        </Button>
                    ) : (
                        <Button onClick={disconnect}>
                            <span className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-1">
                                Disconnect
                            </span>
                        </Button>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-between items-center md:justify-start md:gap-6 w-screen px-4 md:px-8 relative">

            <div className="flex justify-start">
                <Link href='/'>
                    <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                            className="h-6 sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="logo"
                        />
                    </a>
                </Link>
            </div>

            <div className="flex items-center justify-end md:flex-1 lg:w-0">
                {!account ? (
                    <Button onClick={connectWallet}>
                        <span className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-1">
                            Connect Wallet
                        </span>
                    </Button>
                ) : (
                    <Button onClick={disconnect}>
                        <span className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-1">
                            Disconnect
                        </span>
                    </Button>
                )}
            </div>

            <div className='absolute top-10 left-0 right-0 p-4 flex flex-col align-center gap-3 w-screen bg-white border-b'>
                <div className='flex justify-between border rounded-lg overflow-hidden w-auto'>
                    <input className='search' type='text' placeholder='Search'></input>
                    <Button>
                        <SearchIcon
                            stroke='grey'
                            width="24"
                            height="24" />
                    </Button>
                </div>
                <nav className="block">
                    <NavItems navItems={navItems} />
                </nav>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
                <button className="btn p-1 bg-white text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={dropDownHandler}>
                    <span className="sr-only">Open menu</span>
                    <XIcon className="h-6 w-6"
                        width="24"
                        height="24"
                        aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
