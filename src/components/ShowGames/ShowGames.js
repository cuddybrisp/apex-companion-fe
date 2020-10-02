import React, { useEffect, useState } from 'react'
import { CardBody, Card, Button } from 'reactstrap'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'

const ShowGames = ({ match, user, msgAlert }) => {
  const [games, setGames] = useState([])
  const [deletedGame, setDeleted] = useState(false)
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

  const handleDelete = event => {
    const game = event.target.id

    axios({
      url: `${apiUrl}/games/${game}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => msgAlert({
        heading: 'Game Permanently Deleted',
        message: messages.deleteGameSuccess,
        variant: 'success'
      }))
      .then(res => setDeleted(true))
      .catch(console.error)
  }
  if (deletedGame) {
    axios({
      url: `${apiUrl}/games`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setGames(res.data.games))
      .then(() => setDeleted(false))
      .catch(console.error)
  }
  // const gameWon = game.legend
  console.log('this is the games in Showgames', games)
  const allGames = games.map(game => {
    console.log('this is game in ShowGames after map', game)
    return (
      <div key={game._id}>
        {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
        <Card id={game.legend.id}>
          <CardBody>
            <div>
              <img src={game.legend.image} className='legend-img'/>
              <h2>Legend: {game.legend.name}</h2>
              <h3>Damage: {game.damage}</h3>
              <h3>Kills: {game.kills}</h3>
              <h3>Win: {game.win === true ? 'yes' : 'no'}</h3>
              {user._id === game.owner ? <Button
                className="dlt-btn"
                size="sm"
                variant="outline-danger"
                id={game._id}
                onClick={handleDelete}>Delete</Button> : ''}
            </div>
          </CardBody>
        </Card>
      </div>
    )
  })
  return <div>
    {!games ? <h1>You Will Need To Create A Game First</h1> : allGames }
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
