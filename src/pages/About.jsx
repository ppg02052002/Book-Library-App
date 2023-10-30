import React from 'react'

const About = () => {
  return (
    <div>
     <h2 style={{alignItems:'center'}}>About Using Book Library App</h2>
     <div style={{height:"80vh"}}>
        <p>1. There will be two logins. One for user and one for librarian.</p>
        <p>2. Only librarian has access to add, update and delete books.</p>
        <p>3. Users cannot do those operations. </p>
        <p>4. User can only see the books that are available in the store.</p>
        
     </div>
    </div>
  )
}

export default About
