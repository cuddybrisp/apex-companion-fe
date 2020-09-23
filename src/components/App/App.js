import React, { useState, useEffect, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import LegendBoard from '../LegendBoard/LegendBoard'
import CreateGameForm from '../CreateGameForm/CreateGameForm'
import ShowGames from '../ShowGames/ShowGames'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [legends, setLegends] = useState([])
  // const [games, setGames] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    setMsgAlerts([...msgAlerts, { heading, message, variant }])
  }
  useEffect(() => {
    axios({
      url: `${apiUrl}/legends`
    })
      .then(res => setLegends(res.data.legends))
      .catch(console.error)
  }, [])
  // useEffect(() => {
  //   axios({
  //     url: `${apiUrl}/games`
  //   })
  //     .then(res => setGames(res.data.games))
  //     .catch(console.error)
  // }, [])
  console.log('this is legends in App:', legends)
  return (
    <Fragment>
      <Header user={user} />
      {msgAlerts.map((msgAlert, index) => (
        <AutoDismissAlert
          key={index}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
        />
      ))}
      <main className="container">
        <Route path='/sign-up' render={() => (
          <SignUp msgAlert={msgAlert} setUser={setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn msgAlert={msgAlert} setUser={setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword msgAlert={msgAlert} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/new-games' render={() => (
          <CreateGameForm msgAlert={msgAlert} user={user} legends={legends} />
        )} />
        <AuthenticatedRoute user={user} path='/view-games' render={() => (
          <LegendBoard user={user} legends={legends} />
        )} />
        <AuthenticatedRoute user={user} path='/all-games' render={() => (
          <ShowGames user={user} legends={legends} />
        )} />
      </main>
    </Fragment>
  )
}

export default App
