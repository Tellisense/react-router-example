import React from 'react'
import withToolTip from '../HOC/withToolTip'

const Product = (props) => {
  return (
    <div>
      Product
      <span>{props.showToolTip ? <div>this is a tooltip</div> : null}</span>
    </div>
  )
}

export default withToolTip(Product)
