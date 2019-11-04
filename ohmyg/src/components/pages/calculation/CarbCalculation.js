import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './CarbCalculation.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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

                <div>
                    <CarouselProvider
                        naturalSlideWidth={5}
                        naturalSlideHeight={5}
                        totalSlides={3}>
                            <Slider className='carb-slides'>
                                <Slide className='carbo-slide' index={0}>I am the first Slide.</Slide>
                                <Slide className='carbo-slide' index={1}>I am the second Slide.</Slide>
                                <Slide className='carbo-slide' index={2}>I am the third Slide.</Slide>
                            </Slider>
                            <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>
                        </CarouselProvider>
                </div>
            </div>
        );
    }
}

export default CarbCalculation