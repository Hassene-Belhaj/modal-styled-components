import React from 'react'
import { Container } from '../../GlobalStyle/GlobalStyle.jsx'
import { Button } from '../../GlobalStyle/Button.Style.jsx'

const Main = ({show,setShow}) => {

 const showModal = () => {
 setShow(!show)
 }   
 
  return (

<>
    
    {show ?  null
        :    
        <Container>
        <Button onClick={showModal} primary={false} padding={"0.5rem 2rem" }>
          add
        </Button> 
        </Container>      
        }  

</>

        )
}

export default Main