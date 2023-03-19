import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getnotesroute } from '../../Hooks'

export default function ViewNote() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getnotesroute(global.userID)
      .then(result => {
        if (result.status === 400) {
          ToastAndroid.show("Error in Loading Note", ToastAndroid.LONG)
        }
        else {
          console.log(result.data.notes);
          // setNotes(result.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  })


  return (
    <View>
      <Text>ViewNote</Text>
    </View>
  )
}