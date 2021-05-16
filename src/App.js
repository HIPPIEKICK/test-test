import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { RoomsList } from 'RoomsList'
import { TestWhereby } from 'TestWhereby'
import { Hello } from 'Hello'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Hello />
          <RoomsList />
        </Route>
        <Route path="/rooms/:id">
          <TestWhereby />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
