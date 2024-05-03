

export const LearnComponents = () => {
  let coust="error";
   let answers = true;
   
   
   let item=["item1", "item2", "item3", "item4"];
   let  messages=answers?<p> welcome</p>:<p>sorry error this page</p>;
  return (
    
    <div>
      <h1 className="head">This is the coustam form Components</h1>
      <p className={coust} style={{fontSize:"20px"}}> tis is my first page</p>
      <p>20+20={20+40}</p>

      {messages}

    <ul>
      {item.map((item,index)=>(<li> {item}</li>))}
    </ul>


      </div>

  )
}
