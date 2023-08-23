import axios from "axios"
import { useEffect,useState } from "react"



const ListUser=()=>{
    const [users,setUsers]= useState ([])
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>setUsers(res.data))
    },[])
    return(
        <div>
            <h1>List Users</h1>
            {
                users.map((el,i,t)=><h2>{el.name}</h2>)
            }
        </div>
    )
}

export default ListUser