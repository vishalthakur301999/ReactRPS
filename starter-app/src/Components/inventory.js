import { Component } from 'react';
import { Card } from '@geist-ui/core';

class Inventory extends Component {

    render() {
        return (
            <Card hoverable>
                <p>Price is {this.props.price}</p>
            </Card>
        )
    }
}
export default Inventory;