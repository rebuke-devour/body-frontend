import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ initialBody, handleSubmit, buttonLabel }) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialBody)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }


const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    navigate("/")
}

if (!formData){
return <h1>Loading</h1>
} else {
    return <form onSubmit={handleSubmission}>
<input
    type="text"
    placeholder="Name"
    onChange={handleChange}
    value={formData.name}
    name="name"
    />
<input
    type="text"
    placeholder="Date Discovered"
    onChange={handleChange}
    value={formData.date_discovered}
    name="date_discovered"
    />
<input
    type="text"
    placeholder="Details"
    onChange={handleChange}
    value={formData.details}
    name="details"
/>
    <input type="submit" value={buttonLabel}/>
</form >
}


}


export default Form;