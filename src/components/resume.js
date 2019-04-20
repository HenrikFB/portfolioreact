import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 
import logo from './linkedid.png';
import Education from './education';
import Skills from './skills';

class Resume extends Component{
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={logo}
                                alt="avatar"
                                style={{height: '250px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Henrik Fog Bunzel</h2>
                        <h4 style={{color: 'grey'}}>It Consulting</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                        Hi! I’m a master student in IT – Product development on computer science institute. 
I am very passionate about seeing a solution develop from idea to finished solution with the purpose of improving the situation. My spare time is spent on various projects where I am interested in entrepreneurship. Currently, I am working on my own personal project. It is a project where technology supports a social innovation. I am very passionate about projects where technology enables a social impact on the world and people.


                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Denmark, Aarhus N, 8200</p>
                        <h5>Phone</h5>
                        <p>Send email first :)</p>
                        <h5>Email</h5>
                        <p>henrik@fogbunzel.dk</p>
                        <h5>LinkedIn</h5>
                        <p>www.hello.dk</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                            endYear={2022}
                            schoolName="Master in IT - Product development"
                            schoolDescription="Started in january 2019"
                        />
                        <Education
                            startYear={2015}
                            endYear={2018}
                            schoolName="Bachelor in IT - Product development"
                            schoolDescription="Three years bachelor"    
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <p>See the 'Cases' and 'Competence' pages in the above top menu</p>
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Personal skills</h2>
                        <Skills
                            skill="Integrity"
                            progress={100}
                        />
                        <Skills
                            skill="Perseverance"
                            progress={100}
                        />
                        <Skills
                            skill="Conscientiousness"
                            progress={100}
                        />
                        <Skills
                            skill="Coding with one finger :) "
                            progress={30}
                        />
                        <Skills
                            skill="Irresponsible"
                            progress={2}
                        />
                        
                        <Skills
                            skill="Pessimistic"
                            progress={2}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;