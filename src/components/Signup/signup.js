import React , { Component } from 'react'
import LoginImage from '../../images/login.png'
import TextField from '@material-ui/core/TextField'
import { firebase } from '../../firebase'

class SignUp extends Component{

    state = {
        email : '',
        password : ""
    }

    handleSubmit = () => {
        console.log("hi")
        const dataToSubmit = {}

        const email = this.state.email;
        const password = this.state.password;

        dataToSubmit['email'] = email;
        dataToSubmit['password'] = password;

        console.log(dataToSubmit);
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => {
            console.log("user craeted")
            console.log(user)

        })
        .catch(err => {
            console.log("error")
            console.log(err)
        })
    }

    handleChange = (event,target) => {

        if(target === 'email'){
            this.setState({email : event.target.value})
        }
        else{
            this.setState({
                password : event.target.value
            })
        }
    }

    render(){

        return(
            <section className="bg-secondary" style={{minHeight:"100vh"}}>
                <div className="container-fluid" style={{minHeight:"100vh"}}>
                    <div className="row align-items-ceter" style={{minHeight:"100vh",padding:"0"}}>
                        <div className="col-12 col-md-7" style={{
                            background: `url(${LoginImage})`,
                            backgroundSize:"cover",
                            backgroundPosition:"center",
                            minHeight:"100vh"
                        }}>

                        </div>
                        <div className="col-12 col-md-5 bg-light text-center" style={{minHeight:"100vh"}}>
                            <div className="row">
                                <div className="col">
                                <h4 className="">SignUp</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <TextField
                                id="outlined-name"
                                label="email"
                                value={this.state.email}
                                onChange={(event) => this.handleChange(event,'email')}
                                margin="normal"
                                variant="outlined"
                                style={{width:"60%"}}
                                />
                                <TextField
                                id="outlined-name"
                                label="password"
                                //className={classes.textField}
                                value={this.state.password}
                                onChange={(event) => this.handleChange(event,'password')}
                                margin="normal"
                                variant="outlined"
                                style={{width:"60%"}}
                                />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <button className="mx-auto btn btn-outline-danger btn-block" style={{width:"60%"}} 
                                        onClick={this.handleSubmit}
                                    >SignUp</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        )
        
       
    }
}

export default SignUp