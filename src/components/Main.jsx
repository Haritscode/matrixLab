import {useState,useEffect} from 'react';
import styles from '../styles/Main.module.css'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults/SearchResults';
import axios from 'axios'
import dataHandler from '../dataHandler';
import { BarLoader } from 'react-spinners';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Main = ({ActiveTab}) => {
    const [search,setSearch]=useState("");
    const [cardData,setCardData]=useState([]);
    const [showLoading,setShowLoading]=useState(false);
    const SearchData=async()=>{
        setShowLoading(true);
        try{
            let data;
            if(ActiveTab==="Token Address"){
                data=await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${search}`)
            }
            else{
                data=await axios.get(`https://api.dexscreener.com/latest/dex/search?q=${search}`)
            }
            setCardData(dataHandler(data?.data?.pairs,ActiveTab));
            setShowLoading(false);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        setCardData([])
    },[ActiveTab])
    return (
        <>
        <div className={styles.main}>
            <div className={styles.mask}></div>
            <div className={styles.topbar}>
                <SearchBar search={search} setSearch={setSearch} SearchData={SearchData}/>
                <button className={styles.connect_btn}><ConnectButton accountStatus={{smallScreen: 'avatar',largeScreen: 'full'}}/></button>
            </div>
            {
                !showLoading?
                <SearchResults searchType={ActiveTab} cardData={cardData}/>:
                <div className={styles.loading}><BarLoader color='white' width={200}/></div>

            }
        </div>   
        </>
    );
}

export default Main;
