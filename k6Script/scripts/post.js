import http from 'k6/http';
import { check } from 'k6';
//import libraries

// Import thresholds from external file
import { thresholdsSla } from '../lib/japt_lib.js';

// Import constants from external file
import { BASE_URL, HEADERS, PAYLOAD } from '../lib/environment.js' ;

export const options = {
    vus: 1,
    duration: '3s',
    thresholds: thresholdsSla, // Use imported thresholds

}


export default function () {

        //Define variable to pass in the Body
        let v_userName = `testjapt_${Date.now()}`;


    //Define object  Body and at same time Convert into JSON string with method stringify and pass in the object http request as argument
    const body = JSON.stringify({  

        username: v_userName,
        password: 'test'
    });
  
    //Pass the headers
    const params = {
        headers: HEADERS,


    };

    //Define http object
   let res = http.post(`${BASE_URL}/user/register/`,body,params); //receive the body

   //print user name and Status
   console.log(res.json().username);
   console.log(`Status code: ${res.status}`);


   
   //Define assertions. Compare the status of the object http
   check ( 
    res, {
        'status is 201': (r) => r.status === 201,
        'User created': (r) => r.json().username === v_userName,
   });
}