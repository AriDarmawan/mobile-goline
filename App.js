/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import FormPatient from './component/FormPatient';
import Axios from 'axios';
import FormData from 'form-data';

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
    let dataParams = new FormData();
    dataParams.append("patient_name", "ujang");
    dataParams.append("sex", "Male");

    return fetch(`http://192.168.88.14:2000/patient`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        patient_name: this.state.name, 
        sex: this.state.sex,
      })
    });
  }

  login = async () => { 
    try {
      const fetchPoli = await fetch(`http://localhost:1000/create_patient`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `patient_name=${this.state.name}&sex=${this.state.sex}`,
        })
    } catch (err){
      alert("err", err)
    }
  }
  render() {
    return (
      <FormPatient handleName={this.handleName} handleSex={this.handleSex} inputPatient = {this.login} name={this.state.name} sex={this.state.sex} />
    );
  }
}

