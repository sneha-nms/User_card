  const UserData=[{
   name:"sneha",
   city:"Chennai",
   des:"fullstack Developer",
   skils:["HTMl","CSS","Javascript","Githup","git table","Node Js"],
   online:false,
   profile:"imges/1.jpeg"


  },{
   name:"Sharmila",
   city:"Trichy",
   des:"frontent Developer",
   skils:["HTMl","CSS","Javascript","Githup","git table","Node Js"],
   online:true,
   profile:"imges/2.jpeg"
  },{
   name:"Semila",
   city:"Trichy",
   des:"frontent Developer",
   skils:["HTMl","CSS","Javascript","Githup","git table","Node Js"],
   online:true,
   profile:"imges/3.jpeg"
  }];
 
 
 
 
 function User(props){
   return(
      <div className=" card_container">
        <span className={props.online ? "pro online": "pro offline"}>{props.online ? "ONLINE":"OFFLINE"}</span>
 <img  src={props.profile}className="img"></img>
 <h3>{props.name}</h3>
 <h3>{props.city}</h3>
 <p> {props.des}</p>
 <div className="buttons">
    <button className="btn btn-primary">Message</button>
    <button className="btn btn-primary btn-outline">Fllowing</button>
 </div>
 <div className="skils">
    <h6>SKILS</h6>
    <ul>{props.skils.map((skil,index) =>(
      <li key={index}>{skil}</li>
    ))}
        
        
    </ul>
 </div>
    </div>
   )

 }



export const UserCard = () => {
  return <>
  {UserData.map((user,index)=>(
   <User key={index} name={user.name}
   city={user.city}
   des={user.des}
   skils={user.skils}
   online={user.online}
   profile={user.profile}/>
  ))}
  
  </>
}
{/* <User name="Sneha" city="New york" des=" Frontent Developer" skils={["HTMl","CSS","Javascript","Githup","git table","Node Js"]}
online={false} profile=""  /> */}