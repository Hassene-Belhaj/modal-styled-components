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
display: flex;
justify-content: center;
align-items: center;
`

// export const ModalBG = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// inset: 0;
// background: rgba(0,0,0,0.9);
// z-index: 50;
// `

export const ModalModal = styled.div`
width: 800px;
height: 600px;
position: fixed;
top:50%;
left: 50%;
transform:translate(-50%,-50%) ;
background: #fff;
z-index: 100;
border-radius: 5px;
display: flex;
box-shadow: 1px 1px 1px #000 ;
@media screen and (max-width : 768px){
    width: 500px;
    height: 500px;
}
`

export const LeftColumn = styled.div`
width: 50%;
height: 100%;
background:#000;
display: flex;
border-radius: 5px;
img{
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
}
`

export const RightColumn = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-transform: uppercase;
h2{
    font-size:1.2rem ;
}
p{
    width: 90%;
    font-size: 1.2rem;
    margin: 1rem auto;
    font-weight: 500;
}
`


export const Close = styled(AiOutlineClose)`
fill: #000;
top: 5px;
right: 5px;
position: absolute;
`