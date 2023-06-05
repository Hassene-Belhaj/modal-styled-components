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
background: rgba(0,0,0,0.8);
`

export const ModalDiv = styled.div`
width: 800px;
height: 600px;
background: #fff;
z-index: 100;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 1px #000 ;
@media screen and (max-width : 768px){
    width: 400px;
    height: 400px;
}
`

export const LeftColumn = styled.div`
width: 50%;
height: 100%;
display: flex;
position: relative;
border-radius: 5px;
img{
    width: 100%;
    object-fit: cover;
}
`
export const BGLeftColumn = styled.div`
inset: 0;
position: absolute;
background: rgba(0,0,0,0.5);

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
    margin: 0 auto;

}
p{
    width: 100%;
    font-size: 1rem;
    margin: 1rem 0;
    padding: 0 2rem;
    font-weight: 500;
}

`


export const Close = styled(AiOutlineClose)`
fill: #000;
top: 5px;
right: 5px;
position: absolute;
`