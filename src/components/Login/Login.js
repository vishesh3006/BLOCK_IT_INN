import React , { Component } from 'react'
import LoginImage from '../../images/login.png'
import TextField from '@material-ui/core/TextField'
import { firebase } from '../../firebase'
import Particles from 'react-particles-js'
import { Button } from '@material-ui/core';

const particlesOpt = {
        particles : {
            number : {
                value : 150,
                density : {
                    enable : true,
                    value_area : 800
                }
            }
        }
}

class Login extends Component{

    state = {
        email : '',
        password : ""
    }

    loginHandler = () => {
        const email = this.state.email;
        const password = this.state.password;

        console.log(email)
        console.log(password)

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => {
            console.log("success")
            console.log(user)
        })
        .catch(err => {
            console.log("error")
            console.log(err)
        })

    }

    handleChange = (event,target) => {

        if(target === 'email'){
            this.setState({
                email : event.target.value
            })
        }else{
            this.setState({
                password : event.target.value
            })
        }
    }

    render(){

        return(
            <div>
               
                <div className="container p-5">
                    <div className="row mb-5">
                        <div className="col text-center common-heading" style={{ textTransform:'uppercase' }}>
                            Login
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                        <TextField
                            style={{width:"80%"}}
                            id="outlined-name"
                            label="Email"
                            //className={classes.textField}
                            //value={values.name}
                            onChange={(event) => this.handleChange(event,'email')}
                            margin="normal"
                            variant="outlined"
                        />
                        </div>
                    </div>
                    <div className="row">  
                        <div className="col text-center">
                        <TextField
                            style={{width : "80%"}}
                            id="outlined-name"
                            label="Password"
                            //className={classes.textField}
                            //value={values.name}
                            onChange={(event) => this.handleChange(event,'password')}
                            margin="normal"
                            variant="outlined"
                        />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <Button className="btn btn-block btn-outline-danger mx-auto" 
                            style={{width:"60%" ,background:"red"}}
                            onClick={this.loginHandler}>LOGIN</Button>
                        </div>
                    </div>
                </div>
            
                <Particles params={particlesOpt} style={{background : 'linear-gradient(to right,rgba(205,52,181),rgba(68,166,187))' ,position :"absolute" , top:"0" , left : "0", zIndex:"-10"}} />
               

            </div>
            
                
                    

            
        )
        
       
    }
}

export default Login