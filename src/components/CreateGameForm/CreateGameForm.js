import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const CreateGameForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="legendSelect">Legend Used:</Label>
        <Input type="select" name="select" id="legendSelect">
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
          It's a bit lighter and easily wraps to a new line.
        </FormText>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default CreateGameForm
