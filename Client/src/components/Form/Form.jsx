import { useState } from "react"
import validation from "../Validation/Validation"

const Form = ({login}) =>{
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) =>{
        event.preventDefault(); //sin esto la pagina se recarga cuando le damos a submit
        login(userData)
    }

    const handleChange = (event)=>{
        setUserData({...userData,
                     [event.target.name] : event.target.value})

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    return( //!El 'htmlFor' referencia al input ,, le ponemos name=email al input y lo que escirba el user se ve reflejado en htmlFor
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}></input>
            {errors.email && <p style={{color:"white"}}>{errors.email}</p>}
            <hr></hr>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}></input>
            {errors.password && <p style={{color:"white"}}>{errors.password }</p>}

            <button type="Submit">Submit</button>
        </form>
    )
}

export default Form;