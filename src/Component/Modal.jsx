import React, { useState } from 'react'
import { Button } from '../GlobalStyle/Button.Style'
import { Container, ModalBG, ModalContainer, ModalModal } from './Modal.Style'

const Modal = () => {
    const [show,setShow] = useState(false)
   
  const showModal = () => {
    setShow(!show)
  }

  return (
    <Container>
        <Button onClick={showModal} primary={true} padding={"2rem 4rem" }>I'm modal</Button>
     {show ? <ModalContainer>
             <ModalBG></ModalBG>   
              <ModalModal> <h2>modal</h2> </ModalModal>
    </ModalContainer>    : null}   
     
 </Container>
  )
}

export default Modal