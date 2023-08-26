import React from 'react';
import styles from '../../styles/sidebarlist.module.css'
const List = ({icon,children,backgroundColor,setActiveTab}) => {
    return (
        <>
            <li className={styles.item} style={{backgroundColor}} onClick={()=>setActiveTab(children)}>
                <img className={styles.icon} src={icon} alt="none" />
                <p className={styles.text}>{children}</p>
            </li>
        </>
    );
}

export default List;
