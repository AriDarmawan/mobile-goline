/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import FormPatient from './component/FormPatient';


export default class App extends Component {
  state = {
    name: '',
    sex: '',
    dataPatient: '',
  }
  handleName = (text) => {
      this.setState({ name: text })
  }
  handleSex = (text) => {
      this.setState({ sex: text })
  }  

  postData = () =>{
    return fetch(`http://192.168.88.14:2000/patient`, {
      method: 'POST',
      // headers: {
      //   "Accept": 'application/json',
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        patient_name: this.state.name, 
        sex: this.state.sex,
      })
    });
  }

  login = async () => { //const dataPatient = await 
    try {
      const dataPatient = await fetch(`http://192.168.88.14:2000/patient`, {
        method: 'POST',
        // headers: {
        //   "Accept": 'application/json',
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify({
          patient_name: this.state.name, 
          sex: this.state.sex,
        })
      });

      const fetchPoli =  await fetch('http://192.168.88.14:2000/poli', {
            method: 'GET'
        })
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     console.log(responseJson);
        //     // this.setState({
        //     //   data: responseJson
        //     // })
        // })
        .catch((error) => {
            console.error(error);
      });
      const poli = fetchPoli.json();
      // this.setState({ dataPatient : patientJson })
      // .then( (response) => {response.json} )
      // .then((responseJson) => {
      //   console.log(responseJson);
      //   this.setState({ dataPatient : responseJson })
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
      console.log(poli.body);
      alert(poli.body);

    //   fetch(`http://localhost:1000/create_patient`, {
    //   method: 'POST',
    //   // headers: {
    //   //   "Accept": 'application/json',
    //   //   'Content-Type': 'application/json',
    //   // },
    //   body: JSON.stringify({
    //     patient_name: this.state.name, 
    //     sex: this.state.sex,
    //   })
    // });
    } catch (err){
      alert("err", err)
    }
    

    // console.log(this.state.dataPatient);
    // alert(`Success\nname: ${dataPatient.data.patient_name} \n sex: ${dataPatient.data.sex}`)
    // alert("success")

  }
  render() {
    return (
      <FormPatient handleName={this.handleName} handleSex={this.handleSex} inputPatient = {this.login} name={this.state.name} sex={this.state.sex} />
    );
  }
}

