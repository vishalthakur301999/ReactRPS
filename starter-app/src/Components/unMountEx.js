import React, { Component } from 'react'
import { Button } from '@geist-ui/core'

export default class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true
        }
    }
    toggleHeader = () => {
        if(this.state.show){
            this.setState({ show: false });
        }
        else{
            this.setState({ show: true });
        }
    }

    render() {
        let myheader, buttoncontroller;
        if (this.state.show) {
            myheader = <Child className='' />
            buttoncontroller= <Button onClick={this.toggleHeader}>Delete Child Component</Button>
        }
        else{
            buttoncontroller= <Button onClick={this.toggleHeader}>Revive Child Component</Button>
        }
        return (
            <div>
                {myheader}
                {buttoncontroller}
            </div>
        )
    }
}


class Child extends Component {
  render() {
    return (
      <h5 className='ba br3 pa2 w-100 tc'>Hello I will be deleted when you click the button 👇🏻</h5>
    )
  }
}

