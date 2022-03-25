import React, { Component } from 'react'
import './style.scss';

export class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // @ts-ignore
    const {header, desc} = this.props;
    if(!header){
      return null;
    }
    return (
      <div data-test="HeadlineComponent" className='w-100 tc pa3 mt2 sans-serif'>
        <span data-test="header" className='f1 b'>Headline - {header}</span>
        <p data-test="desc" className='f3 i'>{desc}</p>
      </div>
    )
  }
}
