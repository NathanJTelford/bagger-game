import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bagger from '../src/components/bagger/Bagger';
import Home from '../src/components/home/Home';
import Landing from '../src/components/landing/Landing';

export default function routes() {
  return (
    <div>
        <Switch>
            <Route exact path ='/' component={Landing} />
            <Route exact path ='/home' component={Home} />
            <Route path='/bagger' component={Bagger} />
        </Switch>
      
    </div>
  )
}
