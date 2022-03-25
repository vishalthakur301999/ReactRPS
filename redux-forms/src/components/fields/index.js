import React, { Fragment } from 'react'

export default function MyInput(props) {
    const {input, type, meta, placeholder} = props
  return (
    <Fragment>
        <input 
            {...input} type={type} placeholder={placeholder}>        
        </input>{meta.error && meta.touched && <div>{meta.error}</div>}
    </Fragment>
  )
}
