import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bagger from '../src/components/bagger/Bagger';
import Home from '../src/components/home/Home';

export default function routes() {
  return (
    <div>
        <Switch>
            <Route exact path ='/' component={Home} />
            <Route path='/bagger' component={Bagger} />
        </Switch>
      
    </div>
  )
}
