import { isRejected } from "@reduxjs/toolkit";

// A mock function to mimic making an async request for data
export function CreateUser(userData) {
  return new Promise(async (resolve) =>{
    const reponse = await fetch('http://localhost:8080/users', {method: 'POST', body: JSON.stringify(userData),headers: {'content-type':'application/json' }}) 
    const data = reponse.json()
    resolve({data})
  }
  );
}
export function CheckUser(loginInfo) {
  return new Promise(async (resolve,reject) =>{
    const email = loginInfo.email
    const password = loginInfo.password
    const reponse = await fetch('http://localhost:8080/users?email='+email) 
    const data = reponse.json()
    if(data.length){
      if(password===data[0].password){

        resolve({data:data[0]})
      }
      else{
        
        reject({message: 'Wrong Credentials'})
      }
    }else{
      reject({message: 'User Not Found'})
    }
    
  }
  );
}
