import React from 'react';
import styles from '../../styles/ResultCard.module.css';
const ResultCard = ({title,data,icon}) => {
    return (
        <>
            <div className={styles.resultCard}>
                <h4 className={styles.title}>{title}</h4>
                <ol className={styles.details}>
                    {
                        data.map(({key,value})=><li className={styles.order}>
                            <h4 className={styles.key}>{key}</h4>
                            <p className={styles.value}>{value?value.length>12?`#${value.slice(0,7)}`:value:""}</p>
                        </li>
                        )
                    }
                </ol>
                <span className={styles.info_btn}>
                    {icon}
                </span>
            </div>
        </>
    );
}

export default ResultCard;
