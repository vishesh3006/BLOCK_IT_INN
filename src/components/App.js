import React , { Component } from 'react'
//import bcrypt from 'bcryptjs'
//import { firebaseDatabase } from './firebase'
//import { Buffer } from 'buffer';
import block from '../abis/B_lockItInn.json';
import CryptoJS from 'crypto-js';
import Web3 from 'web3';

var axios = require('axios');
var ipfsClient = require('ipfs-http-client');
var ipfs = ipfsClient({ host:'ipfs.infura.io', port: 5001, protocol: 'https' });

class App extends Component{

  async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  state={
    title : null,
    //file : null,
    data : "",
    contract : null,
    account : '',
    hash : ''
  }

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
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
      const key = this.state.account + title;
      var encrypted = CryptoJS.AES.encrypt(event.target.result, key).toString();
      this.setState({data: encrypted});
      console.log(this.state.data);
      
    }
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

   

  async getData() {
    if(document.getElementById("cp")){
        const cp = document.getElementById("cp").value;
        const key = this.state.account + cp;
        console.log(cp);
        const Hash = await this.state.contract.methods._getHash(cp).call()
        console.log(Hash)
        axios.get("https://ipfs.infura.io/ipfs/" + Hash)
        .then(function(result) {
          var decrypted = CryptoJS.AES.decrypt(result.data, key).toString(CryptoJS.enc.Latin1);
          console.log(decrypted);
       })
    }
  }

  

  render(){
    return(
      <section className="p-5 bg-dark">
        <div className="container" style={{minHeight:"100vh"}}>
          <div className="row">
            <div className="col text-center">
              <input type="text" name="title" placeholder="Enter title" className="pl-3 pt-1" id="title"></input>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-3">
              <input type="file" className="pl-3 pt-1" onChange={this.fileCapture}></input>
             
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <button className="btn btn-outline-danger" onClick={this.onSubmit}>Submit</button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
             <input className="pl-3 pt-1" type="text" name="cp" id="cp" placeholder="enter key" placeholder="enter key here"></input>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <button className="btn btn-outline-danger" onClick={this.getData}>Get Data</button>
            </div>
          </div>
        </div>
        <div>
        {/* <iframe src="https://ipfs.infura.io/ipfs/QmTGREaPgvJKmUYMRYSREp7Rm7sohSS9rufr9YKMif4ckc" title="msg" width="400" height="400"></iframe> */}
        </div>
      </section>
    )
  }
}

export default App