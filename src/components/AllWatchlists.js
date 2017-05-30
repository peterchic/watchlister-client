// Receive a Watchlist as a prop,
// reach out to the API to find movies that are on that Watchlist based on the join table,
// Render out a list of all the movies using the Movie-Card component
// eventually something like this: this.state.movies.map( movie => <MovieCard movie={movie}/> )

import { Link, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import WatchlistShow from './WatchlistShow'
import CreateList from './CreateList'

export default function AllWatchlists(props) {
  const watchlistElements = props.watchlists.map((li,i) => 
      <li key={li.id}><Link to={`/watchlists/${li.id}`}><h1>{li.name}</h1></Link></li>)
 
   if (props.watchlists){
    return(
    <div>
      <div className="col-md-4">
        <h3>All Watchlists</h3>
        <ul>
          { watchlistElements }
        </ul>
          <Switch>
            <Route path="/watchlists/new" />
            <Route path="/watchlists" render={()=> <h1>You're at watchlists</h1>} />
          </Switch>
        </div>
      <div className="col-md-8">
        <Switch>
           <Route path="/watchlists/new" render={()=> <p>Trying to make new on the right</p>} />
            <Route exact path="/watchlists/:id" render={ ({match}) => {
              const watchlist = props.watchlists.find(watchlist => watchlist.id === parseInt(match.params.id))
              return <WatchlistShow watchlist={watchlist}/>
            } }/>
        </Switch>
        </div>
      </div>

    )
  } else 
    return <div><h1>LOADING.....</h1></div>
  }

