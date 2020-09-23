import React, { useEffect, useState } from 'react'
import { CardBody, Card } from 'reactstrap'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const ShowGames = ({ user }) => {
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
  // const gameWon = game.legend
  console.log('this is the game in Showgames', games)
  const allGames = games.map(game => {
    console.log('this is games in ShowGames after map', game)
    return (
      <div key={game._id}>
        {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
        <Card id={game.legend.id}>
          <CardBody>
            <div>
              <img src={game.legend.image}/>
              <h2>Legend:</h2>
              {game.legend.name}
              <h3>Damage:</h3>
              {game.damage}
              <h3>Kills:</h3>
              {game.kills}
              <h3>Win:</h3>
              {game.win}
            </div>
          </CardBody>
        </Card>
      </div>
    )
  })
  return <div>
    { allGames }
  </div>
}
export default ShowGames

// const getGameStats = (legId) => {
//   // this is the syntax used to get the name from the function
//   const legGames = games.filter(game => game.legend._id === legId)
//   console.log('this is legGames', legGames)
//   // how to get name of legend when im in show games component, might be game.legend.name if using map or forEach
//
//   // console.log('this is leggames bracket 0', legGames[0].legend.name)
//   let totalKills = 0
//   const addUpKills = legGames.forEach(game => {
//     totalKills += game.kills
//   })
//   let totalDamage = 0
//   const addUpDamg = legGames.forEach(game => {
//     totalDamage += game.damage
//   })
//   console.log('this is totalDamage', totalDamage)
//   console.log('this is addUpDamg', addUpDamg)
//   console.log('this is addUpKills', addUpKills)
//   console.log('this is totalKills', totalKills)
//   return legGames
// }
