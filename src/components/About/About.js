import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import History from '../History/History.js'
import Contact from '../Contact/Contact.js'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path ="/about/history" component={History} />
            <Route path ='/about/contact' component={Contact} />
            <Route path ='/about' render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                
                Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
                
                Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                </p>
              </div>
            )}
            />
          </Switch>
        </div>
      </div>
    )
  }
}