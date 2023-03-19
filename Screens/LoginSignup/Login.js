import { View, Text, ToastAndroid, ScrollView, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Loginimg from '../../assets/Loginimg.jpg'



export default function Login() {

  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const Login = () => {
    ToastAndroid.show("Loading...."+email + Password, ToastAndroid.SHORT)
  }

  const Signup = () => {
    ToastAndroid.show("please wait it may took some time", ToastAndroid.SHORT)
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
            <TextInput placeholder="Password" style={{ width: "100%", paddingLeft: 30 }} onChangeText={newText => setPassword(newText)}/>
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
  }
})