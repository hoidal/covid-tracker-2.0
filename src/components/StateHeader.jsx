import React from 'react';
import styles from './StateHeader.module.css';

function StateHeader({ stateName, info, news }) {

    const name = stateName ? stateName : ' ';
    const stateWebsite = info.covid19Site ? <a href={info.covid19Site}>Official State Website</a> : null;
    const linkToLocalNews = news ? <a href="#newsSection">{name} COVID-19 News</a> : null;

    return (
        <div className={styles.stateHeaderContainer}>
            <h2 className={styles.stateNameHeader}>{name}</h2>
            {stateWebsite}<br/>
            {linkToLocalNews}
        </div>
    )
}

export default StateHeader;
