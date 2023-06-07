import React, { useRef } from 'react'
import { Button } from '../GlobalStyle/Button.Style'
import { BGLeftColumn, Close, Container, LeftColumn, ModalContainer, ModalDiv,RightColumn } from './Modal.Style'
// import { useSpring,animated } from '@react-spring/web'
import { motion } from 'framer-motion'







const Modal = ({show,setShow}) => {

    // const Ref = useRef()
    // const animation = useSpring({
    //   config : {
    //     duration : 300,
    //   },
    //   opacity : show ? 1 : 0  ,
    //   transform : show ? `translateY(0%)` : `translateY(-100%)`
    // })  
  return (
<Container>
     {show ? 
  <ModalContainer >
    <motion.div 
       initial={{
        y : "-100vh"
       }}
       animate={{
          y : 0 ,
          transition : {
          type: "spring" ,
          bounce : 0.2 ,
          duration : 1 ,
         }
       }}
       >
       {/* <animated.div style={animation}> */}
              <ModalDiv  > 
                    <LeftColumn>
                      <BGLeftColumn></BGLeftColumn>
                        <img src='photo.jpg' alt="" />
                    </LeftColumn>
                    <RightColumn>                  
                        <h2>are ready ? </h2>
                        <p>get exclusive access to our next launch</p>
                        <Button primary={true} margin={"0.5rem auto"} padding={"0.3rem 1rem"}>Join Now</Button>
                       <Close size={25} onClick={()=>setShow(false)}/>
                    </RightColumn>
                 </ModalDiv>
      {/* </animated.div> */}
    </motion.div>
  </ModalContainer>   
      : null}       
 </Container>
  )
}

export default Modal