import React, { useState, useEffect } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap'
import axios from 'axios'
import apiUrl from '../../apiConfig'
const ShowLegends = (user, game, props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [legends, setLegends] = useState([])
  const toggle = () => setIsOpen(!isOpen)
  useEffect(() => {
    axios({
      url: `${apiUrl}/legends`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setLegends(res.data.legends))
      .catch(console.error)
  }, [])
  props.legends.forEach(legend => {
    return (
      <div>
        {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
        <Collapse isOpen={isOpen} onClick={toggle} style={{ marginBottom: '1rem' }}>
          <Card id={legend.id}>
            <img src={legend.image} />
            <CardBody>
              {game}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  })
}

export default ShowLegends
