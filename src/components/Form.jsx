import React, { useState } from 'react'

export const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const handleSubmit = (e)=>{
    e.preventDefault();
    alert('you have successfully submitted form' + " " + name + " " + " "+ email);

    setName('')
    setEmail('')
    setPassword('')
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            Name:<input value={name} onChange={(e)=>setName(e.target.value)} type='text'/>
            {name}
        </div>
        <div>
            Email:<input value={email} onChange={(e)=>setEmail(e.target.value)} type='email'/>
            {email}
        </div>
        <div>
            Password:<input value={password} onChange={(e)=> setPassword(e.target.value)} type='password'/>
            {password}
        </div>
        <div>
            <button>Submit</button>
        </div>
      </form>

    </div>
  )
}
