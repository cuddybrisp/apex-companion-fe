import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label, FormGroup } from 'reactstrap'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

const EditGame = (props) => {
  const {
    user,
    legends,
    msgAlert,
    modal,
    setModal,
    editGame
  } = props
  // const [modal, setModal] = useState(false)
  // const [gameToEditId, setGameToEditId] = useState(null)
  const [game, setGame] = useState({ kills: '', legend: '', win: false, damage: '' })

  const toggle = () => setModal(!modal)
  const handleChange = event => {
    event.persist()
    setGame(prevGame => {
      const updatedField = event.target.name === 'win' ? { win: !prevGame.win } : { [event.target.name]: event.target.value }
      const editedGame = Object.assign({}, prevGame, updatedField)
      return editedGame
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    if (game.legend !== '--Select Legend--') {
      axios({
        url: `${apiUrl}/games/${editGame}`,
        method: 'PATCH',
        headers: {
          'Authorization': `Token token=${user.token}`
        },
        data: { game }
      })
        .then(() => msgAlert({
          heading: 'Game Updated!',
          message: messages.editGameSuccess,
          variant: 'success'
        }))
        .then(toggle)
        .catch(console.error)
    } else {
      msgAlert({
        heading: 'Pick A Viable Legend',
        message: messages.noLegendSelected,
        variant: 'danger'
      })
    }
  }
  const allLegends = legends.map(legend => {
    return (<option value={legend._id} key={legend._id}>{legend.name}</option>)
  })

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Your Game</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <FormGroup>
              <Label for="legendSelect">Legend Used:</Label>
              <Input type="select" name="legend" id="legendSelect">
                <option>--Select Legend--</option>
                {allLegends}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="kills">Kills:</Label>
              <Input type="text" placeholder={game.kills} name="kills" id="kills" />
              <Label for="damage">Damage Done:</Label>
              <Input type="text" name="damage" placeholder={game.damage} id="damage" />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name='win' defaultChecked={game.win} />
                Win
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>Update Game</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default EditGame
