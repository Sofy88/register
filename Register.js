import { useRef } from "react"
import { registerUser } from "../API"

const Register = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: "onChange"});
    console.log(isValid);
    const Submit = async (data) => {
        console.log(data);
        try {
                const data = await registerUser(
                     username.current.value, 
                     password.current.value, 
                     email.current.value, 
                     firstName.current.value, 
                     lastName.current.value);
    
                 alert("Register user successfully.");
    
             } catch (err) {
                 alert(err);
             }
        }



    
        }
    }

    return (
        <>
         <form>
            <label className="labels">Username:</label>
            <input 
                {...register("username",
                    { required: "the username is required."})}
                    type="text">
                    </input><br/>
                    { errors.username && <p>{errors.username.message} </p> }
                <label className="labels">Email :</label><input {...register("email", { required:  "the email is required."})} type="email"></input><br />
                { errors.email && <p>{errors.email.message} </p> }
                <label className="labels">Password :</label><input {...register("password", { required:  "the password is required."})} type="password"></input><br />
                { errors.password && <p>{errors.password.message} </p> }
                <label className="labels">Firstname :</label><input {...register("firstname", { required: "the firstname is required."})} type="text"></input><br />
                { errors.firstname && <p>{errors.firstname.message} </p> }
                <label className="labels">LastName :</label><input {...register("lastname", { required: "the lastname is required."})} type="text"></input><br />
                { errors.lastname && <p>{errors.lastname.message} </p> }
                <button disabled={!isValid} onClick={handleSubmit(Submit)}>Submit</button>
            </form>
        </>
    )
}

export default Register;