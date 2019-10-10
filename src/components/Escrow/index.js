import React  , { Component } from 'react'
import { firebase } from '../../firebase'

class Escrow extends Component{

    fileHandler = (event) => {
        console.log("hi")
        console.log(event.target.files[0])

        const file = event.target.files[0];

        const reader = new window.FileReader();

        reader.readAsText(file)

        reader.onload = (event) => {
            console.log(event.target.result)
        }

       console.log(this.props.user)
       console.log(this.props.user.uid)

       firebase.storage().ref(`/${this.props.user.email}/`)
       .child(file.name).getDownloadURL((url) => {
           console.log(url)
       })
    }

    render(){
        return(
            <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        HARSHIT
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        hgoel51@gmail.com
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input type="file" onChange={(event) => this.fileHandler(event)}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Escrow