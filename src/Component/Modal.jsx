import React, { useState,useEffect, useRef } from 'react'
import { Button } from '../GlobalStyle/Button.Style'
import { Close, Container, LeftColumn, ModalContainer, ModalModal, RightColumn } from './Modal.Style'
import { useSpring,animated } from '@react-spring/web'

const Modal = () => {
    const [show,setShow] = useState(false)

    const Ref = useRef()

  const animation = useSpring({
    config : {
    duration : 200,
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
    <Container   >
    {show ?  null
    : 
    <Button onClick={showModal} primary={true} padding={"0.5rem 1rem" }>
      I'm modal
    </Button> }
      <animated.div style={animation}>
      
    
    
     {show ? 
     <ModalContainer ref={Ref}>
              <ModalModal > 
                    <LeftColumn>
                        <img src='photo.jpg' alt="" />
                    </LeftColumn>
                    <RightColumn>
                        <h2>are ready ? </h2>
                        <p>get exclusive access to our next launch</p>
                        <Button primary={true} margin={"0.5rem auto"} padding={"0.3rem 1rem"}>Join Now</Button>
                    </RightColumn>
                    <Close size={25} onClick={handleClose}/>
                 </ModalModal>
      </ModalContainer>   
      : null}   
     
      </animated.div>
 </Container>
  )
}

export default Modal