import React, { useState } from 'react'

const withToolTip = (Component) => {
  return function WithToolTip(props) {
    const [showToolTip, setShowToolTip] = useState()

    const handleMouseEnter = () => {
      setShowToolTip(true)
    }
    const handleMouseLeave = () => {
      setShowToolTip(false)
    }

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Component showToolTip={showToolTip} {...props} />
      </div>
    )

  }
}

export default withToolTip
