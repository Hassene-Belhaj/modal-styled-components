import React, { useState,useEffect, useRef } from 'react'
import { Button } from '../GlobalStyle/Button.Style'
import { BGLeftColumn, Close, Container, LeftColumn, ModalContainer, ModalDiv,RightColumn } from './Modal.Style'
import { useSpring,animated } from '@react-spring/web'

const Modal = () => {

    const [show,setShow] = useState(false)
    const Ref = useRef()

  const animation = useSpring({
    config : {
    duration : 300,
    },
    opacity : show ? 1 : 0  ,
    transform : show ? `translateY(0%)` : `translateY(-100%)`
  })  
   
  const showModal = () => {
    setShow(!show)
  }

  const handleClose = () => {
    setShow(!show)
  }

  return (
    <Container ref={Ref}  >
    {show ?  null
    : 
    <Button onClick={showModal} primary={true} padding={"0.5rem 1rem" }>
      I'm modal
    </Button> }
      
    
    
     {show ? 
     <ModalContainer >
       <animated.div style={animation}>
              <ModalDiv > 
                    <LeftColumn>
                      <BGLeftColumn></BGLeftColumn>
                        <img src='photo.jpg' alt="" />
                    </LeftColumn>
                    <RightColumn>
                        <h2>are ready ? </h2>
                        <p>get exclusive access to our next launch</p>
                        <Button primary={true} margin={"0.5rem auto"} padding={"0.3rem 1rem"}>Join Now</Button>
                    </RightColumn>
                    <Close size={25} onClick={handleClose}/>
                 </ModalDiv>
      </animated.div>
      </ModalContainer>   
      : null}   
     
 </Container>
  )
}

export default Modal