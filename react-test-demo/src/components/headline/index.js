import React, { Component } from 'react'
import './style.scss';
import propTypes from 'prop-types';

class Headline extends Component {
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
Headline.propTypes = {
  header: propTypes.string,
  desc: propTypes.string
}

export default Headline;
