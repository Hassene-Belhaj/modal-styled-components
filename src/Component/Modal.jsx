import React, { useState } from 'react'
import { Button } from '../GlobalStyle/Button.Style'
import { Close, Container, LeftColumn, ModalBG, ModalContainer, ModalModal, RightColumn } from './Modal.Style'

const Modal = () => {
    const [show,setShow] = useState(false)
   
  const showModal = () => {
    setShow(!show)
  }

  const handleClose = () => {
    setShow(!show)
  }

  return (
    <Container>
        {show ?  null: <Button onClick={showModal} primary={true} padding={"2rem 4rem" }>I'm modal
        </Button> }
      
    
    
     {show ? <ModalContainer>
             <ModalBG></ModalBG>   
              <ModalModal> 
                    <LeftColumn>
                        <img src="" alt="" />
                    </LeftColumn>
                    <RightColumn>
                        <h2>are ready ? </h2>
                        <p>get exclusive access to our next launch</p>
                    </RightColumn>
                    <Close size={25} onClick={handleClose}/>
                 </ModalModal>
             </ModalContainer>   
        : null}   
     
 </Container>
  )
}

export default Modal