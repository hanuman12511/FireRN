import React,{useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import {Text} from 'react-native';
export default function App() {
  useEffect(()=>{
 WriteData();
 ReadData();
  })
  const ReadData=async()=>{
    try { 
    await firestore()
    .collection('Users')
    .get()
    .then(documentSnapshot => {
      console.log('User exists: ', documentSnapshot.exists);
     if (documentSnapshot.exists) {
        console.log('User data: ', documentSnapshot.data());
      }
    });
    
  } catch (error) {
   console.log('dara')   
  }
  }
  const WriteData=async()=>{
    try {
      const userDocument =await firestore().collection('Users')
      .doc('abcc')
      .collection('dip')
      .doc('id')
      .set({
        name: 'Ada Lovelace',
        age: 30,
        dept:[{dp:'it'}]
      })
      .then(() => {
        console.log('User added!');
      });
      console.log(userDocument)
      } catch (error) {
     console.log("error=",error) 
    }
  }
  return (
    <Text>App</Text>
  )
}
