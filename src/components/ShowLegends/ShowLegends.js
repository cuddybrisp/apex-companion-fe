import React from 'react'
import { CardBody, Card, CardImg, CardText, CardHeader } from 'reactstrap'
import './showlegends.css'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import ShowGames from '../ShowGames/ShowGames'
const ShowLegends = ({ user, games, legends }) => {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(!isOpen)
  // useEffect(() => {
  //   axios({
  //     url: `${apiUrl}/legends`,
  //     headers: {
  //       'Authorization': `Token token=${user.token}`
  //     }
  //   })
  //     .then(res => setLegends(res.data.legends))
  //     .catch(console.error)
  // }, [])
  console.log('this is the game in ShowLegends', games)
  // use to get the game stats separtated by legend
  const getGameStats = (legId) => {
    // this is the syntax used to get the name from the function
    const legGames = games.filter(game => game.legend._id === legId)
    console.log('this is legGames', legGames)
    // how to get name of legend when im in show games component, might be game.legend.name if using map or forEach

    // console.log('this is leggames bracket 0', legGames[0].legend.name)
    let totalKills = 0
    const addUpKills = legGames.forEach(game => {
      totalKills += game.kills
    })
    let totalDamage = 0
    const addUpDamg = legGames.forEach(game => {
      totalDamage += game.damage
    })
    let totalWins = 0
    const addUpWins = legGames.forEach(game => {
      totalWins += game.win
    })
    console.log('this is totalDamage', totalDamage)
    console.log('this is addUpDamg', addUpDamg)
    console.log('this is addUpKills', addUpKills)
    console.log('this is totalKills', totalKills)
    console.log('this is addUpWins', addUpWins)
    console.log('this is totalWins', totalWins)
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
