import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

const CreateGameForm = ({ user, legends, msgAlert }) => {
  const [game, setGame] = useState({ legend: '', kills: '', damage: '', win: false })
  console.log('this is legends in CreateGameForm:', legends)
  const allLegends = legends.map(legend => {
    return (<option value={legend._id} key={legend._id}>{legend.name}</option>)
  })

  const handleChange = event => {
    event.persist()
    setGame(prevGame => {
      const updatedField = event.target.name === 'win' ? { win: !prevGame.win } : { [event.target.name]: event.target.value }
      console.log('this is updatedField in create', updatedField)
      const editedGame = Object.assign({}, prevGame, updatedField)
      return editedGame
    })
  }
  const handleSubmit = event => {
    console.log('the game is the game', game)
    event.preventDefault()

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
  }
  console.log('this is handlechange', handleChange, game)
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <FormGroup>
        <Label for="legendSelect">Legend Used:</Label>
        <Input type="select" name="legend" id="legendSelect">
          <option>--Select Legend--</option>
          {allLegends}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Kills:</Label>
        <Input type="text" name="kills" id="kills" />
        <Label for="exampleText">Damage Done:</Label>
        <Input type="text" name="damage" id="damage" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name='win' checked={game.win} />
          Win
        </Label>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default CreateGameForm
