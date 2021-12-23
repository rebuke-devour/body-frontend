import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./app.css"
const Form = ({ initialBody, handleSubmit, buttonLabel }) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialBody)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }


const handleSubmission = (event) => {
    // event.preventDefault()
    handleSubmit(formData)
    navigate("/")
}

if (!formData){
return <h1>Loading</h1>
} else {
    return <form 
 

    >
<input

    type="text"
    placeholder="Name"
    onChange={handleChange}
    value={formData.name}
    name="name"
    className="box-shadow: 0 1px 3px 0 rgba(255, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
    />
<input

    type="text"
    placeholder="Date Discovered"
    onChange={handleChange}
    value={formData.date_discovered}
    name="date_discovered"
    className="box-shadow: 0 1px 3px 0 rgba(255, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
    />
<input

    type="text"
    placeholder="Details"
    onChange={handleChange}
    value={formData.details}
    name="details"
    className="box-shadow: 0 1px 3px 0 rgba(255, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
/>
    {/* <input type="submit" value={buttonLabel} class="bg-red-400 p-3 pl-4 pr-4 rounded-lg font-bold transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-red-600"/> */}
    <button onClick={handleSubmission} className="bg-red-400 p-3 pl-4 pr-4 rounded-lg font-bold transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-red-600">{buttonLabel}</button>
</form >
}


}


export default Form;