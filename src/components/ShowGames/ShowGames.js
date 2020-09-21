// import React from 'react'
// import { CardBody, Card, CardImg, CardText } from 'reactstrap'
// import './showlegends.css'
//
// const ShowGames = ({ user, games, legends }) => {
//   console.log('this is the game in Showgames', games)
//   const allLegends = legends.map(legend => {
//     return (
//       <div key={legend._id}>
//         {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
//         <Card id={legend.id}>
//           <CardImg width='50%' src={legend.image} />
//           <CardBody>
//             <CardText>{legend.name}</CardText>
//           </CardBody>
//         </Card>
//       </div>
//     )
//   })
//   return <div>{ allLegends }</div>
// }
//
// export default ShowGames

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
