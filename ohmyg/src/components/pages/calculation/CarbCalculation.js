import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './CarbCalculation.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class CarbCalculation extends React.Component {
    state = {
        name: "",
        carb100g: 25,
        value:  100,
        carbRatio: 20,
        galleryItems: [],
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

    handleClick =  () => {
        let carbRatioItem = (this.state.carb100g*this.state.value/100).toFixed(2)
        this.setState({carbRatio: carbRatioItem}, _=> {
            let objectName = this.state.name;
            let objectCarbRatio = this.state.carbRatio
            this.state.galleryItems.push({dish: objectName, dishCarb: objectCarbRatio})
            this.forceUpdate()
        } )
    }


    
    render() {
        let carbRatio = (this.state.carb100g*this.state.value/100).toFixed(2)

        let newGalleryItems = this.state.galleryItems.map((i) => <h2 key={i.dish}>{i.dish}<br />{i.dishCarb}</h2>)

        
        const addTotalCarb= () =>{
            let totalCarb = 0
            for(let a=0; a < this.state.galleryItems.length; a++) {
                totalCarb+=this.state.galleryItems[a].dishCarb
            }
            return
        }

        return (
            <div className="range">
                <div className='blockFoodWeight'>

                    <h2> {this.state.name} : </h2>
                    
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
                    <button className="delete-button">X</button>
                </div>
            <div>
                <div>
                    <input
                        className='carbCalculation-totalCarb'
                        type= 'number'
                        value={addTotalCarb()}
                    />
                </div>
                <div className='carbo-carousel'>
                    <AliceCarousel
                        items={newGalleryItems}
                        responsive={this.responsive}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                        onSlideChange={this.onSlideChange}
                        onSlideChanged={this.onSlideChanged}
                    />
                </div>
            </div>
            </div>
        );
    }
}

export default CarbCalculation