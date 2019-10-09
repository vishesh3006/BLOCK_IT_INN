import React , { Component } from 'react'
//import bcrypt from 'bcryptjs'
//import { firebaseDatabase } from './firebase'
//import { Buffer } from 'buffer';
import block from '../../abis/B_lockItInn.json';
import CryptoJS from 'crypto-js';
import Web3 from 'web3';
import Slide from 'react-reveal/Slide'

var axios = require('axios');
var ipfsClient = require('ipfs-http-client');
var ipfs = ipfsClient({ host:'ipfs.infura.io', port: 5001, protocol: 'https' });

class User extends Component{

 /* async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockchainData();
  }*/

  state={
    title : null,
    //file : null,
    data : "",
    contract : null,
    account : '',
    hash : '',
    email : '',
    secureData : false,
    getData : false,
    storefile : false,
    storeData : false,
    dataSuccess : false,
    dataValue : ""
  }

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  } 

  componentDidMount(){
    console.log("bhd")
    console.log(this.props)
      const email = this.props.user.email
    this.setState({
      email : email
    })
    
    
  }


  async loadBlockchainData(){
    const web3 = window.web3
    const account = await web3.eth.getAccounts()
    this.setState({account: account[0]})
    const networkId = await web3.eth.net.getId()
    const networkData = block.networks[networkId]
    if(networkData){
      const abi = block.abi;
      const address = networkData.address;
      console.log(address);
      const contract = web3.eth.Contract(abi, address)
      this.setState({contract})
    }else{
      window.alert('Smart contract not deployed')
    }
  }

  async loadWeb3() {
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }else{
      window.alert('Please use Metamask!')
    }
  }

  

  fileCapture = (event) => {
    const title = document.getElementById("title").value;
    event.preventDefault();
    const file = event.target.files[0];

    const reader = new window.FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      
      console.log(event.target.result);
      const key = this.state.account + title + this.state.email
      console.log(key)
      var encrypted = CryptoJS.AES.encrypt(event.target.result, key).toString();
      this.setState({data: encrypted});
      console.log(this.state.data);
      
    }
  }

  onSubmit2 = () => {
    console.log("hey there")
  }

  onSubmit = (event) => {
    const title = document.getElementById('title').value;
    this.setState({title});
    console.log("submitting the form...");
    event.preventDefault();
    ipfs.add(this.state.data, (error,result) => {
      console.log("ipfs result", result);
      const Hash = result[0].hash;
      if(error){
        console.error(error);
        return;
      }
      console.log(Hash, this.state.title, this.state.contract);
      this.state.contract.methods._setHash(this.state.title, Hash).send({from: this.state.account})
    })
  }

  toggleSecureData = () => {

    let x = this.state.secureData;
    this.setState({
      secureData  :!x
    })
  }

  toggleGetData = () => {
    let x = this.state.getData;
    this.setState({
      getData : !x
    })
  }

  toggleData = () => {
    
    this.setState({
      storeData : true,
      storefile : false
    })
  }

  toggleFile = () => {
    this.setState({
      storeData : false,
      storefile : true
    })
  }
   

  async getData() {
    if(document.getElementById("cp")){
        const cp = document.getElementById("cp").value;
        const key = this.state.account + cp + this.state.email;
        console.log(cp);
        const Hash = await this.state.contract.methods._getHash(cp).call()
        console.log(Hash)
        var self = this;
        axios.get("https://ipfs.infura.io/ipfs/" + Hash)
        .then(function(result) {
          const decrypted = CryptoJS.AES.decrypt(result.data, key).toString(CryptoJS.enc.Latin1);
          console.log(decrypted);
          self.setState({dataSuccess: true, dataValue: decrypted});
       })
      
    }
  }

  

  render(){
    console.log("hey")

    let secureData  = null

    if(this.state.secureData){

      secureData = (
        <Slide top>
        <div className="row mt-5">
          <div className="col">
             <div className="input-wrapper">
                <input className="py-3 px-2 " name="title" id="title" type="text" style={{width:"100%"}} placeholder="Enter key"></input>
             </div>
          </div>
        </div>
        <div className="row mt-5">
            <div className="col">
              <button className="btn btn-block btn-outline-success" onClick={this.toggleData}>
                Enter data
              </button>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col">
              <button className="btn btn-block btn-outline-success" onClick={this.toggleFile}>
                Choose File
              </button>
            </div>
        </div>
        {this.state.storeData ?
        <div className="row mt-5">
          <div className="col">
            <div className="input-wrapper">
              <textarea className="py-3 px-2" type="text" rows="6"  style={{width:"100%"}} placeholder="Enter data"></textarea>
            </div>
          </div>
        </div> : ''}
        {this.state.storefile ? 
        <div className="row mt-5">
          <div className="col">
            <div className="input-wrapper">
              <input className="py-3 px-2" type="file" style={{width:"100%"}} onChange={this.fileCapture} placeholder="Enter data"></input>
            </div>
          </div>
        </div> : ''}


        {this.state.storefile ? 
        <div className="row mt-4">
          <div className="col">
            <button className="btn btn-outline-danger py-3 px-2 btn-block" onClick={this.onSubmit}>Secure</button>
          </div>
        </div> : 

        <div className="row mt-4">
          <div className="col">
            <button className="btn btn-outline-danger py-3 px-2 btn-block" onClick={this.onSubmit2}>Secure</button>
          </div>
        </div>
      }
        </Slide>
      )
      

    }

    let getData = null

      if(this.state.getData){
        getData = (
          <Slide top>
          <div className="row mt-5">
            <div className="col">
               <div className="input-wrapper">
                <input className="py-3 px-2 "  name="cp" id="cp" type="text" style={{width:"100%"}} placeholder="Enter key"></input>
              </div>
            </div>
          </div>
          <div className="row mt-4">
          <div className="col">
            <button className="btn btn-outline-danger py-3 px-2 btn-block" onClick={this.getData}>Get Data</button>
          </div>
          </div>
          {this.state.dataSuccess ? 
            <div className="row mt-5">
              <div className="col">
                <div className="input-wrapper">
                  <textarea className="py-3 px-2" type="text" rows={10} readOnly value={this.state.dataValue} style={{width:"100%"}}></textarea>
                </div>
              </div>
            </div>
              
            : '' }
        
          </Slide>
        )
      }

    return(
      <>
        <section className="p-5 sec-user">
          <div className="container-fluid">
            <div className='row'>
                <div className="col-12 col-md-6 text-center">
                  <div className="card p-4 card-hover" onClick={this.toggleSecureData}>
                  <h1>Secure New Data</h1>
                  </div>
                  {secureData}
                </div>
              
                <div className="col-12 col-md-6 text-center">
                  <div className="card p-4 card-hover" onClick={this.toggleGetData}>
                <h1>Get Existing Data</h1>
                </div>
                {getData}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default User