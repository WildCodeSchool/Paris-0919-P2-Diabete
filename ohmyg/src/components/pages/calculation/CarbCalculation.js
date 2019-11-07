import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './CarbCalculation.css';
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
        modifyingItem: false,
    }

    
    
    newFood = () => {
        this.setState({name: this.props.newName}, _=>{
            console.log(this.state);
            
        })
        this.setState({carb100g: this.props.newCarbs})
    }

    componentDidUpdate() {
        if (this.state.modifyingItem === false) {
             if (this.state.name !== this.props.newName || this.state.carb100g !== this.props.newCarbs) {
                this.newFood()
             }
          }}
    

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
            let objectCarbRatio = this.state.carbRatio;
            let objectValue = this.state.value;
            let objectCarb100 = this.state.carb100g

            const tab = [...this.state.galleryItems,{dish: objectName, dishCarb: objectCarbRatio, dishWeight : objectValue, dishCarb100 : objectCarb100} ]
            await this.setState({galleryItems: tab })
        } )
        const result = await parseFloat(this.state.totalCarb) + parseFloat(this.state.carbRatio)

        await this.setState({totalCarb: result.toFixed(2) })

    }

    buttonClick = () => {
        this.setState({buttonIsClicked: true})
        console.log(this.state.buttonIsClicked)

    }

    modifyItem = async (elem) => {
        await this.setState({modifyingItem : true})
        this.setState({name : elem.dish})
        this.setState({value: elem.dishWeight})
        this.setState({carbRatio: (elem.dishCarb100*elem.dishWeight)/100})
        }
    
        // slider= async (value) => {
        //     await this.setState({ value: value });
        //     let carbRatio = (this.state.carb100g*this.state.value/100).toFixed(2)
        //     this.setState({carbRatio: carbRatio})
    
    
        // }
        
    
    render() {
        let carbRatio = (this.state.carb100g*this.state.value/100).toFixed(2)
        console.log(this.state.galleryItems)
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
                            <label className='carbCalculation-label'>Poids </label>
                            <div className='borderInputLabel'>
                                <input 
                                    className="foodWeight"
                                    type='number'
                                    maxValue={500}
                                    value={this.state.value}
                                    onChange={this.handleChange} />
                                <label className='carbCalculation-label'> g</label>
                            </div>
                        </div>
                        <div className='inputCarbo'>
                            <label className='carbCalculation-label'>Glucides </label>
                            <div className='borderInputLabel'>
                                <input 
                                    className="carbohydrate"
                                    type="number"
                                    value={carbRatio}
                                />
                                <label className='carbCalculation-label'> g</label>
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
                <div className='carbs-list'>

                    {this.state.galleryItems.map(elem => 
                        <ul onClick={ () => this.modifyItem(elem)} > 
                        <li> {elem.dish}</li>
                        <li> {elem.dishCarb}</li>
                    </ul>)}

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