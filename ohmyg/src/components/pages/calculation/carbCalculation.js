import React from 'react'
import InputRange from 'react-input-range'


import './carbCalculation'

class carbCalculation extends React.Component {
    state = {
        food: 'poire',
        value:  100,
        carb100g: 20,
    }

    render() {
        return (
            <InputRange
                maxValue={500}
                minValue={0}
                value={this.state.value}
                onChange={value => this.setState({ value })} />
        );
    }



}

export default carbCalculation