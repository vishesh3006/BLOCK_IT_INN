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

class Home extends Component  {


    render(){
        
        return(
            <>
           
            <section className="d-flex align-items-center justify-content-center" style={{minHeight : "100vh",
                background : ` url(${Block}) , linear-gradient(to right,rgba(203,52,181),rgba(66,166,187))` ,
                backgroundSize:  "cover",
                backgroundPosition : "center"
            }}>
            <Slide top>
            <div className="block-heading">
                BlockItIn
            </div>
            </Slide>
            
            </section>

            <section className="bg-light p-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col common-heading text-center"> 
                            Why You Need Us?
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <PieChart />
                        </div>
                        <div className="col-12 col-md-6">
                        Blockchain storage is thought to be more secure than centralized storage because the data 
                        is spread out across many data points. Distributed storage is less likely to be universally 
                        hit by invasive malware. In addition, 
                        the redundancy built into these systems protects against data loss from all sorts of events.
                        </div> 
                    </div>
                </div>
            </section>

            <section className="section-how p-5" style={{background:"#041845"}}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col text-center common-heading" style={{color:"white"}}>
                            How It Works
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img className="img-fluid" src={User} style={{height:"150px"}}></img>
                        </div>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img 
                            src={Arrow}
                            alt="triangle with all three sides equal"
                            height="87px"
                            width="100px" />
                        </div>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img className="img-fluid" src={encrypt} style={{height:"150px"}}></img>
                        </div>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img 
                            src={Arrow}
                            alt="triangle with all three sides equal"
                            height="87px"
                            width="100px" />
                        </div>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img className="img-fluid" src={Distribute} style={{height:"150px"}}></img>
                        </div>
                        <div className="col-md-2 col-12 text-center mb-3">
                            <img 
                            src={ArrowDown}
                            alt="triangle with all three sides equal"
                            height="100px"
                            width="100px" />
                            
                        </div>
                        <div className="col-12 text-center mb-3">
                            <img className="" src={BlockChain} style={{height:"250px"}}></img>
                        </div>
                    </div>
                </div>
            </section>

            
            
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
                        <div className="col">
                        Cloud computing brought us the convenience of being able to access our data from anywhere. 
                        From any device. It also brought with it the risk of exposing our most personal information. 
                        BlockItInn continues the convenience of cloud computing but plugs the security and privacy gaps left by 
                        large tech companies.BlockItInn provides the tools to help you keep your data private and secure. 
                        Don't compromise just because it's what everyone else is doing.

                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }

    
}

export default Home