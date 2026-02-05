import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

    const { user,removeUser} = useAuth();



  return (
    <div>
        <h1>Welcome {user.name}</h1>

        <div>
            <button onClick={removeUser} >Logout</button>
        </div>
    </div>
  )
}

export default Dashboard