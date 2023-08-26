import React from 'react';
import styles from '../styles/SearchBar.module.css'
import {BsSearch} from 'react-icons/bs'
const SearchBar = ({search,setSearch,SearchData}) => {
    const handleKeyPress=(e)=>{
        if(e.key==="Enter"){
            SearchData();
        }
    }
    return (
        <>
        <div className={styles.container}>
             <input type="text" placeholder='Search' className={styles.searchbar} onChange={(e)=>setSearch(e.target.value)} value={search} onKeyDown={handleKeyPress}/>
             <span className={styles.search_icon}>
                <button onClick={SearchData} className={styles.search_btn}><BsSearch/></button>
             </span>
        </div>
        </>
    );
}

export default SearchBar;
