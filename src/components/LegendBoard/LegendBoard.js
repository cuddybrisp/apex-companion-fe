import React, { useState, useEffect } from 'react'
import ShowLegends from '../ShowLegends/ShowLegends'
// import ShowGames from '../ShowGames/ShowGames'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const LegendBoard = ({ user, legends }) => {
  const [games, setGames] = useState([])
  useEffect(() => {
    axios({
      url: `${apiUrl}/games`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setGames(res.data.games))
      .catch(console.error)
  }, [])
  // <ShowLegends legends={legends} />
  console.log('legendboard this is also user and games:', user, games)
  return (
    <div>
      <ShowLegends legends={legends} games={games} user={user} />
      {/* {games.length !== 0 ? <ShowGames legends={legends} games={games} user={user} /> : null} */}
    </div>
  )
}

export default LegendBoard
