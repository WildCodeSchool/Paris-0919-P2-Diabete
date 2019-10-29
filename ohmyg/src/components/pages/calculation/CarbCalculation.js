import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import './CarbCalculation.css'

class CarbCalculation extends React.Component {
    state = {
        name: 'poire',
        value:  100,
        carb100g: 20,
        carbRatio: 20
    }
    
    handleChange = (event) => {
        if (event.target.value > 500) {
            return;
        }
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="range">
                <div className='blockFoodWeight'>
                    <div>
                        <InputRange
                            className="input-range"
                            step={0.5}
                            maxValue={600}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />
                    </div>
                    <div>
                        <label>Poids </label>
                        <input 
                            className="foodWeight"
                            type='number'
                            maxValue={500}
                            value={this.state.value}
                            onChange={this.handleChange} />
                            <label> g</label>
                    </div>
                </div>    
                        <label>Glucides </label>
                    <input 
                        className="carbohydrate"
                        type='number'
                        value={this.state.carb100g*this.state.value/100}
                    />
                    <label> g</label>
                

                <div>
                    <button>V</button>
                </div>
            </div>
        );
    }
}

export default CarbCalculation