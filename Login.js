import { useRef } from "react"
import { useOutletContext } from "react-router-dom";
import { loginUser } from "../API"
import { useForm } from "react-hook-form"


const userName = useRef("");
    const password = useRef("");

    const [userData, setUserData] = useOutletContext();

    const logOut = () => {
        setUserData(undefined);
    }
    const loginClicked = async (event) => {
        event.preventDefault();
        try
        {
            const accessToken = await loginUser(userName.current.value, 
                password.current.value);  
                
            const userData = {
                accessToken : accessToken,
                userName : userName.current.value
            }

            setUserData(userData);
        } catch (err) {
            console.log(err);
        }
    }

    const { userName, handleSubmit, formState { errors, isValid}}
    return (
        <>
            { !userData ? 
            <>       
                <form>
                    <label className="labels">Username :</label>
                    <input {...register("username", {required:"username is required"})} 
                    ref={userName} type="text">
                        </input>
                        {errors.username && <p>{errors.username.message}</p>}
                        <br></br>
                    <label className="labels">Password :</label>
                    <input {...register("username", {required:"username is required"})} 
                    ref={password} type="password">
                        </input>
                        {errors.username && <p>{errors.username.message}</p>}
                        <br></br>
                    <button onClick={loginClicked}>Login</button>
                </form>
            </> :
                <p>You are already Loggin. first <a href="#" onClick={logOut}>Logout</a>.</p>}
        </>
    )
}

export default Login;