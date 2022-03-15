import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className=' spinner text-center m-5 my-3'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
