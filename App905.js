import React from 'react'
import {View,Text,Image} from 'react-native'

export const typeBanana=(props)=>{
  return(
    <View style={{alignItems:"center"}}>
      <Text>Type {props.name}</Text>
      <Text>111</Text>
    </View>
  )
}
const Banana=()=>{
  let pic={
    uri:'https://raytexantimes.com/wp-content/uploads/2019/02/bananas.jpg',
  }
  return(
    <View style={{backgroundColor:"red",alignItems:"center"}}>
      <Image 
      style={{width:450,height:250,marginTop:20}}
      source={pic}/>
      <Text>Hello I am a...</Text>
      <typeBanana name='1. Cavendish Banana'/>
    </View>
  )
} 
export default Banana;