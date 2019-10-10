import React, { Component } from 'react'
import Block from '../../images/block.jpg'
import Slide from 'react-reveal'
import Particles from 'react-particles-js'
import PieChart from '../ui/pichart'
import encrypt from '../../images/encrypt.png'
import Arrow from '../../images/next-step-arrow.svg'
import ArrowDown from '../../images/next-step-arrow-down.png'
import User from '../../images/user.png'
import Distribute from '../../images/tar-ico-how-distributed.png'
import BlockChain from '../../images/blockchain.png'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { Element } from 'react-scroll'
import AppBar from '../ui/appbar'
import { firebase } from '../../firebase'
import ES1 from '../../images/es1.png'
import ES2 from '../../images/es2.png'
import ES3 from '../../images/es3.png'
import ES4 from '../../images/es4.png'
import { Pie3D } from 'react-pie3d'

class Home extends Component  {


    render(){

        console.log(this.props.user)
        
        return(
            <>
            

            <Element name="home">
            <section className="sec-home d-flex align-items-center justify-content-center" style={{minHeight : "100vh",
               // background : ` url(${Block}) , linear-gradient(to right,rgba(0,0,0),rgba(66,166,187))` ,
               
            }}>
           
            <Slide top>
            <div style={{marginTop:"-20px"}}>
            <div className="block-heading text-center" style={{display:"block"}}>
                BlockItIn
            </div>
            <div className="text-capitalize text-center" style={{fontSize:"30px",color:"white",fontWeight:"600",marginTop:"-10px"}}>
                digital blockchain based locker and escrow dapp
            </div>
            </div>
            </Slide>
            
            </section>
            </Element>

            <Element>
            <section className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="text-capitalize" style={{color:"gray"}}>most advanced digital locker dapp</h3>
                            <div className="mt-3">
                            BLOCK-IT-INN is a decentralized alternative to 1Password. 
                            Keep your passwords and credit cards secured with the power of Blockstack.
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4">
                            <img src={ES1} className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 style={{color:"gray"}}>
                                SECURE
                            </h3>
                            <div className="mt-3">
                                BlockItIn runs exclusively on your device (client-side). 
                                There are no central servers that can be hacked or breached.
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        
                        <div className="col-12 col-md-6">
                            <h3 style={{color:"gray",textAlign:"right"}}>
                                DECENTRALIZED
                            </h3>
                            <div className="mt-3 text-right">

                            You control where your data is hosted. BlockItIn does not store or replicate user data.


                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src={ES2} className="img-fluid" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4">
                            <img src={ES4} className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 style={{color:"gray"}}>
                                SHAREABLE
                            </h3>
                            <div className="mt-3">
                            Be sure that only you and your teammates have access to your passwords and logins.
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                            <h3 style={{color:"gray", textAlign:"right"}}>
                                ENCRYPTED
                            </h3>
                            <div className="mt-3 text-right">
                            Your data is end-to-end encrypted with keys that only you hold.
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src={ES3} className="img-fluid" />
                        </div>
                        
                    </div>
                </div>
            </section>
            </Element>

            <Element name="why">
            <section className="p-5" style={{background : "#20115b"}}>
                <div className="container">
                    <Fade delay={500}>
                    <div className="row mb-5 ">
                        <div className="col common-heading text-center" style={{color:"black"}}> 
                            Why You Need Us?
                        </div>
                    </div>
                    </Fade>
                    <div className="row align-items-center">
                        <Zoom delay={500}>
                        <div className="col-12">
                            <PieChart />
                        </div>
                        </Zoom>

                        <Slide right delay={1000}>
                        <div className="col-12 text-center mt-4 text-justify" style={{fontSize:"20px", color:"white" ,letterSpacing:"1.2px"}}>
                        Blockchain storage is thought to be more secure than centralized storage because the data 
                        is spread out across many data points. Distributed storage is less likely to be universally 
                        hit by invasive malware. In addition, 
                        the redundancy built into these systems protects against data loss from all sorts of events.
                        </div> 
                        </Slide>
                    </div>
                    <div className="row">
                        
                    </div>
                </div>
            </section>
            </Element>

            <Element name="about">
            <section className="p-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col text-center">
                            <div className="common-heading">
                                About Us
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{fontSize:"20px",letterSpacing:"1.2px"}}>
                        Cloud computing brought us the convenience of being able to access our data from anywhere. 
                        From any device. It also brought with it the risk of exposing our most personal information. 
                        BlockItInn continues the convenience of cloud computing but plugs the security and privacy gaps left by 
                        large tech companies.BlockItInn provides the tools to help you keep your data private and secure. 
                        Don't compromise just because it's what everyone else is doing.

                        </div>
                    </div>
                </div>
            </section>
            </Element>


            <Element name="how">
            <section className="section-how p-5" style={{background:"#041845"}}>
                <div className="container">
                    <Slide bottom>
                    <div className="row mb-5">
                        <div className="col text-center common-heading" style={{color:"white"}}>
                            How It Works
                        </div>
                    </div>
                    </Slide>
                    <div className="row">
                        <Zoom delay={200}>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img className="img-fluid" src={User} style={{height:"150px"}}></img>
                            <div className="mt-3" style={{fontSize:"30px", color:"white"}}>
                                user
                            </div>
                        </div>
                        </Zoom>
                        <Zoom delay={400}>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img 
                            src={Arrow}
                            alt="triangle with all three sides equal"
                            height="87px"
                            width="100px" />
                        </div>
                        </Zoom>
                        
                        <Zoom delay={600}>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img className="img-fluid" src={encrypt} style={{height:"150px"}}></img>
                            <div className="mt-3" style={{fontSize:"30px", color:"white"}}>
                                Encrypted File
                            </div>
                        </div>
                        </Zoom>

                        <Zoom delay={800}>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img 
                            src={Arrow}
                            alt="triangle with all three sides equal"
                            height="87px"
                            width="100px" />
                        </div>
                        </Zoom>

                        <Zoom delay={1000}>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img className="img-fluid" src={Distribute} style={{height:"150px"}}></img>
                            <div className="mt-3" style={{fontSize:"30px", color:"white"}}>
                                Distribute
                            </div>
                        </div>
                        </Zoom>
                        
                        </div>

                        <div className="row mt-5">
                        
                        <Zoom delay={1000}>
                        <div className="col-12 text-center mb-3">
                            <img 
                            src={ArrowDown}
                            alt="triangle with all three sides equal"
                            height="100px"
                            width="100px" />
                            
                        </div>
                        </Zoom>
                        </div>

                        <div className="row mt-5">
                        <Zoom delay={1200}>
                        <div className="col-12 text-center mb-3">
                            <img className="" src={BlockChain} style={{height:"250px"}}></img>
                            <div className="mt-3" style={{fontSize:"30px", color:"white"}}>
                                Blockchain Storage
                            </div>
                        </div>
                        </Zoom>
                        </div>
                    
                </div>
            </section>
            </Element>

            
            
            </>
        )
    }

    
}

export default Home