import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const CreateGameForm = (user, props) => {
  console.log('this is legends in CreateGameForm:', user.legends)
  return (
    <Form>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="legendSelect">Legend Used:</Label>
        <Input type="select" name="select" id="legendSelect">
          <option>--Select Legend--</option>
          <option>Bangalore</option>
          <option>Bloodhound</option>
          <option>Caustic</option>
          <option>Crypto</option>
          <option>Gibraltar</option>
          <option>Lifeline</option>
          <option>Loba</option>
          <option>Mirage</option>
          <option>Octane</option>
          <option>Pathfinder</option>
          <option>Rampart</option>
          <option>Revenant</option>
          <option>Wattson</option>
          <option>Wraith</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          Its a bit lighter and easily wraps to a new line.
        </FormText>
        <FormGroup check disabled>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Win
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default CreateGameForm
