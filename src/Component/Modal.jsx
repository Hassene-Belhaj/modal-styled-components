import React, { useRef } from 'react'
import { Button } from '../GlobalStyle/Button.Style'
import { BGLeftColumn, Close, Container, LeftColumn, ModalContainer, ModalDiv,RightColumn } from './Modal.Style'
// import { useSpring,animated } from '@react-spring/web'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Btn = styled.button`
background-color: #fff;
color:#000;
padding: 0.5rem 1rem ;
border-radius: 5px;
border : 2px solid #000;
position: relative;
transition : all 0.5s ease-in-out;
z-index: 2;
overflow: hidden;
cursor: pointer;

&::before{
position: absolute;
content: "";
background: #000;
top: 0 ;
bottom :0 ;
left : -2rem;
width: 0;
height: 100%;
transition : all 0.7s ease-in-out;
z-index:-1;
}

&:hover::before{
width :150% ;
transform: skewX(36deg);
transition : all 0.7s ease-in-out;

}
&:hover{
  color: #fff;
  transition : all 0.5s ease-in-out;
}
`






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
                        <Btn>Join Now</Btn>
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