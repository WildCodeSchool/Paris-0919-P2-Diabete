import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './CarbCalculation.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import InsulinCalculation from "./InsulinCalculation"

class CarbCalculation extends React.Component {
    state = {
        name: "",
        carb100g: 25,
        value:  100,
        carbRatio: 0,
        totalCarb: 0,
        galleryItems: [],
        buttonIsClicked: false,
    }

    
    
    newFood = () => {
        this.setState({name: this.props.newName})
        this.setState({carb100g: this.props.newCarbs})
    }

    componentDidUpdate() {
        if (this.state.name !== this.props.newName || this.state.carb100g !== this.props.newCarbs) {
            this.newFood()
        }
    }
    

    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
    }

    onSlideChange = (e) => {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    onSlideChanged = (e) => {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }
    
    handleChange = (event) => {
        if (event.target.value > 500) {
            return;
        }
        this.setState({value: event.target.value});
    }

    handleClick =   async () => {
        let carbRatioItem = (this.state.carb100g*this.state.value/100).toFixed(2)
        this.setState({carbRatio: carbRatioItem}, async () => {
            let objectName = this.state.name;
            let objectCarbRatio = this.state.carbRatio

            const tab = [...this.state.galleryItems,{dish: objectName, dishCarb: objectCarbRatio} ]
            await this.setState({galleryItems: tab })
        } )
        const result = await parseFloat(this.state.totalCarb) + parseFloat(this.state.carbRatio)

        await this.setState({totalCarb: result })

    }

    buttonClick = () => {
        this.setState({buttonIsClicked: true})
        console.log(this.state.buttonIsClicked)

    }
    
    render() {
        let carbRatio = (this.state.carb100g*this.state.value/100).toFixed(2)
        
        let newGalleryItems = this.state.galleryItems.map((i) => <h2 key={i.dish}>{i.dish}<br />{i.dishCarb}</h2>)
        console.log(this.state.buttonIsClicked)
        return (
            <div className="range">
                <div className='blockFoodWeight'>

                    <h2 className='carbCalculation-h2'> {this.state.name} : </h2>
                        <div className="InputRangeTest">
                            <InputRange
                                className="input-range"
                                step={0.5}  
                                maxValue={300}
                                minValue={0}
                                value={this.state.value}
                                onChange={value => this.setState({ value })} />
                        </div>    
                    
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
                                    value={carbRatio}
                                />
                                <label> g</label>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="carbButtons">
                    <button className="valid-button" 
                    onClick= {this.handleClick}>V</button>
                </div>
            <div className='carbCalculation-totalCarousel'>
                <div className='carbCalculation-addition'>
                    <p className='carbCalculation-p'>{this.state.totalCarb} g</p>
                </div>
                <div className='carbo-carousel'>
                    <AliceCarousel
                        className='carboCalculation-aliceCarousel'
                        items={newGalleryItems}
                        responsive={this.responsive}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                        onSlideChange={this.onSlideChange}
                        onSlideChanged={this.onSlideChanged}
                    />
            </div>
                </div>
                <div className="meal-CalculationButton">
                    <button onClick={this.buttonClick}>Calculation</button>

                </div>
                {this.state.buttonIsClicked ? <InsulinCalculation carbs={this.state.totalCarb} /> : "" } 
                
            </div>
        );
    }
}

export default CarbCalculation