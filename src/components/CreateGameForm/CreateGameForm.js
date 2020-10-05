import React, { useState } from 'react'
// import { Route } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

const CreateGameForm = ({ user, legends, msgAlert }) => {
  const [game, setGame] = useState({ legend: '', kills: '', damage: '', win: false })
  const allLegends = legends.map(legend => {
    return (<option value={legend._id} key={legend._id}>{legend.name}</option>)
  })
  const clearForm = () => {
    document.getElementById('create-game-form').reset()
  }

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

    if (game.legend !== '--Select Legend--' || game.legend !== '') {
      axios({
        url: `${apiUrl}/games`,
        method: 'POST',
        headers: {
          'Authorization': `Token token=${user.token}`
        },
        data: { game }
      })
        .then(() => msgAlert({
          heading: 'New Game!',
          message: messages.createGameSuccess,
          variant: 'success'
        }))
        .then(() => setGame({ legend: '', kills: '', damage: '', win: false }))
        .then(() => clearForm())
        .catch(() => msgAlert({
          heading: 'Game Create Failed!',
          message: messages.createGameFailure,
          variant: 'success'
        }))
    } else {
      msgAlert({
        heading: 'No Legend Selected',
        message: messages.noLegendSelected,
        variant: 'success'
      })
    }
  }
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} id="create-game-form">
      <FormGroup>
        <Label for="legendSelect">Legend Used:</Label>
        <Input type="select" name="legend" id="legendSelect">
          <option>--Select Legend--</option>
          {allLegends}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="kills">Kills:</Label>
        <Input type="text" name="kills" id="kills" />
        <Label for="damage">Damage Done:</Label>
        <Input type="text" name="damage" id="damage" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name='win' id='win-checkbox' defaultChecked={false} />
          Win
        </Label>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default CreateGameForm
