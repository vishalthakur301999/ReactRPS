import { Component } from 'react';
import { Card, Button, Spacer } from '@geist-ui/core'

class Car extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Brand: "Maruti Suzuki",
            Color: "Silver",
            Model: "Swift Dzire"
        }
    }

    handleModel = (e) => {
        if(this.state.Model === "Swift Dzire"){
            this.setState({
                Model: "Ciaz"
            })
        }else {
            this.setState({
                Model: "Swift Dzire"           
            })
        }
    }

    handleColor = (e) => {
        if(this.state.Color === "Silver"){
            this.setState({
                Color: "Black"
            })
        }else {
            this.setState({
                Color: "Silver"
            })
        }
    }

    render() {
        const {Model, Color, Brand} = this.state;
        return (
            <Card hoverable>
                <p>I have a {Brand} {Model} which is {Color} in color</p>
                <Spacer h={.5} />
                <Button onClick={this.handleModel}>Change Model</Button>
                <Spacer h={.5} />
                <Button onClick={this.handleColor}>Change Color</Button>
                <Spacer h={.5} />
            </Card>
        )
    }
}
export default Car;