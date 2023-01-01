import React, { useState,useEffect } from 'react'
import { Link, useParams,useLocation } from 'react-router-dom';

function UserDetail() {
    const {id}= useParams();
    var location =useLocation();
    const [user,setUser]=useState(location.state);

    useEffect(() => {
        if(!user?.id){
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res)=>res.json())
      .then(data=>setUser(data));
        }
    }, [id,user]);
    
  return (
    <div>
        <h2>User Details</h2>
          {user &&  <pre>{JSON.stringify(user,null,2)}</pre>}
          <Link to={`/users/${Number(id)+1}`}>Next User</Link>
    </div>
  )
}

export default UserDetail;