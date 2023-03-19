import { View, Text, ToastAndroid, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getnotesroute } from '../../Hooks'

export default function ViewNote({ navigation }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getnotesroute(global.userID)
      .then(result => {
        if (result.status === 400) {
          ToastAndroid.show("Error in Loading Note", ToastAndroid.LONG)
        }
        else {
          setNotes(result.data.notes)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  const addnoteBTN = () => {
    navigation.navigate('addnote')
  }

  const ShowNote = (note) => {

  }


  const addElipse = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '....' : str;
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ marginLeft: 40, flex: .4, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <TouchableOpacity style={{ height: 50, width: 100, backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }} onPress={addnoteBTN}>
          <Text style={{ color: '#fff', fontWeight: '900', fontSize: 18 }}>Add Note</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View><Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '700', color: 'orange' }}>Your Notes</Text></View>

        {notes.length > 0 ? (
          notes.map(note =>
            <View key={note._id}>
              <TouchableOpacity style={{ marginTop: 50, margin: 20, height: 200, backgroundColor: 'orange', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll' }} onPress={() => {
                Alert.alert("Note", "Title: " + note.title + "\nDescription: " + note.description)
              }
              }>
                <Text style={{ color: '#fff', fontWeight: '900', fontSize: 20 }}>{note.title}</Text>
                <View style={{ overflow: 'scroll' }}><Text style={{ color: '#fff', fontWeight: '900', fontSize: 18 }}>{addElipse(note.description, 100)}</Text></View>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <>
            <View style={{ marginTop: 100 }}><Text style={{ textAlign: 'center', fontSize: 35, fontWeight: '700', color: 'orange' }}>No notes found.</Text></View>
            <View style={{ marginTop: 50 }}><Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '700', color: 'orange' }} >Try Adding New Note</Text></View>
          </>

        )}
      </View>

    </ScrollView>
  )
}