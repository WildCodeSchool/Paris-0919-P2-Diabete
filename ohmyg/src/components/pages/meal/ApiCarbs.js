import React, {Component} from 'react'
import ApiRequest from './ApiRequest';
import CarbCalculation from '../calculation/CarbCalculation';
import "./ApiCarbs.css"


class ApiCarbs extends Component {
    state = {
        nameFromApi:"",
        carbsFromApi:""
    }

    getChosenFoodName = (food) => {
        this.setState({nameFromApi : food})
    }

    getChosenFoodCarbs = (food) => {
        this.setState({carbsFromApi : food})
    }

render () {
    // console.log(this.state.nameFromApi)
    // console.log(this.state.carbsFromApi)
    return(
    <div>
        <div className="nutriContent-searchBox">
            <ApiRequest
            className='apiCarbs-apiRequest'
            name = {this.getChosenFoodName}
            carbs = {this.getChosenFoodCarbs}
            />
        </div>
        <CarbCalculation
        newName = {this.state.nameFromApi}
        newCarbs = {this.state.carbsFromApi}
        />
    </div>
    )

    }
}



export default ApiCarbs