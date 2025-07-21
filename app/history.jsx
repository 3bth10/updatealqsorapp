import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { mydata } from './_layout'
import { Ionicons } from '@expo/vector-icons'


const hall = () => {
const n = useContext(mydata)
const listdata = (n[1].data)
const d = (n[0].delete)

const myalert = (i) => {
  Alert.alert( 'yoo', ' you about to delete ' ,
  [
  {
   text : 'yes' 
   , style : 'destructive',
   onPress: () => {d(i)}
  
  },
  {
   text :  'no'
   , style : 'cancel',
   
  }

])
} 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>سجل الحفلات </Text>
            <Text style={{color: 'coral'  , fontSize : 15, fontWeight : 'bold' , }}>عدد الحفلات {listdata.length} </Text>

      <View style={{backgroundColor : 'coral'  , flexDirection : 'row'  , width : '100%' , }} >
        <Text style={styles.header}> الاسم  </Text>
        <Text style={styles.header} > السائق  </Text>
        <Text style={styles.header}> الموقع  </Text>
        <Text style={styles.header}> السخانات  </Text>
        <Text style={styles.header}> العمالة  </Text>
        <Text style={styles.header}> التاريخ  </Text>
      </View>
<ScrollView  alignItems="center" >
        {listdata.map((e, i ) => { 
          
          
          return ( 
           <View  style={styles.halls} key={i}>
           <Text style={[styles.text ]}  >  {e.hall}</Text>
           <Text style={[styles.text ]}  >  {e.driver}</Text>
           <Text style={styles.text} > {e.location}</Text>
           <Text style={styles.text} > {e.number_heaters}</Text>
           <Text style={styles.text} > {e.how_many}</Text>
           <Text style={styles.text} > {e.date}</Text>
           <TouchableOpacity  style={styles.dle}
           onPress={ () => {
            d(e.id)
             }}>
            <Text style={{color : '#fff'}} > <Ionicons name='remove' /> </Text>
            </TouchableOpacity>
            </View>
        
          )})}
     </ScrollView>
      
    </View>
  )
}

export default hall

const styles = StyleSheet.create({
    container: {
    flex : 1,
    alignItems : 'center' ,
    justifyContent : 'center' ,
    backgroundColor: '#fff',
   margin : 5 ,
   paddingBottom : 70 ,
   direction : 'rtl'
   , backgroundColor : '#ddd'
   
  },
  title : {
    marginTop : '20%',
    marginBottom : '10%',
    fontSize : 23 , 
    color : 'coral',
    fontWeight : 'bold'
  }, 
  dle : {
    backgroundColor : 'coral' , 
    borderRadius : 10 , 
   
  }, 
  halls : {
   flexDirection : 'row',
    alignItems : 'center',
justifyContent : 'space-between', 
borderBlockColor : 'coral' , 
width : '100%',
borderBottomWidth : 1 ,
    
  },
      text: {       
        flex : 1,
       fontWeight  : '500' ,
        borderRadius  : 10,
        margin : 2 , 
        padding : 2 , 
        textAlign: 'center', 
       
    }, 
  header: {
    flex : 1 ,
    color : '#fff' , 
    margin :2,
    
    
  }
})
