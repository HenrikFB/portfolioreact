import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import logo from './linkedid.png';

class Landing extends Component{
    render(){
        return (
            <div style={{width: '100%', margin: 'auto', height: '100%'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={logo}
                        //"http://ganesha-frankfurt.de/ganesha-admin//repository/avt.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack IT Consulting</h1>
                        <hr/>
                        <p>Web | Mobile | Unity | AR | Hardware | Industrial design | Agile project management | UX | QA</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/henrik-fog-bunzel-894828a5/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/HenrikFB" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;