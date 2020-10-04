import React, { useEffect, useState } from 'react'
import { CardBody, Card, Button } from 'reactstrap'
import EditGame from '../EditGame/EditGame'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'
import apiUrl from '../../apiConfig'

const ShowGames = ({ match, user, msgAlert, legends }) => {
  const [games, setGames] = useState([])
  const [modal, setModal] = useState(false)
  const [editGame, setEditGame] = useState(null)
  const [deleted, setDeleted] = useState(false)
  // const [gameToEditId, setGameToEditId] = useState(null)
  const toggle = () => setModal(!modal)
  const onBtnClick = (event) => {
    toggle()
    setEditGame(event.target.id)
  }
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
  }, [modal, deleted])

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
      .then(setDeleted(!deleted))
      // .then(res => setDeleted(true))
      .catch(console.error)
  }
  console.log('this is games in showgames', games)
  const allGames = games.map(game => {
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
              {user._id === game.owner ? <div> <Button
                className="dlt-btn"
                size="sm"
                variant="outline-danger"
                id={game._id}
                onClick={handleDelete}>Delete</Button>
              <Button
                className="dlt-btn"
                size="sm"
                variant="outline-success"
                id={game._id}
                onClick={onBtnClick}>Edit</Button> </div> : ''}
              <EditGame setModal={setModal} modal={modal} user={user} gameId={game._id} game={game} legends={legends} msgAlert={msgAlert} editGame={editGame} />
            </div>
          </CardBody>
        </Card>
      </div>
    )
  })
  return <div>
    {games.length === 0 ? <h1>You Will Need To Create A Game First</h1> : allGames }
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
