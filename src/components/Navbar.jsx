import React from 'react'
import { Button } from '@chakra-ui/react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
  <Button colorScheme='teal' variant='ghost' gap ='0px'>
    Inspiration
  </Button>
  
  <Button colorScheme='teal' variant='ghost'>
    Find work
  </Button>
  
  <Button colorScheme='teal' variant='ghost'>
Learn Design
  </Button>
  
  <Button colorScheme='teal' variant='ghost'>
    Hire Designer
  </Button>



  </div>

 
  )
}

export default Navbar