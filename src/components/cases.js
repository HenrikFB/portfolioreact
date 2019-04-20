import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
//import { timingSafeEqual } from 'crypto';
import logo from './linkedid.png';
import VWLogo from './images/VW/VWLogo.png';
import prototypedrone from './images/Drone/prototypedrone.PNG';
import userone from './images/Telemed/userone.PNG';
import usertwo from './images/Telemed/usertwo.PNG';
import maskine from './images/Telemed/maskine.jpg';
import bog from './images/Telemed/bog.jpg';
import diagram from './images/Telemed/diagram.jpg';
import papirs from './images/Telemed/papirs.JPG';
import ScenarieMedHuller from './images/Badminton/ScenarieMedHuller.png';
import ScenarieModulary from './images/Badminton/ScenarieModulær.png';
import userbadminton from './images/Badminton/userbadminton.jpg';
import wiresBadminton from './images/Badminton/wiresBadminton.jpg';
import blackboardblock from './images/Blockchain/blackboardblock.jpg';
import processblock from './images/Blockchain/processblock.jpg';
import prototypebuildblock from './images/Blockchain/prototypebuildblock.jpg';
import scenariumblock from './images/Blockchain/scenariumblock.jpg';
import singleblock from './images/Blockchain/singleblock.jpg';
import visualisationblock from './images/Blockchain/visualisationblock.PNG';
import componentsbachelor from './images/Bachelor/componentsbachelor.PNG';
import creativepotentialbachelor from './images/Bachelor/creativepotentialbachelor.PNG';
import gamedesignbachelor from './images/Bachelor/gamedesignbachelor.PNG';
import userbachelor from './images/Bachelor/userbachelor.PNG';

class Cases extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
               <div> 
                    <h1>Volkswagen</h1>
                    <img src={VWLogo} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <h3>Case:</h3>
                        <p>Unfortunately, the project is based on a non disclosure agreement. Therefore, I cannot tell more about it.</p>
                        <p>
                            I gained relevant experience in welfare technology because the solution had to improve something for the older user.
                        </p>
                        <h3>Learnings:</h3>
                        <ul>
                            <li>User requirements in welfare technology</li>
                            <li>Agile development</li>
                            <li>Agile project management</li>
                            <li>3D modelling, 3D Printing</li>
                            <li>c++</li>
                            <li>Hardware</li>
                            <li>PCB</li>
                            <li>Unity for simulation</li>
                        </ul>                        
             </div>       
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div> 
                    <h1>Drones</h1>
                    <img src={prototypedrone} 
                        alt="avatar"
                        className="avatar-img"
                    />
                    <p>Note: Early prototype. Next iteration the big black box on the body and a small pcb on the hand with the four LED (feedback)</p>
                    <h3>Case</h3>
                    <p>
                    This project presents how you can control a drone using hand gestures instead of the traditional interaction with the conventional game controller. Research is presented in areas about gestures and wearability and the knowledge from this is analyzed and used in the development. The design for the glove is presented, which includes the placement of sensors. The technical aspect in this paper includes the pcb, different components, circuit diagram, code snippets, and 3d printing. 
                    </p>
                    <p>
                    The goal for this project was to create an interactive glove, that was able to control a drone, using only hand gestures.The idea came from the fact, that there was almost no alternative to the game controller on a commercial level and any similar projects using only hand gestures was very limited. Using hand gestures also seemed much more natural for ﬂying a drone, then using a game controller. For the project we implemented an existing drone controller, to help us speed the process of making the interactive glove. Our drone prototype consisted of many different components, including a ﬂex sensor, Gyroscope, ATmega328 and digital potentiometers. The user uses the ﬂex sensor located on the thumb for throttle (which is up and down), and uses a gyroscope located on the hand for direction. This enables us to ﬂy a drone, using simple hand gestures and it worked quite well.
                    </p>
                    <h3>Learnings</h3>
                    <ul>
                        <li>User requirements in wearable technology</li>
                        <li>Hand gestures</li>
                        <li>Agile development</li>
                        <li>Agile project management</li>
                        <li>3D modelling, 3D Printing</li>
                        <li>c++</li>
                        <li>Hardware</li>
                        <li>PCB</li>
                    </ul>
             </div> 
            )    
        } else if(this.state.activeTab === 2) {
            return(
                //unity and augmented reality
                <div>
                    <h1>Telemed in the Dialysis department</h1>
                    <img src={userone} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <img src={usertwo} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <img src={maskine} 
                        alt="avatar"
                        className="avatar-img"
                        />
                
                    <h3>Case</h3>
                    <p >
                    This project is about the Dialysis Department at Skejby Hospital, a department that treats patients with kidney disease.The hospital is part of Aarhus’s new university hospital, and much research, education and cooperation with private companies take place there. In recent times the hospital have focused on getting patients home for dialysis. This however, presents a number of problems for the patients who needs help. The current problems lies in the lack of communication between the patient and the hospital, and the tools needed to proper help these home patients does simple not exist. Through an agile and user centered design process, a solution was found to solve these problems. The ﬁnal solution in this rapport, does not reﬂect any ﬁnished product, but an insight into a possible solution The system that was developed, could help patients with their problems in communication with the hospital. The system enables the nurses to visually communicate with their patients, instead of being limited by audio. The system would also help the patients in their diary and setting up their machine. Not only would this help the patients at home, but also the nurses who work at the hospital.
                    </p>
                    <h3>Learnings</h3>
                    <ul>
                            <li>User requirements in welfare technology</li>
                            <li>Agile development</li>
                            <li>Agile project management</li>
                            <li>Web development(prototype)</li>
                            
                    </ul>
                    <img src={bog} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <img src={diagram} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <img src={papirs} 
                        alt="avatar"
                        className="avatar-img"
                        />
                    
                </div>
            )    
        } else if(this.state.activeTab === 3) {
            return(
                <div>
                    <h1>Badminton</h1>
                    <img src={userbadminton} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <img src={wiresBadminton} 
                        alt="avatar"
                        className="avatar-img"
                        />
                    <h3>Case</h3>
                    <p>
                    We should improve and keep track of the badminton player training. Our solution improved the players physical stamina and reaction. How we set up our solution was based on the playing pattern of the badminton players. In our installations the player needs to move to Fore left/right, Mid left/right, Rear left, right during the exercise. It happens automatic so the trainer doesn’t need to feeding shuttlecocks but can spending the time on observing how the badminton player plays. 
                    </p>
                    <p>
                    During our exhibition a delegation from a school asked what the price was. The installations can also be built as a interactive playground or like “digital cones”. 
                    </p>
                    <p>
                        Contact me for more details. Only very early prototypes are shown here.
                    </p>

                    <h3>Learnings</h3>
                    <ul>
                            <li>User requirements in sports</li>
                            <li>Agile development</li>
                            <li>Agile project management</li>
                            <li>3D modelling, 3D Printing</li>
                            <li>c++</li>
                            <li>Hardware</li>
                            <li>PCB</li>
                    </ul>
                    <img src={ScenarieMedHuller} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <img src={ScenarieModulary} 
                        alt="avatar"
                        className="avatar-img"
                        />
                </div>
            )    
        } else if(this.state.activeTab === 4) {
            return(
                <div>
                    <h1>Blockchain</h1>
                    <img src={visualisationblock} 
                        alt="avatar"
                        className="avatar-img"
                        />
                          <img src={singleblock} 
                        alt="avatar"
                        className="avatar-img"
                        />
                    <h3>Case</h3>
                    <p>The objective of this project, is to get a deeper understanding in how blockchain could work in a public institutions. The blockchain library is a project that tries to help introduce people to an aspect of how blockchains technology could work in a public setting and how it might influence their lives. The goal of the project is to enable people to be social interactive with each others through the blockchain. Through research and development,  we gathered a better understanding of blockchain and were are able construct a prototype and evaluate it with several users on Dokk1. From what we could conclude from our data, users responded very positively to the concept, but there were still some uncertainty regarding the subject. Blockchain is an new technology that needs to be explored more, but to truly figure out if blockchain can be communicated through the library, further prototyping and research is needed.</p>
                    <h3>Learnings</h3>
                    <ul>
                        <li>User requirements in welfare technology</li>
                        <li>Agile development</li>
                        <li>Agile project management</li>
                        <li>3D modelling, 3D Printing</li>
                        <li>Laser cutting</li>
                        <li>c++</li>
                        <li>Hardware</li>
                        <li>Particle Photon</li>
                        <li>Social interaction</li>
                        <li>Interaction in public space</li>
                    </ul>

                    <img src={prototypebuildblock} 
                        alt="avatar"
                        className="avatar-img"
                        />
                          <img src={scenariumblock} 
                        alt="avatar"
                        className="avatar-img"
                        />
                          <img src={processblock} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <img src={blackboardblock} 
                        alt="avatar"
                        className="avatar-img"
                        />
                            
                </div>
            )    
        } else if(this.state.activeTab === 5) {
            return(
                <div>
                    <h1>Creativity in video games</h1>
                    <img src={userbachelor} 
                        alt="avatar"
                        className="avatar-img"
                        />                         
                    <h3>Case</h3>
                    <p>The abstract in the paper:</p>
                    <p>
                    This paper discusses how game elements in video games can have an eﬀect on creativity, by examining earlier works that look at what elements could be monumental in fostering creativity from the puzzle genre. We then go through a selection process of creative games and decide upon the platform genre, given that they scored high in our selection process and are simplistic in gameplay and presentation. The assumption is then tested by using Torrance test of creative thinking with verbal tasks on presumably creative and non-creative games, looking speciﬁcally at divergent thinking to ﬁnd out if it is possible to pinpoint elements which foster creativity. The results of these tests show positive results and we go on to look through the results and discuss the overall impact of diﬀerent elements and what to focus on in the speciﬁc games in terms of creative potential.
                    </p>
                    <p>For more details. Send an email.</p>
                    <h3>Learnings</h3>
                    <img src={componentsbachelor} 
                        alt="avatar"
                        className="avatar-img"
                        />
                         <img src={creativepotentialbachelor} 
                        alt="avatar"
                        className="avatar-img"
                        />
                         <img src={gamedesignbachelor} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <p>Reference: Wilawan Inchamnan et al. Design for creative activity: A framework for analyzing the creative potential of computer games. ICEC, 2014.</p>
                </div>
            )    
        }        
    }
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Volkswagen</Tab>
                    <Tab>Drones</Tab>
                    <Tab>Telemed</Tab>
                    <Tab>Badminton</Tab>
                    <Tab>Blockchain</Tab>
                    <Tab>Creativity in video Games</Tab>
                </Tabs>
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Cases;