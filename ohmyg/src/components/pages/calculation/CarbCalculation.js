import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './CarbCalculation.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class CarbCalculation extends React.Component {
    state = {
        name: 'poire',
        value:  100,
        carb100g: 20,
        carbRatio: 20,
        galleryItems: [
            {name: 'poire',
            value:  100,
            carb100g: 20,
            carbRatio: 20}, 
            {name: 'pomme',
            value:  100,
            carb100g: 20,
            carbRatio: 20}, 
            {name: 'fraise tagada',
            value:  100,
            carb100g: 20,
            carbRatio: 20}].map((i) => <h2 key={i}>{i.name}</h2>),
    }

    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
    }

    onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }
     
    onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
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
                    
                        <InputRange
                            className="input-range"
                            step={0.5}
                            maxValue={300}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />
                    
                    <div className='inputWeightCarbo'>
                        <div className='inputWeight'>
                            <label>Poids </label>
                            <div className='borderInputLabel'>
                                <input 
                                    className="foodWeight"
                                    type='number'
                                    maxValue={500}
                                    value={this.state.value}
                                    onChange={this.handleChange} />
                                <label> g</label>
                            </div>
                        </div>
                        <div className='inputCarbo'>
                            <label>Glucides </label>
                            <div className='borderInputLabel'>
                                <input 
                                    className="carbohydrate"
                                    type="number"
                                    value={this.state.carb100g*this.state.value/100}
                                />
                                <label> g</label>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="carbButtons">
                    <button className="valid-button">V</button>
                    <button className="delete-button">X</button>
                </div>

                <div className='carbo-carousel'>
                    <AliceCarousel
                        items={this.state.galleryItems{'name'}}
                        responsive={this.responsive}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                        onSlideChange={this.onSlideChange}
                        onSlideChanged={this.onSlideChanged}
                    />
                </div>
            </div>
        );
    }
}

export default CarbCalculation