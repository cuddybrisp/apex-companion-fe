import React from 'react'
import { CardBody, Card, CardImg, CardText, CardHeader } from 'reactstrap'
import './showlegends.css'
const ShowLegends = ({ user, games, legends }) => {
  // use to get the game stats separtated by legend
  const getGameStats = (legId) => {
    // this is the syntax used to get the name from the function
    const legGames = games.filter(game => game.legend._id === legId)
    // how to get name of legend when im in show games component, might be game.legend.name if using map or forEach

    let totalKills = 0
    let totalDamage = 0
    let totalWins = 0
    legGames.forEach(game => {
      totalKills += game.kills
      totalDamage += game.damage
      totalWins += game.win
    })
    return [totalKills, totalWins, totalDamage]
  }
  const allLegends = legends.map(legend => {
    const [totalKills, totalWins, totalDamage] = getGameStats(legend._id)
    return (
      <div key={legend._id} className=''>
        {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
        {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button */}
        <Card id={legend.id} onClick={() => getGameStats(legend._id)}>
          <CardHeader>{legend.name}</CardHeader>
          <CardImg className='cardimg' src={legend.image} />
          <CardBody>
            <CardText>total Wins with This Legend: {totalWins}</CardText>
            <CardText>total Damage with This Legend: {totalDamage}</CardText>
            <CardText>total Kills with This Legend: {totalKills}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  })
  return <div className=''>
    <div className='flex'>
      { allLegends }
    </div>
    { /*  <ShowGames user={user} games={games} /> */}
  </div>
}

export default ShowLegends
