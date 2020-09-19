import React from 'react'
import { CardBody, Card, CardImg } from 'reactstrap'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
const ShowLegends = (user, game, legends) => {
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
  const allLegends = user.legends.map(legend => {
    return (
      <div key={legend._id}>
        {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
        <Card id={legend.id}>
          <CardImg width='50%' src={legend.image} />
          <CardBody>
            <small>ADD GAMES HERE</small>
          </CardBody>
        </Card>
      </div>
    )
  })
  return <div>{ allLegends }</div>
}

export default ShowLegends
