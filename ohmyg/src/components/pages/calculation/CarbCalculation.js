import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

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
                    className="input-range"
                    step={0.1}
                    maxValue={500}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })} />
            </div>
        );
    }
}

export default CarbCalculation