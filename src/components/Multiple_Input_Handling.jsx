import React, { useState } from 'react'

export const Multiple_Input_Handling = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        age:"",
        phone:""
    })
    
    const onChangeHandler =(e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        alert('you have successfully submitting form')
        console.log("FormData:", formData)

        setFormData({
        name:"",
        email:"",
        password:"",
        age:"",
        phone:""
        })
    }

  return (
    <div>
       <form onSubmit={submitHandler}>
           <div>
            Name:<input type="text" value={formData.name} name="name"
            onChange={onChangeHandler}
            placeholder='enter your name'/>
           </div>
           <div>
            Email:<input type='email' value={formData.email} name="email"
            onChange={onChangeHandler}
            placeholder='enter your email'/>
           </div>
           <div>
             Password:<input type='password' value={formData.password} name='password' 
             onChange={onChangeHandler}
             placeholder='enter your password'/>
           </div>
           <div>
              Age:<input type='number' value={formData.age} name='age'
              onChange={onChangeHandler}
              placeholder='enter your age'/>
           </div>
           <div>
              Phone:<input type='number' value={formData.phone} name='phone'
              onChange={onChangeHandler}
              placeholder='enter your phone number'/>
           </div>
           <div>
              <button>Submit</button>
           </div>
       </form>
    </div>
  )
}
