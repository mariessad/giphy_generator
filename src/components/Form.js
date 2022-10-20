import React from 'react'
import {useState} from 'react'

function Form(props) {
    // define a function that is our component, and declare the props parameter

    const [formData, setFormData] = useState({
        searchTerm: "",
    });

    // handleChange updates formData when user types into form
    const handleChange = (event) => {
        // use the event object to detect key and value to update
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        // prevent the default, which prevents refreshing on form submission
        event.preventDefault();
        // pass the search term to giphy search prop, the getGiphy function on the App.js
        props.giphysearch(formData.searchTerm);
    }
  return (
    <div><form className='giphy-form' onSubmit={handleSubmit}>
        <label className='giphy-form-label'>Enter prompt for a random GIF</label>
        <br/>
        <input className='text-input' type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} required></input>
        <br/>
        <input className="submit-button" type="submit" value="submit"></input>
    </form></div>
  )
}

export default Form