import React from 'react'
import './style.css';

 

function Users() {
  const [inputName, setInputName] = React.useState();
  const [inputAge, setInputAge] = React.useState();
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [clicked,setClicked]=React.useState(false)
  const showUser = React.useCallback(() => {
    setClicked(true)
    setLoading(true)
    fetch("https://6363b35237f2167d6f80918f.mockapi.io/Users").then((response) =>
      response.json()).then((user) => {
        setUsers(user);

      }).finally(() => {
        setLoading(false)
      })
     
  }, []);
  const infoName = React.useCallback((e) => {
    const { value } = e.target;
    setInputName(value);
    
  }, [])
  const infoAge = React.useCallback((e) => {
    const { value } = e.target;
    setInputAge(value);
  },[])

  const post = React.useCallback(() => {
    const user = {
      "name": inputName,
      "age": inputAge,
    }
    fetch("https://6363b35237f2167d6f80918f.mockapi.io/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      
      },
      body: JSON.stringify(user),
    })
    
  }, [inputName,inputAge]);
  const filterData = React.useMemo(() => {
    let test = [];
    if (users) {
      test = users;
    }
    if (clicked) {
      test = test.filter((item) => 
        Number(item.age)>inputAge
      )
    }
    return test;
  },[users,clicked,inputAge])
 
  
  return (
    <>
      <input placeholder='name' onChange={infoName}></input>
      <input placeholder='enter age/filter age' onChange={infoAge}></input>
      <button onClick={post}>Send</button>
      <button onClick={showUser}>Show</button>
      {loading ? <h1 className='load'>loading....</h1> : 
       <div>
          {filterData.map(({ name, id, age }) => (
          
          <h5 className='user' key={id} >
          id: {id} name: {name} age: {age}
            </h5>
          
        ))}
          
        </div>
        
      }
   
     
    
    </>
 
  );
}

export default Users