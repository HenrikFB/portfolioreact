import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from './linkedid.png';

class Contact extends Component{
    render(){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Henrik Fog Bunzel</h2>
                        <img
                            //src="http://ganesha-frankfurt.de/ganesha-admin//repository/avt.png"
                             src={logo}
                            
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            I'm interested in helping with social innovation projects or others charity projects.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        Send email first
                                    </ListItemContent>
                                </ListItem>
                            
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        henrik@fogbunzel.dk
                                    </ListItemContent>
                                </ListItem>

                                {/** 
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        henrik@fogbunzel.dk
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        MySkypeID
                                    </ListItemContent>
                                </ListItem>
                                */}

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;