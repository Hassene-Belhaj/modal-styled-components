import styled from "styled-components";
import {AiOutlineClose} from 'react-icons/ai'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ModalContainer = styled.div`
width: 100%;
height: 100%;
`

export const ModalBG = styled.div`
width: 100%;
height: 100%;
position: absolute;
inset: 0;
background: rgba(0,0,0,0.9);
z-index: 50;
`
export const ModalModal = styled.div`
width: 50%;
height: 50%;
position: fixed;
top:50%;
left: 50%;
transform:translate(-50%,-50%) ;
background: #fff;
z-index: 100;
border-radius: 5px;
display: flex;
`

export const LeftColumn = styled.div`
width: 50%;
height: 100%;
background:#000;
`

export const RightColumn = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-transform: uppercase;
`


export const Close = styled(AiOutlineClose)`
fill: #000;
top: 5px;
right: 5px;
position: absolute;
`