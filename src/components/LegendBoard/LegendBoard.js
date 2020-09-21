import React from 'react'
import ShowLegends from '../ShowLegends/ShowLegends'

const LegendBoard = ({ user, legends }) => {
  // <ShowLegends legends={legends} />
  console.log('legendboard this is also user:', user)
  return (
    <ShowLegends legends={legends} />
  )
}

export default LegendBoard
