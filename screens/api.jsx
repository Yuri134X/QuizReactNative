import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api = () => {
const [value, setValue] = useState([{}])

useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{

        setValue(response.data)

    })
})

  return (
    <View>
      <Text>{JSON.stringify(value)}</Text>
    </View>
  )
}

export default api

const styles = StyleSheet.create({})