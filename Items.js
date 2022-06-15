import { useState, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';


const SERVER_URL = "https://abra-course-server.herokuapp.com/";
    
const Items = (props) => {

    const [accessToken, setAccessToken ] = useState(undefined);
    const [Items, setItems] = useState(undefined);
  
       useEffect(() => {
        setAccessToken(localStorage.getItem("Token"))
       }, [accessToken]);
    
    const login = async (username, password) => {

        const payload = {
            username,
            password
        }

    const response = await fetch(SERVER_URL + "api/token/",
     {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(payload)
    })

    const data = await response.json()

    return data.access
    }


    const register = async (username, password, email, firstName, lastName) => 
    {
   

    const payload = {
        username: username,
        password: password,
        password2: password,
        email: email,
        first_name: firstName,
        last_name: lastName
};

    try{

        const response = await fetch(SERVER_URL + "register/", 
        {
            headres: {
            'Content-Type': 'application/json'
        },
        method: "POST", 
        body: JSON.stringify(payload)

    })

    const data = await response.json()
        console.log(data);
    }catch(err){
        console.log(err);
        }
    }
    const getItems = async () => {
        const response = await fetch(SERVER_URL + "items/", 
        {
            headers: {
                'Content-Type': 'aplication/json',
                'Autorization': 'Bearer ' + accessToken
            },
            method: "GET"
        })
        if (response.status === 200) {
        const data = await response.json()
         console.log(data); 
        
         setItems(data)
        }
    }  
        const createItems = async ( name ) => {
            const payload = {
                name
        };
        
            const response = await fetch(SERVER_URL + 'items/',
            {
                headers: {
                    'Content-Type': 'aplication/json',
                    'Autorization': 'Bearer ' + accessToken
                },
            method: "POST", 
            body: JSON.stringify(payload)
        })
        const data = await response.json();
        console.log(data);
        
        
    }
    const loginUser = async () => {
        const accessToken = await login("SofyMilka","Sofy1988")
        setAccessToken(accessToken);
        localStorage.setItems("Token", accessToken);
        console.log(accessToken);  
    }
      

return ( 
    <div>
        <nav> 
            <Link to="items/register">Register</Link>
            <Link to="items/login">Login</Link>
            <Link to="items/Items">Items</Link>
        </nav>

        <Outlet />

    </div>
         
    )

}
    
export default Items;