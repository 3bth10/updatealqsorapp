import {Stack, Tabs} from 'expo-router'
import { createContext, useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';

export const mydata = createContext()

function _layout() {
  const [update , setupdate] = useState(false)
  const [date , setdate] = useState([ ])
  

const getdata = async() =>{
  const db = await SQLite.openDatabaseAsync('halls');
  console.log('get date from datebase ...')
  await db.execAsync(`PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS halls (id INTEGER PRIMARY KEY NOT NULL, hall TEXT NOT NULL,location TEXT NOT NULL, number_heaters INTEGER , how_many INTEGER , driver , date) `)
   

}

const insertdata = async (name, location, how_many, number_heaters, driver, date) => {
  try {
    const db = await SQLite.openDatabaseAsync('halls');

    if (name && location && number_heaters) {
      console.log('Inserting data into database...');


      const result = await db.runAsync(
        `INSERT INTO halls (hall, location, number_heaters, how_many, driver , date ) VALUES (?, ?, ?, ? , ? , ?)`,
        [name, location, number_heaters, how_many, driver, date]
      );

      console.log('Inserting is done.');
      console.log('Last inserted row ID:', result.lastInsertRowId, 'Changes:', result.changes);

      showdata();
    } else {
      console.warn('Missing required fields: name, location, or number_heaters');
    }

  } catch (e) {
    console.error('This is what happened...', e);
  }
};

const showdata = async() =>{
  try{
      const db = await SQLite.openDatabaseAsync('halls');
      const allRows = await db.getAllAsync('SELECT * FROM halls');
      setdate([ ...allRows])
  }catch (e) {
    console.error('This is what happened...', e);
  } }

const deletedata = async(id) =>{
  try{
      const db = await SQLite.openDatabaseAsync('halls');
      console.log('delete from databease ...')
await db.runAsync('DELETE FROM halls WHERE id = ?',  [id ])   
   console.log('is done delete ' , id)
   showdata()

  }catch (e) {
    console.error('This is what happened...', e);
  }
 }

useEffect( ()=> {
  showdata()

},[update])



const  myfun =[ { 'show' : showdata , 'insert' : insertdata ,'getdata' : getdata  , 'delete' : deletedata},
  {'data' : date}
]



  return (
  <mydata.Provider value={myfun} >
<StatusBar style="auto" />
     <Tabs  screenOptions={
      {headerShown : false  , tabBarActiveTintColor : '#fff' , tabBarActiveBackgroundColor : 'coral' , } 
     }>
      <Tabs.Screen name='App' options={{title : 'Home',  tabBarIcon: () => (
        <Ionicons size={20}
        name='home-outline' />
  )}} />
      <Tabs.Screen name='create' options={{title : 'Create',  tabBarIcon: () => (
        <Ionicons size={20}
        name='add-outline' />
  )}} />
      <Tabs.Screen name='history' options={{title : 'History',  tabBarIcon: () => (
        <Ionicons size={20} 
        name='document-outline' />
  )}} />
      
  
 </Tabs>
  </mydata.Provider>

  )
}

export default _layout
