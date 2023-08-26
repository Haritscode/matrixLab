import React from 'react';
import logovector from '../../assets/Vector.svg';
import Nitifylogo from '../../assets/NFTify.svg';
import tokenLogo from '../../assets/ic_baseline-token.svg'
import pairtTokenLogo from '../../assets/fluent_pair-24-filled.svg'
import styles from '../../styles/SideBar.module.css';
import List from './List';
import facebookIcon from '../../assets/facebook (4) 1.svg';
import linkedInIcon from '../../assets/linkedin (1) 1.svg';
import twitterIcon from '../../assets/twitter (1) 1.svg';
const sideBar=[
    {
        icon:tokenLogo,
        text:"Token Address"
    },
    {
        icon:pairtTokenLogo,
        text:"Pair Address"
    }
]
const SideBar = ({ActiveTab,setActiveTab}) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.topSidebar}>
                <div className={styles.icon}>
                    <img src={logovector} alt="none" />
                    <img src={Nitifylogo} alt="none" />
                </div>
                <ol className={styles.bar_list}>
                    {sideBar.map(({icon,text},count)=><List key={count} icon={icon} backgroundColor={ActiveTab==text?"#F30050":""} setActiveTab={setActiveTab}>{text}</List>)}
                </ol>
            </div>
            <ol className={styles.iconslist}>
                <li><img src={facebookIcon} alt="none" /></li>
                <li><img src={linkedInIcon} alt="none" /></li>
                <li><img src={twitterIcon} alt="none" /></li>
            </ol>
        </div>
    );
}

export default SideBar;
