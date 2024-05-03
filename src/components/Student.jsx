

export const Student = (props) => {
  return (
    <div className='container'>
    <table className='table'>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>address</th>
            
        </tr>
        <tr>
        <td>{props.Name}</td>
        <td>{props.age}</td>
        <td>{props.address="chennai" ? "yes":"No"}</td>
      
        </tr>
       
    </table>



    </div>
  );
}
