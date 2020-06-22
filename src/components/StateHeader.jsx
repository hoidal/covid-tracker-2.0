import React from 'react';
import styles from './StateHeader.module.css';

function StateHeader({ stateName, info }) {

    const name = stateName ? stateName : ' ';
    const stateWebsite = info.covid19Site ? <a href={info.covid19Site}>Official State Website</a> : null;

    return (
        <div className={styles.stateHeaderContainer}>
            <h2>{name}</h2>
            {stateWebsite}
        </div>
    )
}

export default StateHeader;
