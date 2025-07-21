import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TouchableOpacity  , TouchableWithoutFeedback} from 'react-native'
import home from './App'
import { mydata } from './_layout'



const Create = () => {

    const [namehall , setnamehall ] = useState('')
    const [location , setlocation ] = useState('')
    const [driver , setdriver ] = useState('')
    const [how_many , sethow_many ] = useState(0)
    const [number_heaters , setnumber_heaters ] = useState(0)
    const [date , setdate ] = useState(0)

    const datadb = useContext (mydata)

    const add = datadb[0].insert
    const show = datadb[0].show
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
    <View style={styles.bigcon } > 
    <Text style={{fontSize : 23 , color : 'coral', margin : 4,  fontWeight  : 'bold' , textDecorationLine : 'underline'
    }}>
        تسجيل حفلة جديدة 
    </Text>
   

  

 
    <View  style={styles.con}>
     <TextInput placeholder='اسم القاعة '  style={styles.input}
     value={namehall} onChangeText={setnamehall}/> 

      <TextInput placeholder='الموقع'  style={styles.input} value={location} onChangeText={setlocation}/> 

      <TextInput placeholder='عدد السخانات' keyboardType='numeric' style={styles.input}
       value={number_heaters} onChangeText={setnumber_heaters}/> 

      <TextInput placeholder='عدد الاشخاص' keyboardType='numeric' style={styles.input}
      value={how_many} onChangeText={sethow_many}/> 

      <TextInput placeholder='السائق ' keyboardType='' style={styles.input}
      value={driver} onChangeText={setdriver}/> 
      <TextInput placeholder='التاريخ ' keyboardType='' style={styles.input}
      value={date} onChangeText={setdate}/> 

      <TouchableOpacity onPress={() =>{ 
        add( namehall ,location,how_many, number_heaters , driver , date)
    show() }
        
        } style={{backgroundColor : 'coral' , width : '50%',  borderRadius:10 }}>
    <Text style={styles.btnText}
    >حفظ</Text>
</TouchableOpacity>
    </View>
    
    </View> 
    </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
    bigcon : {
        backgroundColor:  '#ddd' , 
flex : 1, 
justifyContent : 'center',
alignItems : 'center',


    },
    con: {
        backgroundColor:  '#ddd' , 
        flexDirection : 'row' , 
        flexWrap : 'wrap' , 
        justifyContent : "center"
  

    },
    input: {
        
        width: '40%' , 
        backgroundColor : '#fff', 
        borderRadius  : 10,
        padding : 10 , 
        margin: 5 , 
        textAlign: 'center', 
       
    }, 
    btnText : {color : '#fff', textAlign:'center'  , height : 40 , fontSize : 20 , flexWrap : 'wrap'
        
     }
})