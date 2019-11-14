import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './CarbCalculation.css';
import InsulinCalculation from "./InsulinCalculation";
// import icon from "../../../assets/icons/checked.png";
import bin from "../../../assets/icons/trash.png"
import icon from "../../../assets/icons/checked.png"


class CarbCalculation extends React.Component {
    state = {
        index: 0,
        name: "",
        carb100g: 25,
        value: 100,
        carbRatio: 0,
        totalCarb: 0,
        galleryItems: [],
        calculationButtonIsClicked: false,
        modifyingItem: false,
        listButtonIsClicked: false
    }


    newFood = () => {
        this.setState({ value: 100 })
        this.setState({ name: this.props.newName })
        this.setState({ carb100g: this.props.newCarbs })
    }

    componentDidUpdate() {
        if (this.state.modifyingItem === false) {
            if (this.state.name !== this.props.newName || this.state.carb100g !== this.props.newCarbs) {
                this.newFood()
            }
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
        this.setState({ value: event.target.value });
    }

    /* button validation */

    handleClick = async () => {
        if (this.state.modifyingItem === false && this.state.name !== "") {

            let carbRatioItem = (this.state.carb100g * this.state.value / 100).toFixed(2)
            this.setState({ carbRatio: carbRatioItem }, async () => {
                let objectName = this.state.name;
                let objectCarbRatio = this.state.carbRatio;
                let objectValue = this.state.value;
                let objectCarb100 = this.state.carb100g

                const tab = [...this.state.galleryItems, { dish: objectName, dishCarb: objectCarbRatio, dishWeight: objectValue, dishCarb100: objectCarb100 }]
                await this.setState({ galleryItems: tab })
            })
            const result = await parseFloat(this.state.totalCarb) + parseFloat(this.state.carbRatio)

            await this.setState({ totalCarb: result.toFixed(2) })
            this.setState({ value: 100 })
            this.setState({ name: "" })
        }


        if (this.state.modifyingItem === true) {
            /* delete food*/
            this.deleteItem()
            /*added food with new values in tab*/
            let carbRatioItem = (this.state.carb100g * this.state.value / 100).toFixed(2)
            this.setState({ carbRatio: carbRatioItem }, async () => {
                let objectName = this.state.name;
                let objectValue = this.state.value;
                let objectCarb100 = this.state.carb100g
                let objectCarbRatio = this.state.carbRatio;

                const tab = [...this.state.galleryItems, { dish: objectName, dishCarb: objectCarbRatio, dishWeight: objectValue, dishCarb100: objectCarb100 }]
                await this.setState({ galleryItems: tab })
                const result = (parseFloat(this.state.totalCarb) + parseFloat(this.state.carbRatio)).toFixed(2)
                this.setState({ totalCarb: result })
            })
            this.setState({ modifyingItem: false })

        }
    }

    /* Button delete */

    deleteItem = () => {
        this.setState({ modifyingItem: false })
        const tab = this.state.galleryItems
        tab.splice(this.state.index, 1)
        this.setState({ galleryItems: tab })
        const result = (parseFloat(this.state.totalCarb) - parseFloat(this.state.carbRatio)).toFixed(2)
        this.setState({ totalCarb: result })
        document.getElementsByClassName("carbCalculation-active")[0].classList.remove("carbCalculation-active")
    }

    calculationButton = () => {
        this.setState({ calculationButtonIsClicked: true })
    }

    modifyItem = async (event, elem, index) => {
        console.log(event.target);

        event.target.className += " carbCalculation-active"

        await this.setState({ modifyingItem: true })
        this.setState({ index: index })
        this.setState({ name: elem.dish })
        this.setState({ value: elem.dishWeight })
        this.setState({ carbRatio: elem.dishCarb })
        this.setState({ carb100g: elem.dishCarb100 })
        console.log(this.state.name, this.state.carb100g, this.state.carbRatio, this.state.value);
    }


    render() {
        console.log(this.state.modifyingItem);

        let carbRatio = (this.state.carb100g * this.state.value / 100).toFixed(2)

        const weight = this.state.value
        const ratio = 100 / this.state.carb100g
        let carbRatio2 = (weight / ratio).toFixed(2)

        return (
            <div className="range">
                <div className="CarbCalculation-BeforeCalculation">
                    <div className="CarbCalculation-FoodBlock">
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
                                            value={this.state.modifyingItem ? carbRatio2 : carbRatio}
                                        />
                                        <label className='carbCalculation-label'> g</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="CarbCalculation-buttonContainer">
                            <div className="CarbButtons">
                                {this.state.modifyingItem ?
                                    <button onClick={this.deleteItem}
                                        className="CarbCalculation-Validation bin">
                                        <div className="Button-Border"></div>
                                        <img className="Button-Icon-Checked" src={bin} />
                                    </button> : ""}

                                <button className="CarbCalculation-Validation"
                                    onClick={this.handleClick}>
                                    <div className="Button-Border"></div>
                                    <img className="Button-Icon-Checked" src={icon} />
                                </button>


                            </div>
                        </div>
                    </div>

                    <div className="CarbCalculation-ListBlock">
                        <div className='carbCalculation-totalCarousel'>
                            <div className='carbCalculation-addition'>
                                <p className='carbCalculation-p'>{this.state.totalCarb} g</p>
                            </div>


                            <div className='carbs-list'>
                                {this.state.galleryItems.map((elem, index) =>
                                    <ul className={this.state.modifyingItem ? "carbCalculation-ulModifying" : "carbCalculation-ul"} >
                                        <div className="carbCalculation-liItem " onClick={(event) => this.modifyItem(event, elem, index)} key={index}>
                                            {/* <div className={this.state.modifyingItem ? "carbCalculation-liItem" :"carbCalculation-liItemBis"} */}
                                            <li> {elem.dish}</li>
                                            <li> {elem.dishCarb}</li>
                                        </div>
                                    </ul>)}
                            </div>
                        </div>
                        <button onClick={this.calculationButton} className="meal-CalculationButton" id="#meal-CalculationButton">Calculation</button>
                    </div>
                </div>
                <div className="CarbCalculation-InsulinCalculation">
                    {this.state.calculationButtonIsClicked ? <InsulinCalculation carbs={this.state.totalCarb} /> : ""}
                </div>
            </div>
        );
    }
}

export default CarbCalculation