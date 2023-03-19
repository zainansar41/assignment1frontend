import { View, Text, ToastAndroid, ScrollView, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Loginimg from '../../assets/Loginimg.jpg'

import { loginroute, signuproute } from '../../Hooks'



export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const Login = () => {
    loginroute(email, Password)
      .then((result) => {
        if (result.status === 400) {
          ToastAndroid.show("Email not found! try Sign UP", ToastAndroid.LONG)
        }
        else {
          global.userID = result.data.user._id
          ToastAndroid.show("redirecting to Notes", ToastAndroid.LONG)
          navigation.navigate("addnote")

        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const Signup = () => {
    signuproute(email, Password)
      .then((result) => {
        if (result.status === 400) {
          ToastAndroid.show("Email already exists! try Login", ToastAndroid.LONG)
        }
        else {
          global.userID = result.data.user._id
          ToastAndroid.show("Registration Successfull", ToastAndroid.LONG)
          navigation.navigate("addnote")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <ImageBackground source={Loginimg} style={styles.background}>
        <View style={{ flex: .3, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Notes App</Text>
        </View>
        <View style={{ flex: .4, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="Email" style={{ width: "100%", paddingLeft: 30 }} onChangeText={newText => setEmail(newText)} />
          </View>
          <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <TextInput placeholder="Password" style={{ width: "100%", paddingLeft: 30 }} onChangeText={newText => setPassword(newText)} />
          </View>
          <TouchableOpacity style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} onPress={Login} >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "orange" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '80%', height: 50, backgroundColor: 'orange', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} onPress={Signup}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#fff" }}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    marginTop: 20
  }
})