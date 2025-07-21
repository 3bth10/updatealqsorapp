import { StatusBar } from 'expo-status-bar';
import { useState , useContext } from 'react';
import { Button, StyleSheet, Text, View  , Image} from 'react-native';
import { mydata } from './_layout';
import * as SQLite from 'expo-sqlite';
import { Link } from 'expo-router';
import  logo from '../assets/alqsorlogo.png'

const home = ()  =>{
const [name , setname ] = useState('mussa')
const [halls , sethalls ] = useState([])
const n = useContext(mydata)

const getdata  = n[0].getdata
const show  = n[0].show
const insert  = n[0].insert
const addcol  = n[0].addcol

const ch = () => {
   setname(prev => (prev === 'mussa' ? 'aly' : 'mussa'));

   getdata()

   
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>حساب الحفلات  </Text>
      
        <Image source={logo} style={styles.img} />
      <StatusBar style="auto" />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:  '#ddd' , 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize : 23 , 
    color : 'coral',
    fontWeight : 'bold'
  }
  , img : {
    margin : 30 , 
    width :230,
    height :300,
    color : 'coral'
  }
});
export default home
