import React from 'react'
import InputRange from 'react-input-range';

import './CarbCalculation.css'

class CarbCalculation extends React.Component {
    state = {
        food: 'poire',
        value:  100,
        carb100g: 20,
    }

    render() {
        return (
            <div className="range">
                <InputRange
                    step={1}
                    maxValue={500}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })} />
            </div>
        );
    }
}

export default CarbCalculation