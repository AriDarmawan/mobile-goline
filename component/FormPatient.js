import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Picker } from 'react-native'

const FormPatient = (props) => {
     
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>
                Form input pasien Goline+
            </Text>
            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Name"
                placeholderTextColor = "#288AF9"
                autoCapitalize = "none"
                onChangeText = {props.handleName}/>
            
            <Picker style = {styles.picker} onValueChange = {props.handleSex}>
               <Picker.Item style={styles.sex} label = "Laki - laki" value = "Male" />
               <Picker.Item style={styles.sex} label = "Perempuan" value = "Female" />
            </Picker>
            {/* <Text style = {styles.sex}>{props.sex}</Text> */}
            
            <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                () => props.inputPatient()
                }>
                <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </View>
    )  
}
export default FormPatient

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#288AF9',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#288AF9',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }, 
   title : {
       color: '#288AF9',
       textAlign: 'center',
   },
   picker: {
       width : 150,
       marginLeft: 9,
       color: '#288AF9',
   },
   sex : {
        color: '#288AF9',
   }
})