import React from 'react';

function StateHeader({ stateName, info }) {

    const name = stateName ? stateName : ' ';
    const stateWebsite = info.covid19Site ? <a href={info.covid19Site}>Official State Website</a> : null;

    return (
        <div style={{height: '6rem', padding: '1rem'}}>
            <h2>{name}</h2>
            {stateWebsite}
        </div>
    )
}

export default StateHeader;
