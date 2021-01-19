import React from 'react'
import {Table} from "react-bootstrap"


const App=()=>{
  const player=[
    {no:"1",Name:"Dhoni",Team:"india",role:"caption",age:"40",salary:"80000"},
    {no:"2",Name:"sachin",Team:"india",role:"batsman",age:"45",salary:"66000"},
    {no:"3",Name:"Natrajan",Team:"india",role:"bowler",age:"23",salary:"86000"},
    {no:"4",Name:"jadaja",Team:"india",role:"allrounder",age:"29",salary:"70000"},
    {no:"5",Name:"smith",Team:"aus",role:"batsman",age:"29",salary:"70000"},
    {no:"6",Name:"bravo",Team:"w.i",role:"allrounder",age:"34",salary:"70000"},
  ]
  const renderplayer= (player,index) => {
    return(
      <tr>
       
         <td>{player.no}</td>
        <td>{player.Name}</td>
        <td>{player.Team}</td>
        <td>{player.role}</td>
        <td>{player.age}</td>
        <td>{player.salary}</td>
      </tr>
    )

  }

return(<div className="demo"> 
<h2 className="demo1">welcome to my first react table</h2>
<h5>cricket players data:</h5>
<Table>
 <thead>
   <tr>
     <th>no</th>
     <th>Name</th>
     <th>Team</th>
     <th>role</th>
     <th>age</th>
     <th>salary</th>
   </tr>
 </thead>
 <tbody>
   {player.map(renderplayer)}
 </tbody>
 </Table>
  </div>
  );
}
export default App;