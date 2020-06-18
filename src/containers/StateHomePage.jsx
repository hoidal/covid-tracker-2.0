import React, { Component } from 'react'

import { getStateAbbr } from '../helper-functions/formatters';

class StateHomePage extends Component {

    componentDidMount() {
        const stateAbbr = getStateAbbr(this.props.match.params.stateName);
        console.log(stateAbbr)
    }

    render() {
        console.log(this.props.match.params.stateName)
        return (
            <div>
                
            </div>
        )
    }
}

export default StateHomePage;
