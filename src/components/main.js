import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Cases from './cases';
import Competencies from './competencies';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/cases" component={Cases}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/competencies" component={Competencies}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;