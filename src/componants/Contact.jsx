import React from 'react'
import { useState } from 'react';
export default function Contact(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
        message: "",
      });
      const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    const handleSubmit = (e) => {
        
        const { name, email, project, message } = formData;
    
        if (name === "") {
          setError("Name is required");
          e.preventDefault();
        } else if (email === "") {
          setError("Email is required");
          e.preventDefault();
        } else if (project === "") {
          setError("Project type is required, e.g., Web developer");
          e.preventDefault();
        } else if (message === "") {
          setError("Detail about project is required");
          e.preventDefault();
        } else {
        }
      };
  return (
    <>
        <main className='contactMain'>
            <div className="formMain">
                <h3 className='my-3'>Contact</h3>
                <form  onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={props.api}/>
                    <input type="text" name='name' placeholder='Enter first name' autoComplete='off' onChange={handleChange}/>
                    {/* <input type="text" name=' placeholder='Enter last name' autoComplete='off'/> */}
                    <input type="email" name='email' placeholder='Enter email' autoComplete='off' onChange={handleChange}/>
                    <input type="text" name='project' placeholder='Enter Project eg.Ecommerce website' autoComplete='off' onChange={handleChange}/>
                    <textarea name="message" placeholder='Any message' onChange={handleChange}></textarea>
                    {error && <p className="text-danger">{error}</p>}
                    <button className='btn btn-outline-success'>Submit</button>
                </form>
            </div>
        </main>
    </>
  )
}
