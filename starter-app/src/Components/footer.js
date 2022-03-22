import React, { Component } from 'react'

export class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favcolor: 'Black'
        }
    }
    // static getDerivedStateFromProps(props, state){
    //     return {favcolor: props.favcolor}
    // }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div>
                <h4>My Favourite color is {this.state.favcolor}</h4>
                <h5 id='snapshot'></h5> 
            </div>            
        )
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ favcolor: "Red"})
        },5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("snapshot").innerHTML = "Previous Value was " + prevState.favcolor;
        return null;
    }
    componentDidUpdate(){
        document.getElementById('snapshot').innerHTML += " and now it is "+ this.state.favcolor;
    }


}

export default Footer