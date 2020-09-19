import React from 'react'
import ShowLegends from '../ShowLegends/ShowLegends'

const LegendBoard = (user, props) => {
  // <ShowLegends legends={legends} />
  console.log('legendboard this is also user:', user)
  return (
    <ShowLegends legends={user.legends} />
  )
}

export default LegendBoard
