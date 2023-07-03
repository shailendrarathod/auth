import React from 'react'

const Home = () => {
  return (
    <>
    <section className='heading'>
            <h1>What do you need help with?</h1>
            <p>Please choose from an option below</p>
          </section>
    
          <a to='/new-ticket' className='btn btn-reverse btn-block'>
             Create New Ticket
          </a>
    
          <a to='/tickets' className='btn btn-block'>
           View My Tickets
          </a>
    </>
  )
}

export default Home
