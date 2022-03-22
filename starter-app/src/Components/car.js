import { Component } from 'react';
import { Card } from '@geist-ui/core'

class Car extends Component {
    constructor(props) {
        super(props)

        this.state = {
            brand: "Maruti",
            Color: "Silver",
            Model: "Swift Dzire"
        }

    }

    render() {
        return (
            <Card hoverable>
                <p>I have a {this.state.brand} {this.state.Model} which is {this.state.Color} in color</p>
            </Card>
        )
    }
}
export default Car;