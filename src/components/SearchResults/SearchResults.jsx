import React from 'react';
import styles from '../../styles/SearchResults.module.css'
import ResultCard from '../cards/ResultCard';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {MdOutlineToken} from 'react-icons/md';
import {PiCurrencyDollarSimple} from 'react-icons/pi';
const SearchResults = ({searchType,cardData=[]}) => {
    return (
        <>
            <div className={styles.searchResults}>
                <h1 className={styles.heading}>{`${searchType?.split(" ")?.[0]} Search Result`}</h1>
                <div className={styles.cardData}>
                    {cardData?.map((item)=><div className={styles.result}>
                        <ol className={styles.list}>
                            <li><ResultCard icon={<AiOutlineInfoCircle/>} title={"Basic Info"} data={item?.basicInfo}/></li>
                            <li><ResultCard icon={<MdOutlineToken/>} title={"Basic Token"} data={item?.baseToken}/></li>
                            <li><ResultCard icon={<MdOutlineToken/>} title={"Quote Token"} data={item?.quoteToken}/></li>
                            <li><ResultCard icon={<PiCurrencyDollarSimple/>} title={"Price"} data={item?.Price}/></li>
                        </ol>
                    </div>)}
                </div>  
            </div>
        </>
    );
}

export default SearchResults;
