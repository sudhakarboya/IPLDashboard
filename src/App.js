import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import TeamCard from './components/TeamCard'

const App = () => (
  <BrowserRouter>
    <TeamCard/>
    <Home/>
    <Switch>
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
    <Home />
  </BrowserRouter>
)

export default App
