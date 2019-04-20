import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
//import { timingSafeEqual } from 'crypto';
import logo from './linkedid.png';

class Competencies extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                //project 1
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">React</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        This portfolio webpage is based on React and React-MDL. The library can be found on: https://tleunen.github.io/react-mdl/ . Note: It is not really responsive for cards.
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Angular</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            I build a landing page/first simple version for testing the idea for an application. The functionality was like a blog and multi sided vendor platform. Firebase was used for Authentication and CRUD. Google api for maps. Geo queries for find nearest items.
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Angular</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            Image gallery with location. Extracting EXIF data from the images.
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">.Net Core 2.0</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        Image gallery and azure
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">.Net Core 2.0</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        Webpage about an university. See Microsoft own documentation. 
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Projects</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            Created different projects based on bootstrap, html/css, javascript, MySQL, and PHP.  
                        </div>
                    </div>
                </div>              
            )
        } else if(this.state.activeTab === 1) {
            return(
                //https://codepen.io/anon/pen/pBpdyj
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Android app</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            A travel app. Finding images on a map where I used Google maps api. Gallery shown as a list. Firebase. 
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Android app</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            Fun with google vision. Uploading an image and extracting properties out. 
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Flutter</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            Cross platform mobile development. Authentication and CRUD with firebase.
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Flutter</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        Just checking it out. Different UI layout, testing Google maps api.
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Unity and AR</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        Mobile application with Unity and augmented reality. See unity and augmented reality sections. 
                        </div>
                    </div>        
                </div>
            )    
        } else if(this.state.activeTab === 2) {
            return(
                //unity and augmented reality
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Linear algebra, Unity, AR</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        Mathematics and algorithms needed to implement marker based Augmented Reality systems. Relevant concepts from Linear Algebra, such as linear transformations, change of basis, dot and cross product, solving systems of equations. Linear least squares, Homogeneous coordinates, Pinhole projection equation, Camera intrinsics and extrinsics, Homography and homography estimation with the DLT algorithm, Linear camera calibration.
                        </div>
                    </div>
                
                
                <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Unity and AR</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                    Marketing application for showing different cars models. Used Wit.ai for voice input so the user could says”open the door” and then the door in unity would open.
                    </div>
                </div>
                <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Unity and AR</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                    Marketing application for a house. Used a poster with different virtual buttons so the user could see different aspects of the house and change some settings (like light).
                    </div>
                </div>
                <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Unity and hardware</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                    Racing car game with a gyroscope mpu6050 on a 3d printed steering wheel. See the page Cases and then the Volkswagen project.
                    </div>
                </div>
                <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Unity and hardware</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                    Build a platform game with an Arduino joystick board.
                    </div>
                </div>
            </div>
            )    
        } else if(this.state.activeTab === 3) {
            return(
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Arduino</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        I normal prototype with Arduino before PCB. I know c++, different sensors, circuit and different libraries.
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">PCB</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        In later iteration I am using PCB. The circuit can be designed from Schematic. 
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">3D Modelling and Printing:</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                        3D modelling in Rhino and Autodesk fusion 360. 
                        </div>
                    </div>
                </div>
            )    
        }  else if(this.state.activeTab === 4) {
            return(
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">3D Modelling</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            3D modelling in Rhino and Autodesk fusion 360.  
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">Adobe products</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            Photoshop, InDesign, and Illustrator
                        </div>
                    </div>
                    <div class="mdl-cell mdl-cell--4-col card-lesson mdl-card mdl-color-red mdl-shadow--2dp"> 
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">The history, theory and practice of product design</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            I had created products in: Bauhaus, Ulm, Postmodern, and Streamline. 
                        </div>
                    </div>
                </div>
            )

        }
    }
   render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Web</Tab>
                    <Tab>Mobile</Tab>
                    <Tab>Unity & AR</Tab>
                    <Tab>Hardware</Tab>
                    <Tab>Design</Tab>
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

export default Competencies;


/**
 * Mdl card media:
 * https://codepen.io/kybarg/pen/rVvgag
 * http://www.tutorialspark.com/Google_MaterialDesignLite_Tutorials/MDL_Material_Design_Lite_Cards.php
 * https://webdesign.tutsplus.com/tutorials/learning-material-design-lite-cards--cms-24633 
 * https://www.tutorialspoint.com/materialdesignlite/materialdesignlite_cards.htm
 */



 /**
  * fra videoen: ikke responsiv.
  * <div className="projects-grid"> 
                          
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        This portfolio webpage is build by React
                    </CardText>
                </Card>
                              
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project #2</CardTitle>
                    <CardText>
                        This portfolio webpage is build by React
                    </CardText>
                </Card>
                
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 
                    'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React Project #3</CardTitle>
                    <CardText>
                        This portfolio webpage is build by React
                    </CardText>
                </Card>
             </div>       
  * 
  * 
  */