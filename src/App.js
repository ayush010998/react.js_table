import axios from 'axios';
import {useState,useEffect} from 'react';

function App() {

  const [data,setData]=useState([])

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
    
  })
  return (
    <div className="App">
      <h1>Fetching data through axios </h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        
            {
               data.map((user,index)=>{
                return <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>

                </tr>
               })
            }
  
        </tbody>
      </table>

    </div>
  );
}

export default App;
